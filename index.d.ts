export interface Options {
  contraction?: boolean;
  duplicate?: boolean;
  list?: string[];
  exclude?: string[];
}

export function findUpperCase(str: string, options?: Options): string[];
export function upperCaseExists(str: string, options?: Options): boolean;
export function countUpperCase(str: string, options?: Options): number;

export function findLowerCase(str: string, options?: Options): string[];
export function lowerCaseExists(str: string, options?: Options): boolean;
export function countLowerCase(str: string, options?: Options): number;