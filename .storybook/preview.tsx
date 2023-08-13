import React from 'react';
import { MantineProvider } from '@mantine/core';

import type { Decorator, Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators: Decorator[] = [
  (Story) => (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Story />
    </MantineProvider>
  ),
];

export default preview;
