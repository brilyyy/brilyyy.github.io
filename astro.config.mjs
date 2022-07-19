import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  site: "https://brilyyy.github.io",
  experimental: {
    integrations: true,
  },
  markdown: {
    drafts: true,
  },
});
