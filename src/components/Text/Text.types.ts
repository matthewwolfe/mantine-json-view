import type { TextProps } from '@mantine/core';
import type { ReactNode } from 'react';

export interface Props extends TextProps {
  children: ReactNode;
}
