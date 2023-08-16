import { useContext, useState } from 'react';
import { Flex, Text } from '@mantine/core';
import { JsonArray } from 'components/JsonArray';
import { JsonLiteral } from 'components/JsonLiteral';
import { JsonViewContext } from 'context';

import type { Props } from './JsonObject.types';

function JsonObject({ object }: Props) {
  const { collapseComponent: CollapseComponent } = useContext(JsonViewContext);

  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Flex direction={collapsed ? 'row' : 'column'}>
      <Flex sx={{ gap: 4, alignItems: 'center' }}>
        {CollapseComponent !== undefined && (
          <CollapseComponent
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
        )}

        <Flex sx={{ alignItems: 'center' }} gap="xs">
          <Text fz="md">{'"object": {'}</Text>

          <Text c="dimmed">
            {object.children.length}{' '}
            {object.children.length !== 1 ? 'items' : 'item'}
          </Text>
        </Flex>
      </Flex>

      {!collapsed && (
        <Flex direction="column" px="xs">
          {object.children.map((child, index) => {
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

      <Text fz="md">{'}'}</Text>
    </Flex>
  );
}

export { JsonObject };
