export type JsonAST = JsonArray | JsonObject;

export interface JsonArray {
  children: Array<JsonArray | JsonObject | JsonLiteralValue>;
  key: string;
  type: 'array';
}

export interface JsonObject {
  children: Array<JsonArray | JsonObject | JsonLiteralValue>;
  key: string;
  type: 'object';
}

export type JsonLiteralValue =
  | JsonLiteralBoolean
  | JsonLiteralNull
  | JsonLiteralNumber
  | JsonLiteralString
  | JsonLiteralUndefined;

export interface JsonLiteralBoolean {
  type: 'boolean';
  key: string;
  value: boolean;
}

export interface JsonLiteralNull {
  type: 'null';
  key: string;
  value: null;
}

export interface JsonLiteralNumber {
  type: 'number';
  key: string;
  value: number;
}

export interface JsonLiteralString {
  type: 'string';
  key: string;
  value: string;
}

export interface JsonLiteralUndefined {
  type: 'undefined';
  key: string;
  value: undefined;
}
