const siteUrl = "https://academy.gmtdevs.com";

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
  { path: "/partnership", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap() {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: new Date("2026-11-11"),
    changeFrequency,
    priority,
  }));
}
