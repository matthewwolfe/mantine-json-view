import { useContext, useMemo } from 'react';
import { Flex, Text } from '@mantine/core';
import { JsonViewContext } from 'context';

import type { Props } from './JsonLiteral.types';

function JsonLiteral({ literal }: Props) {
  const { copyToClipboard } = useContext(JsonViewContext);

  const value = useMemo(() => {
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
  }, [literal.type, literal.value]);

  return (
    <Flex
      sx={{
        alignItems: 'center',
        gap: 8,
      }}
      px="xs"
    >
      <Text fz="md">
        "{literal.key}": {value}
      </Text>

      {copyToClipboard({ value })}
    </Flex>
  );
}

export { JsonLiteral };
