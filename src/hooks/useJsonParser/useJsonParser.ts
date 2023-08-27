import { useMemo } from 'react';
import { parser } from 'parser';

function useJsonParser(json: string) {
  const ast = useMemo(() => parser.parse(json), [json]);

  console.log(ast);

  return {
    ast,
    json,
  };
}

export { useJsonParser };
