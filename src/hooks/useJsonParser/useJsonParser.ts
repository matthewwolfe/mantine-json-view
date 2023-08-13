import { useMemo } from 'react';
import { parser } from 'parser';

function useJsonParser(json: string) {
  const ast = useMemo(() => parser.parse(json), [json]);

  return {
    ast,
    json,
  };
}

export { useJsonParser };
