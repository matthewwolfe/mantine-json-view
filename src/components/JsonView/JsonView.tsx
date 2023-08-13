import { Code } from '@mantine/core';
import { JsonArray } from 'components/JsonArray';
import { JsonObject } from 'components/JsonObject';
import { JsonViewContext } from 'context';
import { useJsonParser } from 'hooks/useJsonParser';

import type { Props } from './JsonView.types';

function JsonView({ collapseIcons, copyToClipboard, json }: Props) {
  const { ast } = useJsonParser(json);

  return (
    <JsonViewContext.Provider value={{ collapseIcons, copyToClipboard }}>
      <Code block>
        {ast.type === 'object' ? (
          <JsonObject object={ast} />
        ) : (
          <JsonArray array={ast} />
        )}
      </Code>
    </JsonViewContext.Provider>
  );
}

export { JsonView };
