import { expect, test } from 'vitest';
import { parser } from './parser';

test('parser output', () => {
  const result = parser.parse(
    JSON.stringify({ firstName: 'Test', lastName: 'User' })
  );

  expect(result).toEqual({
    type: 'object',
    children: [
      { type: 'string', key: 'firstName', value: 'Test' },
      { type: 'string', key: 'lastName', value: 'User' },
    ],
  });
});
