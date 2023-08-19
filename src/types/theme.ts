import type { CSSProperties } from 'react';
import type { JsonLiteralValue } from './json';

export interface Theme {
  colors: {
    key?: CSSProperties['color'];
    literals?: Partial<
      Record<JsonLiteralValue['type'], CSSProperties['color']>
    >;
  };
}
