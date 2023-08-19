import { createContext } from 'react';

import type { FC } from 'react';
import type { Theme } from 'types/theme';

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
  theme: Theme | undefined;
}

const JsonViewContext = createContext<Context>({
  collapseComponent: undefined,
  clipboardComponent: undefined,
  theme: undefined,
});

export { JsonViewContext };
