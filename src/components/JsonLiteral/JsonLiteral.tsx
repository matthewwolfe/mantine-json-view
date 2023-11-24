import { useContext, useMemo } from 'react';
import { Flex } from '@mantine/core';
import { Text } from 'components/Text';
import { JsonViewContext } from 'context';

import type { JsonLiteralValue } from 'types/json';
import type { Props, StyleProps } from './JsonLiteral.types';

function createStyles({ literal, theme }: StyleProps) {
  const { key, literals = {} } = theme?.colors || {};

  return {
    key: {
      color: key,
    },
    root: {
      alignItems: 'center',
      gap: 8,
      width: '100%',
    },
    value: {
      color: literals[literal.type],
    },
  };
}

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
  const { clipboardComponent: ClipboardComponent, theme } =
    useContext(JsonViewContext);

  const styles = useMemo(() => createStyles({ literal, theme }), []);

  const textValue = useMemo(() => getTextValue(literal), [literal]);

  return (
    <Flex styles={{ root: styles.root }}>
      <Text fz="md">
        <span style={styles.key}>"{literal.key}":</span>{' '}
        <span style={styles.value}>{textValue}</span>
      </Text>

      {ClipboardComponent !== undefined && (
        <ClipboardComponent value={textValue} />
      )}
    </Flex>
  );
}

export { JsonLiteral };
