import type { Context } from 'context';
import type { Theme } from 'types/theme';

export interface Props {
  clipboardComponent?: Context['clipboardComponent'];
  collapseComponent?: Context['collapseComponent'];
  json: string;
  theme?: Theme;
}
