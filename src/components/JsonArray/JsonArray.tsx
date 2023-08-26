import { useContext, useState } from 'react';
import { Flex } from '@mantine/core';
import { JsonLiteral } from 'components/JsonLiteral';
import { JsonObject } from 'components/JsonObject';
import { Text } from 'components/Text';
import { JsonViewContext } from 'context';

import type { Props } from './JsonArray.types';

function JsonArray({ array }: Props) {
  const { collapseComponent: CollapseComponent } = useContext(JsonViewContext);

  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Flex direction={collapsed ? 'row' : 'column'} px="xs">
      <Flex sx={{ gap: 4, alignItems: 'center' }}>
        {CollapseComponent !== undefined && (
          <CollapseComponent
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
        )}

        <Flex sx={{ alignItems: 'center' }} gap="xs">
          <Text fz="md">{'"array": ['}</Text>

          <Text c="dimmed">
            {array.children.length}{' '}
            {array.children.length !== 1 ? 'items' : 'item'}
          </Text>

          {collapsed && <Text fz="md">{']'}</Text>}
        </Flex>
      </Flex>

      {!collapsed && (
        <Flex direction="column" px="xs">
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

      {!collapsed && <Text fz="md">{']'}</Text>}
    </Flex>
  );
}

export { JsonArray };
