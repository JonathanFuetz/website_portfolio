import site from "../content/de/site.json";

const basePath = import.meta.env.BASE_URL || "/";
const normalizedBase = basePath === "/" ? "" : basePath.replace(/\/$/, "");
const siteUrl = import.meta.env.SITE || site.seo.baseUrl;

const routes = ["/", "/impressum/", "/datenschutz/"];

const toAbsoluteUrl = (route: string) => new URL(`${normalizedBase}${route}`, siteUrl).toString();

export function GET() {
  const urls = routes
    .map((route) => `  <url>\n    <loc>${toAbsoluteUrl(route)}</loc>\n  </url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8"
      }
    }
  );
}
