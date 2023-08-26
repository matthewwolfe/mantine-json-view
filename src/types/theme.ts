import type { CSSProperties } from 'react';
import type { CSSObject } from '@mantine/core';
import type { JsonLiteralValue } from './json';

export interface Theme {
  colors: {
    collapse?: CSSProperties['color'];
    key?: CSSProperties['color'];
    literals?: Partial<
      Record<JsonLiteralValue['type'], CSSProperties['color']>
    >;
  };
  fontFamily?: CSSObject['fontFamily'];
}
