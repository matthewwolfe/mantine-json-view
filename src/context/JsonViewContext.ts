import { createContext } from 'react';

interface CollapseIcons {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

interface CopyToClipboard {
  value: string;
}

export interface Context {
  collapseIcons: (options: CollapseIcons) => JSX.Element | null;
  copyToClipboard: (options: CopyToClipboard) => JSX.Element | null;
}

const JsonViewContext = createContext<Context>({
  collapseIcons: () => null,
  copyToClipboard: () => null,
});

export { JsonViewContext };
