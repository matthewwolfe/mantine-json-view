import { Code, Flex, useMantineTheme } from '@mantine/core';
import {
  IconClipboardCopy,
  IconSquareChevronDownFilled,
  IconSquareChevronRightFilled,
} from '@tabler/icons-react';
import { JsonView } from './JsonView';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof JsonView> = {
  component: JsonView,
};

type Story = StoryObj<typeof JsonView>;

const json = {
  firstName: 'test first name',
  lastName: 'test last name',
  items: [
    { id: 1, name: 'item 1', active: true },
    { id: 2, name: 'item 2', active: false },
    { id: 3, name: 'item 3', active: null },
  ],
};

function JsonViewStory() {
  const theme = useMantineTheme();

  return (
    <Code block>
      <JsonView
        collapseComponent={({ collapsed, setCollapsed }) => {
          return (
            <Flex
              sx={{
                alignItems: 'center',
                height: 24,
                justifyContent: 'center',
                width: 24,
              }}
            >
              {collapsed ? (
                <IconSquareChevronRightFilled
                  onClick={() => setCollapsed(!collapsed)}
                  size={16}
                />
              ) : (
                <IconSquareChevronDownFilled
                  onClick={() => setCollapsed(!collapsed)}
                  size={16}
                />
              )}
            </Flex>
          );
        }}
        clipboardComponent={({ value }) => (
          <IconClipboardCopy
            onClick={() => navigator.clipboard.writeText(value)}
            size={16}
            style={{ cursor: 'pointer' }}
          />
        )}
        json={JSON.stringify(json)}
        theme={{
          colors: {
            collapse: theme.colors.gray[4],
            key: theme.colors.gray[8],
            literals: {
              boolean: theme.colors.teal[6],
              number: theme.colors.blue[6],
              string: theme.colors.red[6],
              null: theme.colors.orange[9],
            },
          },
          fontFamily: 'monospace',
        }}
      />
    </Code>
  );
}

export const Default: Story = {
  render: () => <JsonViewStory />,
};

export default meta;
