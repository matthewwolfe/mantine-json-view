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
      styles={{
        root: {
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 2,
        },
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
            styles={{
              root: {
                backgroundColor: theme?.colors.collapse,
                flexGrow: 1,
                width: 1,
              },
            }}
          />
        )}
      </Flex>

      <Flex direction="column">
        <Flex align="center" gap="xs">
          <Text fz="md">{`"${array.key || 'array'}": [`}</Text>

          <Text c="dimmed" fz="xs">
            {array.children.length === 1
              ? '1 item'
              : `${array.children.length} items`}
          </Text>

          {collapsed && <Text fz="md">{']'}</Text>}
        </Flex>

        {!collapsed &&
          array.children.map((child, index) => {
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

      {!collapsed && (
        <Text
          fz="md"
          styles={{
            root: {
              textAlign: 'center',
              width: '100%',
            },
          }}
        >
          {']'}
        </Text>
      )}
    </Flex>
  );
}

export { JsonArray };
