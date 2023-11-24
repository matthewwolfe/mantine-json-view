import { useContext, useState } from 'react';
import { Flex } from '@mantine/core';
import { JsonArray } from 'components/JsonArray';
import { JsonLiteral } from 'components/JsonLiteral';
import { Text } from 'components/Text';
import { JsonViewContext } from 'context';

import type { Props } from './JsonObject.types';

const styles = {
  closeBracket: {
    textAlign: 'center',
    width: '100%',
  },
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: 2,
  },
} as const;

function JsonObject({ object }: Props) {
  const { collapseComponent: CollapseComponent, theme } =
    useContext(JsonViewContext);

  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Flex
      styles={{
        root: styles.root,
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
          <Text fz="md">{`"${object.key || 'object'}": {`}</Text>

          <Text c="dimmed" fz="xs">
            {object.children.length === 1
              ? '1 item'
              : `${object.children.length} items`}
          </Text>

          {collapsed && <Text fz="md">{'}'}</Text>}
        </Flex>

        {!collapsed &&
          object.children.map((child, index) => {
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
            root: styles.closeBracket,
          }}
        >
          {'}'}
        </Text>
      )}
    </Flex>
  );
}

export { JsonObject };
