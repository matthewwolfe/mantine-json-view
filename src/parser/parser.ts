import type {
  JsonAST,
  JsonArray,
  JsonLiteralValue,
  JsonObject,
} from 'types/json';

function isObject(maybeObject: unknown) {
  return (
    typeof maybeObject === 'object' &&
    !Array.isArray(maybeObject) &&
    maybeObject !== null
  );
}

function parse(json: string): JsonAST {
  try {
    const parsedJson = JSON.parse(json) as unknown;

    if (Array.isArray(parsedJson)) {
      return arrayToAST('', parsedJson);
    }

    if (isObject(parsedJson)) {
      return objectToAST('', parsedJson as object);
    }

    throw new Error('Invalid json');
  } catch (e) {
    throw new Error('Error parsing json');
  }
}

function objectToAST(key: string, value: object): JsonObject {
  return {
    children: Object.entries(value).map(([key, value]) =>
      unknownToAST(key, value)
    ),
    key,
    type: 'object',
  };
}

function arrayToAST(key: string, value: unknown[]): JsonArray {
  return {
    children: Object.entries(value).map(([key, value]) =>
      unknownToAST(key, value)
    ),
    key,
    type: 'array',
  };
}

function unknownToAST(
  key: string,
  value: unknown
): JsonArray | JsonObject | JsonLiteralValue {
  if (isObject(value)) {
    return objectToAST(key, value as object);
  }

  if (Array.isArray(value)) {
    return arrayToAST(key, value);
  }

  if (typeof value === 'boolean') {
    return {
      type: 'boolean',
      key,
      value,
    };
  }

  if (typeof value === 'number') {
    return {
      type: 'number',
      key,
      value,
    };
  }

  if (typeof value === 'string') {
    return {
      type: 'string',
      key,
      value,
    };
  }

  if (value === undefined) {
    return {
      type: 'undefined',
      key,
      value,
    };
  }

  if (value === null) {
    return {
      type: 'null',
      key,
      value,
    };
  }

  throw new Error(`Unable to parse value: ${value}`);
}

const parser = {
  parse,
};

export { parser };
