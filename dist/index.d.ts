export type String = string;
export type Number = number;
export type Boolean = boolean;
export type Undefined = undefined;
export type Null = null;
export type Symbol = symbol;
export type BigInt = bigint;
export type Primitive = String | Number | Boolean | Undefined | Null | Symbol | BigInt;
export type Obj<T = any> = {
    [key: string]: T;
};
export type Arr<T = any> = T[];
export type Func<T = any> = (...args: any[]) => T;
export type Any = any;
export type Unknown = unknown;
export type Never = never;
export type Void = void;
export type PromiseType<T = any> = Promise<T>;
export type UUIDV4 = `${String}-${String}-4${String}-${"8" | "9" | "A" | "B"}${String}-${String}`;
type TrustedEmailProviders = "gmail.com" | "yahoo.com" | "yahoo.in" | "outlook.com" | "live.com" | "hotmail.com" | "protonmail.com" | "icloud.com" | "aol.com";
export type TrustableEmail = `${String}@${TrustedEmailProviders}`;
export type Exact<T, U extends T = T> = T & {
    [K in Exclude<keyof U, keyof T>]: never;
};
declare const brand: unique symbol;
export type Brand<T, Name> = T & {
    [brand]: Name;
};
type ConvertableTypes = Primitive | Obj | Arr | Func | TrustableEmail | UUIDV4;
export type Merge<A, B> = {
    [K in keyof A | keyof B]: K extends keyof B ? B[K] : K extends keyof A ? A[K] : never;
};
export type CamelCase<S extends string> = S extends `${infer Head}_${infer Tail}` ? `${Head}${CamelCase<Capitalize<Tail>>}` : S extends `${infer Head}-${infer Tail}` ? `${Head}${CamelCase<Capitalize<Tail>>}` : S extends `${infer Head} ${infer Tail}` ? `${Head}${CamelCase<Capitalize<Tail>>}` : S;
export declare function convert<T extends ConvertableTypes>(x: unknown): T;
export declare function convertToCamelCase<S extends string>(str: S): CamelCase<S>;
export {};
