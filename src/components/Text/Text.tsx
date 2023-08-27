import { useContext } from 'react';
import { Text as MantineText } from '@mantine/core';
import { JsonViewContext } from 'context';

import type { Props } from './Text.types';

function Text({ sx, ...props }: Props) {
  const { theme } = useContext(JsonViewContext);

  return (
    <MantineText
      {...props}
      sx={{
        ...sx,
        fontFamily: theme?.fontFamily,
      }}
    />
  );
}

export { Text };
