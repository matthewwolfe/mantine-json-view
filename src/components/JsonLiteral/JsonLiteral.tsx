import { useContext, useMemo } from 'react';
import { Flex, Text, createStyles } from '@mantine/core';
import { JsonViewContext } from 'context';

import type { JsonLiteralValue } from 'types/json';
import type { Props, StyleProps } from './JsonLiteral.types';

const useStyles = createStyles((_, { literal, theme }: StyleProps) => {
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
});

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

  const { classes } = useStyles({ literal, theme });

  const textValue = useMemo(() => getTextValue(literal), [literal]);

  return (
    <Flex className={classes.root} px="xs">
      <Text fz="md">
        <span className={classes.key}>"{literal.key}":</span>{' '}
        <span className={classes.value}>{textValue}</span>
      </Text>

      {ClipboardComponent !== undefined && (
        <ClipboardComponent value={textValue} />
      )}
    </Flex>
  );
}

export { JsonLiteral };
