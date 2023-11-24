import { useContext } from 'react';
import { Text as MantineText } from '@mantine/core';
import { JsonViewContext } from 'context';

import type { Props } from './Text.types';

function Text({ styles, ...props }: Props) {
  const { theme } = useContext(JsonViewContext);

  return (
    <MantineText
      {...props}
      styles={{
        root: {
          ...styles,
          fontFamily: theme?.fontFamily,
        },
      }}
    />
  );
}

export { Text };
