import type { JsonLiteralValue } from 'types/json';
import type { Theme } from 'types/theme';

export interface Props {
  literal: JsonLiteralValue;
}

export interface StyleProps {
  literal: JsonLiteralValue;
  theme: Theme | undefined;
}
