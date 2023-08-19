import { JsonArray } from 'components/JsonArray';
import { JsonObject } from 'components/JsonObject';
import { JsonViewContext } from 'context';
import { useJsonParser } from 'hooks/useJsonParser';

import type { Props } from './JsonView.types';

function JsonView({
  collapseComponent,
  clipboardComponent,
  json,
  theme,
}: Props) {
  const { ast } = useJsonParser(json);

  return (
    <JsonViewContext.Provider
      value={{ collapseComponent, clipboardComponent, theme }}
    >
      {ast.type === 'object' ? (
        <JsonObject object={ast} />
      ) : (
        <JsonArray array={ast} />
      )}
    </JsonViewContext.Provider>
  );
}

export { JsonView };
