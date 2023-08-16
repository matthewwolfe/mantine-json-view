import { createContext } from 'react';

import type { FC } from 'react';

interface CollapseProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

interface ClipboardProps {
  value: string;
}

export interface Context {
  collapseComponent: FC<CollapseProps> | undefined;
  clipboardComponent: FC<ClipboardProps> | undefined;
}

const JsonViewContext = createContext<Context>({
  collapseComponent: undefined,
  clipboardComponent: undefined,
});

export { JsonViewContext };
