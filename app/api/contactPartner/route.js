import nodemailer from "nodemailer";
import path from "node:path";

/* export const runtime = "nodejs"; */

const INTREST = new Set(["Digital skills acquisition", "Technology training programme", "Workshops / Bootcamps", "Workforce development"]);
const ORGTYPE = new Set(["School / Educational institution", "NGO / Development organisation", "Business / Corporate", "Government / Public institution", "Other"]);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const htmlEscape = (value) => String(value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[c]));

export async function POST(request) {
    let data;
    try {
        if (Number(request.headers.get("content-length") || 0) > 20000) {
            return Response.json({ error: "Message is too long." }, { status: 413 });
        }
        data = await request.json();
    } catch {
        return Response.json({ error: "Invalid form submission." }, { status: 400 });
    }

    if (!data || typeof data !== "object") {
        return Response.json({ error: "Invalid form submission." }, { status: 400 });
    }
    // Silent spam trap; ordinary visitors never see this field.

    const name = typeof data.yourName === "string" ? data.yourName.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const interest = typeof data.interest === "string" ? data.interest.trim() : "";
    const orgtype = typeof data.orgType === "string" ? data.orgType.trim() : "";
    const orgname = typeof data.orgName === "string" ? data.orgName.trim() : "";
    const details = typeof data.details === "string" ? data.details.trim() : "";

    if (!name || name.length > 120 || !orgname || orgname.length > 120 || !EMAIL.test(email) || email.length > 254 ||
        !INTREST.has(interest) || !ORGTYPE.has(orgtype) || !details || details.length > 10000) {
        return Response.json({ error: "Please provide a valid name, email address, organisation type, area of interest and message." }, { status: 400 });
    }

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT  = process.env.SMTP_PORT;
    const SMTP_USER  = process.env.SMTP_USER;
    const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
    const SMTP_FROM_EMAIL = process.env.SMTP_FROM_EMAIL;
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
    /* const SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM_EMAIL, CONTACT_TO_EMAIL  = process.env; */

    const port = Number(SMTP_PORT || 465);
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !SMTP_FROM_EMAIL || !CONTACT_TO_EMAIL ||
        !Number.isInteger(port) || port < 1 || port > 65535 ||
        !EMAIL.test(SMTP_FROM_EMAIL) || !EMAIL.test(CONTACT_TO_EMAIL)) {
        console.error("Contact mail configuration is missing or invalid.");
        return Response.json({ error: "The contact service is temporarily unavailable. Please email us directly." }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASSWORD,
        },
        connectionTimeout: 20000,
        greetingTimeout: 20000,
        socketTimeout: 30000,
    });
    const from = `GMTDevs Academy <${SMTP_FROM_EMAIL}>`;

    try {
        // Send the actual enquiry first. Reply-to goes to the visitor.
        await transporter.sendMail({
            from,
            to: CONTACT_TO_EMAIL,
            replyTo: email,
            subject: `GMTDevs Academy enquiry`,
            text: `New website enquiry\n\nName: ${name}\nOrgName: ${orgname}\nEmail: ${email}\nInterest: ${interest || "Not specified"}\nOrgtype: ${orgtype || "Not specified"}\n\nMessage:\n${details}`,
            html: `<h2>GMTDevs Academy Partnership Enquiry</h2><p><strong>Name:</strong> ${htmlEscape(name)}</p><p><strong>OrganisationName:</strong> ${htmlEscape(orgname || "not specified")}</p><p><strong>Email:</strong> ${htmlEscape(email)}</p><p><strong>Interest:</strong> ${htmlEscape(interest || "Not specified")}</p><p><strong>Orgtype:</strong> ${htmlEscape(orgtype || "Not specified")}</p><p><strong>Message:</strong></p><p style="white-space:pre-wrap">${htmlEscape(details)}</p>`,
        });
    } catch (error) {
        console.error("Contact notification email failed:", {
            message: error.message,
            code: error.code,
            command: error.command,
            response: error.response,
            responseCode: error.responseCode,
        });

        return Response.json({
            error: "Your message could not be sent. Please try again or email us directly."
        }, { status: 502 });
        /* console.error("Contact notification email failed:", error);
        return Response.json({ error: "Your message could not be sent. Please try again or email us directly." }, { status: 502 }); */
    }

    try {
        await transporter.sendMail({
            from,
            to: email,
            replyTo: CONTACT_TO_EMAIL,
            subject: "We have received your enquiry | GMTDevs Academy Partnership",
            text: `Hello ${name},\n\nThank you for contacting GMTDevs Academy. We have received your message and will respond within 24 hours.\n\nWe appreciate your interest in our services.\n\nKind regards,\nGMTDevs Academy`,
            html: `<div style="font-family:inter,sans-serif;line-height:1.6;color:#1b1b1b;max-width:600px">
                        <h2 style="color:#D4953D">Thank you for contacting GMTDevs Academy</h2>
                        <p>Hello ${htmlEscape(name)},</p>
                        <p>We have received your message and will respond within <strong>24 hours</strong>.</p>
                        <p>We appreciate your interest in our services.</p>
                        <p>
                            Kind regards,<br>
                            <strong>GMTDevs Academy</strong>
                        </p>
                        <img
                            src="cid:gmtdevs-logo"
                            alt="GMTDevs Academy Logo"
                            width="120"
                            style="display:block; margin-top:12px; height:auto;"
                        />
                    </div>`,
                attachments: [
                    {
                        filename: "logo.png",
                        path: path.join(process.cwd(), "public/images/logo.png"),
                        cid: "gmtdevs-logo",
                    },
                ],
        });
        return Response.json({ acknowledged: true, message: "Your message has been sent successfully. A confirmation email is on its way." });
    } catch (error) {
        console.error("Contact acknowledgement email failed:", error);
        return Response.json({ acknowledged: false, message: "Your message has been received, but we could not send the confirmation email. We will still respond within 24 hours." });
    }
}
