import type { Context } from 'context';

export interface Props {
  copyToClipboard: Context['copyToClipboard'];
  collapseIcons: Context['collapseIcons'];
  json: string;
}
