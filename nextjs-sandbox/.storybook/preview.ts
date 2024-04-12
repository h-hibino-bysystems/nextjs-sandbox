import type { Preview } from "@storybook/react";
import { withScreenshot } from "storycap";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        pc1: {
          name: "On a 24-inch monitor browser",
          styles: {
            width: "1920px",
            height: "900px",
          },
        },
        pc2: {
          name: "FWXGA",
          styles: {
            width: "1366px",
            height: "768px",
          },
        },
      },
      defaultViewport: "pc1",
    },
    showPanel: false,
    layout: "fullscreen",
    screenshot: {
      delay: 1000,
      viewport: {
        width: 1920,
        height: 900,
        deviceScaleFactor: 1,
        isMobile: false,
      },
    },
  },
};

export const decorators = [withScreenshot];

export default preview;
