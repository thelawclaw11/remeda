export class TestClass {
  get foo() {
    return 'a';
  }
}

type TestObj =
  | (() => void)
  | [number, number, number]
  | { a: string }
  | Array<number>
  | boolean
  | Date
  | Error
  | Map<string, string>
  | null
  | number
  | Promise<number>
  | RegExp
  | Set<string>
  | string
  | symbol
  | TestClass
  | Uint8Array
  | undefined;

const ALL_TYPES = [
  'array',
  'boolean',
  'date',
  'error',
  'function',
  'instance',
  'map',
  'null',
  'number',
  'object',
  'promise',
  'regex',
  'set',
  'string',
  'symbol',
  'tuple',
  'typedArray',
  'undefined',
] as const;
type Type = (typeof ALL_TYPES)[number];

export const typesDataProvider = (t: Type): TestObj => {
  switch (t) {
    case 'number':
      return 5;
    case 'array':
    case 'tuple':
      return [1, 2, 3];
    case 'boolean':
      return false;
    case 'date':
      return new Date('1985-07-24T07:40:00.000Z');
    case 'function':
      return () => {
        /* (intentionally empty) */
      };
    case 'null':
      return null;
    case 'promise':
      return Promise.resolve(5);
    case 'string':
      return 'text';
    case 'object':
      return { a: 'asd' };
    case 'error':
      return new Error('asd');
    case 'symbol':
      return Symbol('symbol');
    case 'undefined':
      return undefined;
    case 'instance':
      return new TestClass();
    case 'regex':
      return /test/gu;
    case 'map':
      return new Map();
    case 'set':
      return new Set();
    case 'typedArray':
      return new Uint8Array(1);
  }
};

export const ALL_TYPES_DATA_PROVIDER = ALL_TYPES.map(typesDataProvider);
