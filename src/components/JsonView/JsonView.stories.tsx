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

export const Default: Story = {
  render: () => (
    <JsonView
      collapseComponent={({ collapsed, setCollapsed }) => {
        if (collapsed) {
          return (
            <IconSquareChevronRightFilled
              onClick={() => setCollapsed(!collapsed)}
              size={16}
            />
          );
        }

        return (
          <IconSquareChevronDownFilled
            onClick={() => setCollapsed(!collapsed)}
            size={16}
          />
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
    />
  ),
};

export default meta;
