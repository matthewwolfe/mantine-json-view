import type { Context } from 'context';

export interface Props {
  clipboardComponent?: Context['clipboardComponent'];
  collapseComponent?: Context['collapseComponent'];
  json: string;
}
