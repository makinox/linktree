import { defineConfig, envField } from "astro/config";

import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://links.jesusbossa.dev",
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwind()]
  },
  schema: {
    PUBLIC_API_ORIGIN: envField.string({ context: "client", access: "public", optional: true })
  }
});