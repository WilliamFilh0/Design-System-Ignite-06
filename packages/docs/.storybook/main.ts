import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";
import remarkGfm from "remark-gfm";

/**
 * Esta função é usada para resolver o caminho absoluto de um pacote.
 * É necessária em projetos que utilizam Yarn PnP ou estão configurados dentro de um monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],

  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
