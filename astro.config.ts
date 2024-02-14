import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import remarkFlexibleCodeTitles from "remark-flexible-code-titles";
import rehypeRelativeDepthGauge from "./src/scripts/rehype-relative-depth-gauge";

// https://astro.build/config
export default defineConfig({
  site: "https://xeramiya.net",
  integrations: [sitemap()],
  markdown: {
    remarkRehype: {
      footnoteLabel: "脚注",
    },
    remarkPlugins: [remarkFlexibleCodeTitles],
    rehypePlugins: [rehypeRelativeDepthGauge],
  },
});
