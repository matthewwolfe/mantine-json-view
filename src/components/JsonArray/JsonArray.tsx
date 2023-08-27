import { useContext, useState } from 'react';
import { Flex } from '@mantine/core';
import { JsonLiteral } from 'components/JsonLiteral';
import { JsonObject } from 'components/JsonObject';
import { Text } from 'components/Text';
import { JsonViewContext } from 'context';

import type { Props } from './JsonArray.types';

function JsonArray({ array }: Props) {
  const { collapseComponent: CollapseComponent, theme } =
    useContext(JsonViewContext);

  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Flex
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 2,
      }}
    >
      <Flex align="center" direction="column" gap={4}>
        {CollapseComponent !== undefined && (
          <CollapseComponent
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
        )}

        {!collapsed && (
          <Flex
            sx={{
              backgroundColor: theme?.colors.collapse,
              flexGrow: 1,
              width: 1,
            }}
          />
        )}
      </Flex>

      {!collapsed && (
        <Flex direction="column">
          <Text fz="md">{'"array": ['}</Text>

          {array.children.map((child, index) => {
            switch (child.type) {
              case 'array':
                return <JsonArray array={child} key={index} />;
              case 'object':
                return <JsonObject key={index} object={child} />;
              default:
                return <JsonLiteral key={index} literal={child} />;
            }
          })}
        </Flex>
      )}

      {!collapsed && (
        <Text
          fz="md"
          sx={{
            textAlign: 'center',
            width: '100%',
          }}
        >
          {']'}
        </Text>
      )}
    </Flex>
  );
}

export { JsonArray };
