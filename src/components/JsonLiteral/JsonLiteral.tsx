import { useContext, useMemo } from 'react';
import { Flex, Text } from '@mantine/core';
import { JsonViewContext } from 'context';

import type { JsonLiteralValue } from 'types/json';
import type { Props } from './JsonLiteral.types';

const styles = {
  root: {
    alignItems: 'center',
    gap: 8,
    width: '100%',
  },
};

function getTextValue(literal: JsonLiteralValue) {
  switch (literal.type) {
    case 'null':
      return 'null';
    case 'undefined':
      return 'undefined';
    case 'string':
      return `"${literal.value}"`;
    default:
      return literal.value.toString();
  }
}

function JsonLiteral({ literal }: Props) {
  const { clipboardComponent: ClipboardComponent } =
    useContext(JsonViewContext);

  const textValue = useMemo(() => getTextValue(literal), [literal]);

  return (
    <Flex sx={styles.root} px="xs">
      <Text fz="md">
        "{literal.key}": {textValue}
      </Text>

      {ClipboardComponent !== undefined && (
        <ClipboardComponent value={textValue} />
      )}
    </Flex>
  );
}

export { JsonLiteral };
