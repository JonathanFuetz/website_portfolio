import site from "../content/de/site.json";

const basePath = import.meta.env.BASE_URL || "/";
const normalizedBase = basePath === "/" ? "" : basePath.replace(/\/$/, "");
const siteUrl = import.meta.env.SITE || site.seo.baseUrl;
const rootUrl = new URL(`${normalizedBase}/`, siteUrl).toString();
const sitemapUrl = new URL(`${normalizedBase}/sitemap.xml`, siteUrl).toString();
const noindex = import.meta.env.PUBLIC_SITE_NOINDEX === "true";

export function GET() {
  return new Response(
    [
      "User-agent: *",
      noindex ? "Disallow: /" : "Allow: /",
      "",
      `Sitemap: ${sitemapUrl}`,
      "",
      `# Site: ${rootUrl}`
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    }
  );
}
