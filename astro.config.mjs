import { defineConfig } from "astro/config";

const site = process.env.ASTRO_SITE ?? "https://jonathan-fuetz.example";
const base = process.env.ASTRO_BASE;

export default defineConfig({
  site,
  ...(base ? { base } : {}),
  output: "static"
});
