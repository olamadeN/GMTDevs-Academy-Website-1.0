import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./component/footer/footer";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});



export const metadata = {
  title: "GMTDevs Academy - Live Technology Training",
  description:
    "Build practical technology skills with GMTDevs Academy. Learn frontend development, backend development, and UI/UX design through live, instructor-led online classes, small cohorts, and practical projects.",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GMTDevs Academy",
    title: "GMTDevs Academy - Learn. Build. Grow.",
    description:
      "Learn technology through live, interactive online classes led by experienced developers. Explore frontend development, backend development, and UI/UX design at GMTDevs Academy.",
    url: "/",
    images: [
      {
        url: "/academy-og.png",
        width: 1200,
        height: 630,
        alt: "GMTDevs Academy - Live Technology Training",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  }

};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
