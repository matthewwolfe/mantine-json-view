# Mantine JSON View

## Install

Mantine JSON View depends on `@mantine/core`, so make sure to install
that dependency as well.

#### npm

```
npm install --save @mantine/core mantine-json-view
```

#### pnpm

```
pnpm install --save @mantine/core mantine-json-view
```

## Usage

```tsx
import { JsonView } from 'mantine-json-view';

function GettingStarted() {
  return (
    <JsonView
      // optional component for collapse icon(s)
      collapseComponent={({ collapsed, setCollapsed }) => (
        <YourCollapseComponents />
      )}
      // optional component for rendering a clipboard icon for copy/paste
      clipboardComponent={({ value }) => <YourClipboardComponent />}
      json="JSON_STRING"
      // syntax highlighting/theming
      theme={{
        colors: {
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
  );
}
```

<img src="https://raw.githubusercontent.com/matthewwolfe/mantine-json-view/main/static/images/readme-example.png" width="360px" />
