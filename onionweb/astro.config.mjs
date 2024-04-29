import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), metaTags(), mdx()]
});