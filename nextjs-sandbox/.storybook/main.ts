import type { StorybookConfig } from "@storybook/nextjs";
import { fileURLToPath } from "url";

const config: StorybookConfig = {
  staticDirs: ["../public"],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storycap",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // https://github.com/storybookjs/storybook/issues/3916#issuecomment-871283551
  webpackFinal(config) {
    if (typeof config.resolve === "undefined") {
      config.resolve = {};
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": fileURLToPath(new URL("../src", import.meta.url)),
    };
    return config;
  },
};
export default config;
