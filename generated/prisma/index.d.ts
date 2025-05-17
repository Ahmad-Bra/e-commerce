/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Info
 *
 */
export type Info = $Result.DefaultSelection<Prisma.$InfoPayload>;
/**
 * Model Cpu_Info
 *
 */
export type Cpu_Info = $Result.DefaultSelection<Prisma.$Cpu_InfoPayload>;
/**
 * Model products
 *
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>;
/**
 * Model Category
 *
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>;
/**
 * Model Brands
 *
 */
export type Brands = $Result.DefaultSelection<Prisma.$BrandsPayload>;
/**
 * Model Comments
 *
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.products.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P]
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number }
  ): $Utils.JsPromise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(
    command: Prisma.InputJsonObject
  ): Prisma.PrismaPromise<Prisma.JsonObject>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
   * ```
   */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brands`: Exposes CRUD operations for the **Brands** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Brands
   * const brands = await prisma.brands.findMany()
   * ```
   */
  get brands(): Prisma.BrandsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Comments
   * const comments = await prisma.comments.findMany()
   * ```
   */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
    ? "Please either choose `select` or `omit`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    products: "products";
    Category: "Category";
    Brands: "Brands";
    Comments: "Comments";
    User: "User";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: "products" | "category" | "brands" | "comments" | "user";
      txIsolationLevel: never;
    };
    model: {
      products: {
        payload: Prisma.$productsPayload<ExtArgs>;
        fields: Prisma.productsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>;
          };
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>;
          };
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[];
          };
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>;
          };
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>;
          };
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>;
          };
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>;
          };
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProducts>;
          };
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProductsGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.productsFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.productsAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.productsCountArgs<ExtArgs>;
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number;
          };
        };
      };
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>;
        fields: Prisma.CategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategory>;
          };
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.CategoryFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.CategoryAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number;
          };
        };
      };
      Brands: {
        payload: Prisma.$BrandsPayload<ExtArgs>;
        fields: Prisma.BrandsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BrandsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BrandsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>;
          };
          findFirst: {
            args: Prisma.BrandsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BrandsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>;
          };
          findMany: {
            args: Prisma.BrandsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[];
          };
          create: {
            args: Prisma.BrandsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>;
          };
          createMany: {
            args: Prisma.BrandsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.BrandsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>;
          };
          update: {
            args: Prisma.BrandsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>;
          };
          deleteMany: {
            args: Prisma.BrandsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BrandsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.BrandsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>;
          };
          aggregate: {
            args: Prisma.BrandsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBrands>;
          };
          groupBy: {
            args: Prisma.BrandsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BrandsGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.BrandsFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.BrandsAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.BrandsCountArgs<ExtArgs>;
            result: $Utils.Optional<BrandsCountAggregateOutputType> | number;
          };
        };
      };
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>;
        fields: Prisma.CommentsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>;
          };
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>;
          };
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[];
          };
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>;
          };
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>;
          };
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>;
          };
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>;
          };
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateComments>;
          };
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CommentsGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.CommentsFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.CommentsAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>;
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number;
          };
        };
      };
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject;
          result: Prisma.JsonObject;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    products?: productsOmit;
    category?: CategoryOmit;
    brands?: BrandsOmit;
    comments?: CommentsOmit;
    user?: UserOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    comments: number;
  };

  export type ProductsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    comments?: boolean | ProductsCountOutputTypeCountCommentsArgs;
  };

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CommentsWhereInput;
  };

  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number;
  };

  export type CategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs;
  };

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: productsWhereInput;
  };

  /**
   * Count Type BrandsCountOutputType
   */

  export type BrandsCountOutputType = {
    products: number;
  };

  export type BrandsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    products?: boolean | BrandsCountOutputTypeCountProductsArgs;
  };

  // Custom InputTypes
  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BrandsCountOutputType
     */
    select?: BrandsCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeCountProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: productsWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    comments: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    comments?: boolean | UserCountOutputTypeCountCommentsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CommentsWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Info
   */

  export type InfoSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      weight?: boolean;
      color?: boolean;
    },
    ExtArgs["result"]["info"]
  >;

  export type InfoSelectScalar = {
    weight?: boolean;
    color?: boolean;
  };

  export type InfoOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<"weight" | "color", ExtArgs["result"]["info"]>;

  export type $InfoPayload = {
    name: "Info";
    objects: {};
    scalars: {
      weight: string;
      color: string;
    };
    composites: {};
  };

  type InfoGetPayload<S extends boolean | null | undefined | InfoDefaultArgs> =
    $Result.GetResult<Prisma.$InfoPayload, S>;

  /**
   * Fields of the Info model
   */
  interface InfoFieldRefs {
    readonly weight: FieldRef<"Info", "String">;
    readonly color: FieldRef<"Info", "String">;
  }

  // Custom InputTypes
  /**
   * Info without action
   */
  export type InfoDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Info
     */
    select?: InfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Info
     */
    omit?: InfoOmit<ExtArgs> | null;
  };

  /**
   * Model Cpu_Info
   */

  export type Cpu_InfoSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      model?: boolean;
      cores?: boolean;
      threads?: boolean;
    },
    ExtArgs["result"]["cpu_Info"]
  >;

  export type Cpu_InfoSelectScalar = {
    model?: boolean;
    cores?: boolean;
    threads?: boolean;
  };

  export type Cpu_InfoOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    "model" | "cores" | "threads",
    ExtArgs["result"]["cpu_Info"]
  >;

  export type $Cpu_InfoPayload = {
    name: "Cpu_Info";
    objects: {};
    scalars: {
      model: string;
      cores: number;
      threads: number;
    };
    composites: {};
  };

  type Cpu_InfoGetPayload<
    S extends boolean | null | undefined | Cpu_InfoDefaultArgs
  > = $Result.GetResult<Prisma.$Cpu_InfoPayload, S>;

  /**
   * Fields of the Cpu_Info model
   */
  interface Cpu_InfoFieldRefs {
    readonly model: FieldRef<"Cpu_Info", "String">;
    readonly cores: FieldRef<"Cpu_Info", "Int">;
    readonly threads: FieldRef<"Cpu_Info", "Int">;
  }

  // Custom InputTypes
  /**
   * Cpu_Info without action
   */
  export type Cpu_InfoDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Cpu_Info
     */
    select?: Cpu_InfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cpu_Info
     */
    omit?: Cpu_InfoOmit<ExtArgs> | null;
  };

  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
  };

  export type ProductsAvgAggregateOutputType = {
    price: number | null;
    discount: number | null;
    in_stock: number | null;
    quantity: number | null;
    rating: number | null;
  };

  export type ProductsSumAggregateOutputType = {
    price: number | null;
    discount: number | null;
    in_stock: number | null;
    quantity: number | null;
    rating: number | null;
  };

  export type ProductsMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    slug: string | null;
    price: number | null;
    discount: number | null;
    in_stock: number | null;
    quantity: number | null;
    rating: number | null;
    brandId: string | null;
    categoryId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProductsMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    slug: string | null;
    price: number | null;
    discount: number | null;
    in_stock: number | null;
    quantity: number | null;
    rating: number | null;
    brandId: string | null;
    categoryId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProductsCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    slug: number;
    price: number;
    discount: number;
    in_stock: number;
    quantity: number;
    rating: number;
    brandId: number;
    categoryId: number;
    images: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProductsAvgAggregateInputType = {
    price?: true;
    discount?: true;
    in_stock?: true;
    quantity?: true;
    rating?: true;
  };

  export type ProductsSumAggregateInputType = {
    price?: true;
    discount?: true;
    in_stock?: true;
    quantity?: true;
    rating?: true;
  };

  export type ProductsMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    slug?: true;
    price?: true;
    discount?: true;
    in_stock?: true;
    quantity?: true;
    rating?: true;
    brandId?: true;
    categoryId?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProductsMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    slug?: true;
    price?: true;
    discount?: true;
    in_stock?: true;
    quantity?: true;
    rating?: true;
    brandId?: true;
    categoryId?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProductsCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    slug?: true;
    price?: true;
    discount?: true;
    in_stock?: true;
    quantity?: true;
    rating?: true;
    brandId?: true;
    categoryId?: true;
    images?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProductsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?:
      | productsOrderByWithRelationInput
      | productsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned products
     **/
    _count?: true | ProductsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductsMaxAggregateInputType;
  };

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
    [P in keyof T & keyof AggregateProducts]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>;
  };

  export type productsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: productsWhereInput;
    orderBy?:
      | productsOrderByWithAggregationInput
      | productsOrderByWithAggregationInput[];
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum;
    having?: productsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductsCountAggregateInputType | true;
    _avg?: ProductsAvgAggregateInputType;
    _sum?: ProductsSumAggregateInputType;
    _min?: ProductsMinAggregateInputType;
    _max?: ProductsMaxAggregateInputType;
  };

  export type ProductsGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    slug: string;
    price: number;
    discount: number;
    in_stock: number;
    quantity: number;
    rating: number;
    brandId: string;
    categoryId: string;
    images: string[];
    created_at: Date;
    updated_at: Date;
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
  };

  type GetProductsGroupByPayload<T extends productsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProductsGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ProductsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>;
        }
      >
    >;

  export type productsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      slug?: boolean;
      price?: boolean;
      discount?: boolean;
      info?: boolean | InfoDefaultArgs<ExtArgs>;
      cpu_info?: boolean | Cpu_InfoDefaultArgs<ExtArgs>;
      in_stock?: boolean;
      quantity?: boolean;
      rating?: boolean;
      brandId?: boolean;
      categoryId?: boolean;
      images?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      comments?: boolean | products$commentsArgs<ExtArgs>;
      brands?: boolean | products$brandsArgs<ExtArgs>;
      categories?: boolean | products$categoriesArgs<ExtArgs>;
      _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["products"]
  >;

  export type productsSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    slug?: boolean;
    price?: boolean;
    discount?: boolean;
    in_stock?: boolean;
    quantity?: boolean;
    rating?: boolean;
    brandId?: boolean;
    categoryId?: boolean;
    images?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type productsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "description"
    | "slug"
    | "price"
    | "discount"
    | "info"
    | "cpu_info"
    | "in_stock"
    | "quantity"
    | "rating"
    | "brandId"
    | "categoryId"
    | "images"
    | "created_at"
    | "updated_at",
    ExtArgs["result"]["products"]
  >;
  export type productsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    comments?: boolean | products$commentsArgs<ExtArgs>;
    brands?: boolean | products$brandsArgs<ExtArgs>;
    categories?: boolean | products$categoriesArgs<ExtArgs>;
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $productsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "products";
    objects: {
      comments: Prisma.$CommentsPayload<ExtArgs>[];
      brands: Prisma.$BrandsPayload<ExtArgs> | null;
      categories: Prisma.$CategoryPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string;
        slug: string;
        price: number;
        discount: number;
        in_stock: number;
        quantity: number;
        rating: number;
        brandId: string;
        categoryId: string;
        images: string[];
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs["result"]["products"]
    >;
    composites: {
      info: Prisma.$InfoPayload;
      cpu_info: Prisma.$Cpu_InfoPayload;
    };
  };

  type productsGetPayload<
    S extends boolean | null | undefined | productsDefaultArgs
  > = $Result.GetResult<Prisma.$productsPayload, S>;

  type productsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<productsFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ProductsCountAggregateInputType | true;
  };

  export interface productsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["products"];
      meta: { name: "products" };
    };
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(
      args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(
      args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     *
     */
    findMany<T extends productsFindManyArgs>(
      args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     *
     */
    create<T extends productsCreateArgs>(
      args: SelectSubset<T, productsCreateArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends productsCreateManyArgs>(
      args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     *
     */
    delete<T extends productsDeleteArgs>(
      args: SelectSubset<T, productsDeleteArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends productsUpdateArgs>(
      args: SelectSubset<T, productsUpdateArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends productsDeleteManyArgs>(
      args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends productsUpdateManyArgs>(
      args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(
      args: SelectSubset<T, productsUpsertArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Products that matches the filter.
     * @param {productsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const products = await prisma.products.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: productsFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Products.
     * @param {productsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const products = await prisma.products.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: productsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProductsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProductsAggregateArgs>(
      args: Subset<T, ProductsAggregateArgs>
    ): Prisma.PrismaPromise<GetProductsAggregateType<T>>;

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs["orderBy"] }
        : { orderBy?: productsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetProductsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the products model
     */
    readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    comments<T extends products$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, products$commentsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    brands<T extends products$brandsArgs<ExtArgs> = {}>(
      args?: Subset<T, products$brandsArgs<ExtArgs>>
    ): Prisma__BrandsClient<
      $Result.GetResult<
        Prisma.$BrandsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    categories<T extends products$categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, products$categoriesArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", "String">;
    readonly name: FieldRef<"products", "String">;
    readonly description: FieldRef<"products", "String">;
    readonly slug: FieldRef<"products", "String">;
    readonly price: FieldRef<"products", "Float">;
    readonly discount: FieldRef<"products", "Float">;
    readonly in_stock: FieldRef<"products", "Int">;
    readonly quantity: FieldRef<"products", "Int">;
    readonly rating: FieldRef<"products", "Float">;
    readonly brandId: FieldRef<"products", "String">;
    readonly categoryId: FieldRef<"products", "String">;
    readonly images: FieldRef<"products", "String[]">;
    readonly created_at: FieldRef<"products", "DateTime">;
    readonly updated_at: FieldRef<"products", "DateTime">;
  }

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput;
  };

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput;
  };

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?:
      | productsOrderByWithRelationInput
      | productsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[];
  };

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?:
      | productsOrderByWithRelationInput
      | productsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[];
  };

  /**
   * products findMany
   */
  export type productsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?:
      | productsOrderByWithRelationInput
      | productsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[];
  };

  /**
   * products create
   */
  export type productsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>;
  };

  /**
   * products createMany
   */
  export type productsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[];
  };

  /**
   * products update
   */
  export type productsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>;
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput;
  };

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update products.
     */
    data: XOR<
      productsUpdateManyMutationInput,
      productsUncheckedUpdateManyInput
    >;
    /**
     * Filter which products to update
     */
    where?: productsWhereInput;
    /**
     * Limit how many products to update.
     */
    limit?: number;
  };

  /**
   * products upsert
   */
  export type productsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput;
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>;
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>;
  };

  /**
   * products delete
   */
  export type productsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput;
  };

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput;
    /**
     * Limit how many products to delete.
     */
    limit?: number;
  };

  /**
   * products findRaw
   */
  export type productsFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * products aggregateRaw
   */
  export type productsAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * products.comments
   */
  export type products$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null;
    where?: CommentsWhereInput;
    orderBy?:
      | CommentsOrderByWithRelationInput
      | CommentsOrderByWithRelationInput[];
    cursor?: CommentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[];
  };

  /**
   * products.brands
   */
  export type products$brandsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null;
    where?: BrandsWhereInput;
  };

  /**
   * products.categories
   */
  export type products$categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    where?: CategoryWhereInput;
  };

  /**
   * products without action
   */
  export type productsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
  };

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  export type CategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CategoryCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categories
     **/
    _count?: true | CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryMaxAggregateInputType;
  };

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>;
  };

  export type CategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CategoryWhereInput;
    orderBy?:
      | CategoryOrderByWithAggregationInput
      | CategoryOrderByWithAggregationInput[];
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum;
    having?: CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
  };

  export type CategoryGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    _count: CategoryCountAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CategoryGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CategoryGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type CategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      products?: boolean | Category$productsArgs<ExtArgs>;
      _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["category"]
  >;

  export type CategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type CategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    "id" | "name" | "description" | "created_at" | "updated_at",
    ExtArgs["result"]["category"]
  >;
  export type CategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    products?: boolean | Category$productsArgs<ExtArgs>;
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $CategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Category";
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs["result"]["category"]
    >;
    composites: {};
  };

  type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryDefaultArgs
  > = $Result.GetResult<Prisma.$CategoryPayload, S>;

  type CategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<CategoryFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CategoryCountAggregateInputType | true;
  };

  export interface CategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Category"];
      meta: { name: "Category" };
    };
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     *
     */
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     *
     */
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * @param {CategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const category = await prisma.category.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Category.
     * @param {CategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const category = await prisma.category.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: CategoryAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CategoryAggregateArgs>(
      args: Subset<T, CategoryAggregateArgs>
    ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs["orderBy"] }
        : { orderBy?: CategoryGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Category model
     */
    readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends Category$productsArgs<ExtArgs> = {}>(
      args?: Subset<T, Category$productsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$productsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", "String">;
    readonly name: FieldRef<"Category", "String">;
    readonly description: FieldRef<"Category", "String">;
    readonly created_at: FieldRef<"Category", "DateTime">;
    readonly updated_at: FieldRef<"Category", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category create
   */
  export type CategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
  };

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
  };

  /**
   * Category update
   */
  export type CategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput;
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
  };

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to delete.
     */
    limit?: number;
  };

  /**
   * Category findRaw
   */
  export type CategoryFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Category aggregateRaw
   */
  export type CategoryAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Category.products
   */
  export type Category$productsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    where?: productsWhereInput;
    orderBy?:
      | productsOrderByWithRelationInput
      | productsOrderByWithRelationInput[];
    cursor?: productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[];
  };

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
  };

  /**
   * Model Brands
   */

  export type AggregateBrands = {
    _count: BrandsCountAggregateOutputType | null;
    _min: BrandsMinAggregateOutputType | null;
    _max: BrandsMaxAggregateOutputType | null;
  };

  export type BrandsMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BrandsMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BrandsCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BrandsMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BrandsMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BrandsCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BrandsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Brands to aggregate.
     */
    where?: BrandsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BrandsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Brands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Brands
     **/
    _count?: true | BrandsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BrandsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BrandsMaxAggregateInputType;
  };

  export type GetBrandsAggregateType<T extends BrandsAggregateArgs> = {
    [P in keyof T & keyof AggregateBrands]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrands[P]>
      : GetScalarType<T[P], AggregateBrands[P]>;
  };

  export type BrandsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BrandsWhereInput;
    orderBy?:
      | BrandsOrderByWithAggregationInput
      | BrandsOrderByWithAggregationInput[];
    by: BrandsScalarFieldEnum[] | BrandsScalarFieldEnum;
    having?: BrandsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BrandsCountAggregateInputType | true;
    _min?: BrandsMinAggregateInputType;
    _max?: BrandsMaxAggregateInputType;
  };

  export type BrandsGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    _count: BrandsCountAggregateOutputType | null;
    _min: BrandsMinAggregateOutputType | null;
    _max: BrandsMaxAggregateOutputType | null;
  };

  type GetBrandsGroupByPayload<T extends BrandsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BrandsGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof BrandsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandsGroupByOutputType[P]>
            : GetScalarType<T[P], BrandsGroupByOutputType[P]>;
        }
      >
    >;

  export type BrandsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      products?: boolean | Brands$productsArgs<ExtArgs>;
      _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["brands"]
  >;

  export type BrandsSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type BrandsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    "id" | "name" | "description" | "created_at" | "updated_at",
    ExtArgs["result"]["brands"]
  >;
  export type BrandsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    products?: boolean | Brands$productsArgs<ExtArgs>;
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $BrandsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Brands";
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs["result"]["brands"]
    >;
    composites: {};
  };

  type BrandsGetPayload<
    S extends boolean | null | undefined | BrandsDefaultArgs
  > = $Result.GetResult<Prisma.$BrandsPayload, S>;

  type BrandsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<BrandsFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: BrandsCountAggregateInputType | true;
  };

  export interface BrandsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Brands"];
      meta: { name: "Brands" };
    };
    /**
     * Find zero or one Brands that matches the filter.
     * @param {BrandsFindUniqueArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandsFindUniqueArgs>(
      args: SelectSubset<T, BrandsFindUniqueArgs<ExtArgs>>
    ): Prisma__BrandsClient<
      $Result.GetResult<
        Prisma.$BrandsPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Brands that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandsFindUniqueOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BrandsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BrandsClient<
      $Result.GetResult<
        Prisma.$BrandsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandsFindFirstArgs>(
      args?: SelectSubset<T, BrandsFindFirstArgs<ExtArgs>>
    ): Prisma__BrandsClient<
      $Result.GetResult<
        Prisma.$BrandsPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Brands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BrandsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BrandsClient<
      $Result.GetResult<
        Prisma.$BrandsPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brands.findMany()
     *
     * // Get first 10 Brands
     * const brands = await prisma.brands.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const brandsWithIdOnly = await prisma.brands.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BrandsFindManyArgs>(
      args?: SelectSubset<T, BrandsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BrandsPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Brands.
     * @param {BrandsCreateArgs} args - Arguments to create a Brands.
     * @example
     * // Create one Brands
     * const Brands = await prisma.brands.create({
     *   data: {
     *     // ... data to create a Brands
     *   }
     * })
     *
     */
    create<T extends BrandsCreateArgs>(
      args: SelectSubset<T, BrandsCreateArgs<ExtArgs>>
    ): Prisma__BrandsClient<
      $Result.GetResult<
        Prisma.$BrandsPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Brands.
     * @param {BrandsCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BrandsCreateManyArgs>(
      args?: SelectSubset<T, BrandsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Brands.
     * @param {BrandsDeleteArgs} args - Arguments to delete one Brands.
     * @example
     * // Delete one Brands
     * const Brands = await prisma.brands.delete({
     *   where: {
     *     // ... filter to delete one Brands
     *   }
     * })
     *
     */
    delete<T extends BrandsDeleteArgs>(
      args: SelectSubset<T, BrandsDeleteArgs<ExtArgs>>
    ): Prisma__BrandsClient<
      $Result.GetResult<
        Prisma.$BrandsPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Brands.
     * @param {BrandsUpdateArgs} args - Arguments to update one Brands.
     * @example
     * // Update one Brands
     * const brands = await prisma.brands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BrandsUpdateArgs>(
      args: SelectSubset<T, BrandsUpdateArgs<ExtArgs>>
    ): Prisma__BrandsClient<
      $Result.GetResult<
        Prisma.$BrandsPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Brands.
     * @param {BrandsDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BrandsDeleteManyArgs>(
      args?: SelectSubset<T, BrandsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BrandsUpdateManyArgs>(
      args: SelectSubset<T, BrandsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Brands.
     * @param {BrandsUpsertArgs} args - Arguments to update or create a Brands.
     * @example
     * // Update or create a Brands
     * const brands = await prisma.brands.upsert({
     *   create: {
     *     // ... data to create a Brands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brands we want to update
     *   }
     * })
     */
    upsert<T extends BrandsUpsertArgs>(
      args: SelectSubset<T, BrandsUpsertArgs<ExtArgs>>
    ): Prisma__BrandsClient<
      $Result.GetResult<
        Prisma.$BrandsPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Brands that matches the filter.
     * @param {BrandsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const brands = await prisma.brands.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BrandsFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Brands.
     * @param {BrandsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const brands = await prisma.brands.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: BrandsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brands.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
     **/
    count<T extends BrandsCountArgs>(
      args?: Subset<T, BrandsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], BrandsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BrandsAggregateArgs>(
      args: Subset<T, BrandsAggregateArgs>
    ): Prisma.PrismaPromise<GetBrandsAggregateType<T>>;

    /**
     * Group by Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BrandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandsGroupByArgs["orderBy"] }
        : { orderBy?: BrandsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, BrandsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetBrandsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Brands model
     */
    readonly fields: BrandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends Brands$productsArgs<ExtArgs> = {}>(
      args?: Subset<T, Brands$productsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$productsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Brands model
   */
  interface BrandsFieldRefs {
    readonly id: FieldRef<"Brands", "String">;
    readonly name: FieldRef<"Brands", "String">;
    readonly description: FieldRef<"Brands", "String">;
    readonly created_at: FieldRef<"Brands", "DateTime">;
    readonly updated_at: FieldRef<"Brands", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Brands findUnique
   */
  export type BrandsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null;
    /**
     * Filter, which Brands to fetch.
     */
    where: BrandsWhereUniqueInput;
  };

  /**
   * Brands findUniqueOrThrow
   */
  export type BrandsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null;
    /**
     * Filter, which Brands to fetch.
     */
    where: BrandsWhereUniqueInput;
  };

  /**
   * Brands findFirst
   */
  export type BrandsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null;
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Brands.
     */
    cursor?: BrandsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Brands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[];
  };

  /**
   * Brands findFirstOrThrow
   */
  export type BrandsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null;
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Brands.
     */
    cursor?: BrandsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Brands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[];
  };

  /**
   * Brands findMany
   */
  export type BrandsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null;
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Brands.
     */
    cursor?: BrandsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Brands.
     */
    skip?: number;
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[];
  };

  /**
   * Brands create
   */
  export type BrandsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Brands.
     */
    data: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>;
  };

  /**
   * Brands createMany
   */
  export type BrandsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Brands.
     */
    data: BrandsCreateManyInput | BrandsCreateManyInput[];
  };

  /**
   * Brands update
   */
  export type BrandsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Brands.
     */
    data: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>;
    /**
     * Choose, which Brands to update.
     */
    where: BrandsWhereUniqueInput;
  };

  /**
   * Brands updateMany
   */
  export type BrandsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandsUpdateManyMutationInput, BrandsUncheckedUpdateManyInput>;
    /**
     * Filter which Brands to update
     */
    where?: BrandsWhereInput;
    /**
     * Limit how many Brands to update.
     */
    limit?: number;
  };

  /**
   * Brands upsert
   */
  export type BrandsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Brands to update in case it exists.
     */
    where: BrandsWhereUniqueInput;
    /**
     * In case the Brands found by the `where` argument doesn't exist, create a new Brands with this data.
     */
    create: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>;
    /**
     * In case the Brands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>;
  };

  /**
   * Brands delete
   */
  export type BrandsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null;
    /**
     * Filter which Brands to delete.
     */
    where: BrandsWhereUniqueInput;
  };

  /**
   * Brands deleteMany
   */
  export type BrandsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandsWhereInput;
    /**
     * Limit how many Brands to delete.
     */
    limit?: number;
  };

  /**
   * Brands findRaw
   */
  export type BrandsFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Brands aggregateRaw
   */
  export type BrandsAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Brands.products
   */
  export type Brands$productsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    where?: productsWhereInput;
    orderBy?:
      | productsOrderByWithRelationInput
      | productsOrderByWithRelationInput[];
    cursor?: productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[];
  };

  /**
   * Brands without action
   */
  export type BrandsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null;
  };

  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null;
    _avg: CommentsAvgAggregateOutputType | null;
    _sum: CommentsSumAggregateOutputType | null;
    _min: CommentsMinAggregateOutputType | null;
    _max: CommentsMaxAggregateOutputType | null;
  };

  export type CommentsAvgAggregateOutputType = {
    rating: number | null;
  };

  export type CommentsSumAggregateOutputType = {
    rating: number | null;
  };

  export type CommentsMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    rating: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    author_id: string | null;
    comment_id: string | null;
  };

  export type CommentsMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    rating: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    author_id: string | null;
    comment_id: string | null;
  };

  export type CommentsCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    rating: number;
    created_at: number;
    updated_at: number;
    author_id: number;
    comment_id: number;
    _all: number;
  };

  export type CommentsAvgAggregateInputType = {
    rating?: true;
  };

  export type CommentsSumAggregateInputType = {
    rating?: true;
  };

  export type CommentsMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
    author_id?: true;
    comment_id?: true;
  };

  export type CommentsMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
    author_id?: true;
    comment_id?: true;
  };

  export type CommentsCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
    author_id?: true;
    comment_id?: true;
    _all?: true;
  };

  export type CommentsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentsOrderByWithRelationInput
      | CommentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comments
     **/
    _count?: true | CommentsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CommentsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CommentsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CommentsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CommentsMaxAggregateInputType;
  };

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
    [P in keyof T & keyof AggregateComments]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>;
  };

  export type CommentsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CommentsWhereInput;
    orderBy?:
      | CommentsOrderByWithAggregationInput
      | CommentsOrderByWithAggregationInput[];
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum;
    having?: CommentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentsCountAggregateInputType | true;
    _avg?: CommentsAvgAggregateInputType;
    _sum?: CommentsSumAggregateInputType;
    _min?: CommentsMinAggregateInputType;
    _max?: CommentsMaxAggregateInputType;
  };

  export type CommentsGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    rating: number;
    created_at: Date;
    updated_at: Date;
    author_id: string;
    comment_id: string | null;
    _count: CommentsCountAggregateOutputType | null;
    _avg: CommentsAvgAggregateOutputType | null;
    _sum: CommentsSumAggregateOutputType | null;
    _min: CommentsMinAggregateOutputType | null;
    _max: CommentsMaxAggregateOutputType | null;
  };

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CommentsGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CommentsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>;
        }
      >
    >;

  export type CommentsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      rating?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      author_id?: boolean;
      comment_id?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      products?: boolean | Comments$productsArgs<ExtArgs>;
    },
    ExtArgs["result"]["comments"]
  >;

  export type CommentsSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    rating?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    author_id?: boolean;
    comment_id?: boolean;
  };

  export type CommentsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | "id"
    | "title"
    | "description"
    | "rating"
    | "created_at"
    | "updated_at"
    | "author_id"
    | "comment_id",
    ExtArgs["result"]["comments"]
  >;
  export type CommentsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    products?: boolean | Comments$productsArgs<ExtArgs>;
  };

  export type $CommentsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Comments";
    objects: {
      author: Prisma.$UserPayload<ExtArgs>;
      products: Prisma.$productsPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string;
        rating: number;
        created_at: Date;
        updated_at: Date;
        author_id: string;
        comment_id: string | null;
      },
      ExtArgs["result"]["comments"]
    >;
    composites: {};
  };

  type CommentsGetPayload<
    S extends boolean | null | undefined | CommentsDefaultArgs
  > = $Result.GetResult<Prisma.$CommentsPayload, S>;

  type CommentsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<CommentsFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CommentsCountAggregateInputType | true;
  };

  export interface CommentsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Comments"];
      meta: { name: "Comments" };
    };
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(
      args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(
      args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     *
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommentsFindManyArgs>(
      args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     *
     */
    create<T extends CommentsCreateArgs>(
      args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommentsCreateManyArgs>(
      args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     *
     */
    delete<T extends CommentsDeleteArgs>(
      args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommentsUpdateArgs>(
      args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommentsDeleteManyArgs>(
      args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommentsUpdateManyArgs>(
      args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(
      args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Comments that matches the filter.
     * @param {CommentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const comments = await prisma.comments.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CommentsFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Comments.
     * @param {CommentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const comments = await prisma.comments.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: CommentsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
     **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CommentsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CommentsAggregateArgs>(
      args: Subset<T, CommentsAggregateArgs>
    ): Prisma.PrismaPromise<GetCommentsAggregateType<T>>;

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs["orderBy"] }
        : { orderBy?: CommentsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCommentsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Comments model
     */
    readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    products<T extends Comments$productsArgs<ExtArgs> = {}>(
      args?: Subset<T, Comments$productsArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", "String">;
    readonly title: FieldRef<"Comments", "String">;
    readonly description: FieldRef<"Comments", "String">;
    readonly rating: FieldRef<"Comments", "Float">;
    readonly created_at: FieldRef<"Comments", "DateTime">;
    readonly updated_at: FieldRef<"Comments", "DateTime">;
    readonly author_id: FieldRef<"Comments", "String">;
    readonly comment_id: FieldRef<"Comments", "String">;
  }

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null;
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput;
  };

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null;
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput;
  };

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null;
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentsOrderByWithRelationInput
      | CommentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[];
  };

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null;
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentsOrderByWithRelationInput
      | CommentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[];
  };

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null;
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentsOrderByWithRelationInput
      | CommentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[];
  };

  /**
   * Comments create
   */
  export type CommentsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>;
  };

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[];
  };

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>;
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput;
  };

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Comments.
     */
    data: XOR<
      CommentsUpdateManyMutationInput,
      CommentsUncheckedUpdateManyInput
    >;
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
  };

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput;
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>;
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>;
  };

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null;
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput;
  };

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput;
    /**
     * Limit how many Comments to delete.
     */
    limit?: number;
  };

  /**
   * Comments findRaw
   */
  export type CommentsFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Comments aggregateRaw
   */
  export type CommentsAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Comments.products
   */
  export type Comments$productsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    where?: productsWhereInput;
  };

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    password: string | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    password: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    password: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    name: string;
    password: string;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password?: boolean;
      comments?: boolean | User$commentsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    "id" | "email" | "name" | "password",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    comments?: boolean | User$commentsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "User";
    objects: {
      comments: Prisma.$CommentsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        name: string;
        password: string;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    comments<T extends User$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$commentsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly password: FieldRef<"User", "String">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User findRaw
   */
  export type UserFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User.comments
   */
  export type User$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null;
    where?: CommentsWhereInput;
    orderBy?:
      | CommentsOrderByWithRelationInput
      | CommentsOrderByWithRelationInput[];
    cursor?: CommentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const ProductsScalarFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    slug: "slug";
    price: "price";
    discount: "discount";
    in_stock: "in_stock";
    quantity: "quantity";
    rating: "rating";
    brandId: "brandId";
    categoryId: "categoryId";
    images: "images";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type ProductsScalarFieldEnum =
    (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum];

  export const CategoryScalarFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type CategoryScalarFieldEnum =
    (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];

  export const BrandsScalarFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type BrandsScalarFieldEnum =
    (typeof BrandsScalarFieldEnum)[keyof typeof BrandsScalarFieldEnum];

  export const CommentsScalarFieldEnum: {
    id: "id";
    title: "title";
    description: "description";
    rating: "rating";
    created_at: "created_at";
    updated_at: "updated_at";
    author_id: "author_id";
    comment_id: "comment_id";
  };

  export type CommentsScalarFieldEnum =
    (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: "id";
    email: "email";
    name: "name";
    password: "password";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Deep Input Types
   */

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[];
    OR?: productsWhereInput[];
    NOT?: productsWhereInput | productsWhereInput[];
    id?: StringFilter<"products"> | string;
    name?: StringFilter<"products"> | string;
    description?: StringFilter<"products"> | string;
    slug?: StringFilter<"products"> | string;
    price?: FloatFilter<"products"> | number;
    discount?: FloatFilter<"products"> | number;
    info?: XOR<InfoCompositeFilter, InfoObjectEqualityInput>;
    cpu_info?: XOR<Cpu_InfoCompositeFilter, Cpu_InfoObjectEqualityInput>;
    in_stock?: IntFilter<"products"> | number;
    quantity?: IntFilter<"products"> | number;
    rating?: FloatFilter<"products"> | number;
    brandId?: StringFilter<"products"> | string;
    categoryId?: StringFilter<"products"> | string;
    images?: StringNullableListFilter<"products">;
    created_at?: DateTimeFilter<"products"> | Date | string;
    updated_at?: DateTimeFilter<"products"> | Date | string;
    comments?: CommentsListRelationFilter;
    brands?: XOR<BrandsNullableScalarRelationFilter, BrandsWhereInput> | null;
    categories?: XOR<
      CategoryNullableScalarRelationFilter,
      CategoryWhereInput
    > | null;
  };

  export type productsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
    price?: SortOrder;
    discount?: SortOrder;
    info?: InfoOrderByInput;
    cpu_info?: Cpu_InfoOrderByInput;
    in_stock?: SortOrder;
    quantity?: SortOrder;
    rating?: SortOrder;
    brandId?: SortOrder;
    categoryId?: SortOrder;
    images?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    comments?: CommentsOrderByRelationAggregateInput;
    brands?: BrandsOrderByWithRelationInput;
    categories?: CategoryOrderByWithRelationInput;
  };

  export type productsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: productsWhereInput | productsWhereInput[];
      OR?: productsWhereInput[];
      NOT?: productsWhereInput | productsWhereInput[];
      name?: StringFilter<"products"> | string;
      description?: StringFilter<"products"> | string;
      slug?: StringFilter<"products"> | string;
      price?: FloatFilter<"products"> | number;
      discount?: FloatFilter<"products"> | number;
      info?: XOR<InfoCompositeFilter, InfoObjectEqualityInput>;
      cpu_info?: XOR<Cpu_InfoCompositeFilter, Cpu_InfoObjectEqualityInput>;
      in_stock?: IntFilter<"products"> | number;
      quantity?: IntFilter<"products"> | number;
      rating?: FloatFilter<"products"> | number;
      brandId?: StringFilter<"products"> | string;
      categoryId?: StringFilter<"products"> | string;
      images?: StringNullableListFilter<"products">;
      created_at?: DateTimeFilter<"products"> | Date | string;
      updated_at?: DateTimeFilter<"products"> | Date | string;
      comments?: CommentsListRelationFilter;
      brands?: XOR<BrandsNullableScalarRelationFilter, BrandsWhereInput> | null;
      categories?: XOR<
        CategoryNullableScalarRelationFilter,
        CategoryWhereInput
      > | null;
    },
    "id"
  >;

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
    price?: SortOrder;
    discount?: SortOrder;
    in_stock?: SortOrder;
    quantity?: SortOrder;
    rating?: SortOrder;
    brandId?: SortOrder;
    categoryId?: SortOrder;
    images?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: productsCountOrderByAggregateInput;
    _avg?: productsAvgOrderByAggregateInput;
    _max?: productsMaxOrderByAggregateInput;
    _min?: productsMinOrderByAggregateInput;
    _sum?: productsSumOrderByAggregateInput;
  };

  export type productsScalarWhereWithAggregatesInput = {
    AND?:
      | productsScalarWhereWithAggregatesInput
      | productsScalarWhereWithAggregatesInput[];
    OR?: productsScalarWhereWithAggregatesInput[];
    NOT?:
      | productsScalarWhereWithAggregatesInput
      | productsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"products"> | string;
    name?: StringWithAggregatesFilter<"products"> | string;
    description?: StringWithAggregatesFilter<"products"> | string;
    slug?: StringWithAggregatesFilter<"products"> | string;
    price?: FloatWithAggregatesFilter<"products"> | number;
    discount?: FloatWithAggregatesFilter<"products"> | number;
    in_stock?: IntWithAggregatesFilter<"products"> | number;
    quantity?: IntWithAggregatesFilter<"products"> | number;
    rating?: FloatWithAggregatesFilter<"products"> | number;
    brandId?: StringWithAggregatesFilter<"products"> | string;
    categoryId?: StringWithAggregatesFilter<"products"> | string;
    images?: StringNullableListFilter<"products">;
    created_at?: DateTimeWithAggregatesFilter<"products"> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<"products"> | Date | string;
  };

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[];
    OR?: CategoryWhereInput[];
    NOT?: CategoryWhereInput | CategoryWhereInput[];
    id?: StringFilter<"Category"> | string;
    name?: StringFilter<"Category"> | string;
    description?: StringFilter<"Category"> | string;
    created_at?: DateTimeFilter<"Category"> | Date | string;
    updated_at?: DateTimeFilter<"Category"> | Date | string;
    products?: ProductsListRelationFilter;
  };

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    products?: productsOrderByRelationAggregateInput;
  };

  export type CategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CategoryWhereInput | CategoryWhereInput[];
      OR?: CategoryWhereInput[];
      NOT?: CategoryWhereInput | CategoryWhereInput[];
      name?: StringFilter<"Category"> | string;
      description?: StringFilter<"Category"> | string;
      created_at?: DateTimeFilter<"Category"> | Date | string;
      updated_at?: DateTimeFilter<"Category"> | Date | string;
      products?: ProductsListRelationFilter;
    },
    "id"
  >;

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: CategoryCountOrderByAggregateInput;
    _max?: CategoryMaxOrderByAggregateInput;
    _min?: CategoryMinOrderByAggregateInput;
  };

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    OR?: CategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Category"> | string;
    name?: StringWithAggregatesFilter<"Category"> | string;
    description?: StringWithAggregatesFilter<"Category"> | string;
    created_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string;
  };

  export type BrandsWhereInput = {
    AND?: BrandsWhereInput | BrandsWhereInput[];
    OR?: BrandsWhereInput[];
    NOT?: BrandsWhereInput | BrandsWhereInput[];
    id?: StringFilter<"Brands"> | string;
    name?: StringFilter<"Brands"> | string;
    description?: StringFilter<"Brands"> | string;
    created_at?: DateTimeFilter<"Brands"> | Date | string;
    updated_at?: DateTimeFilter<"Brands"> | Date | string;
    products?: ProductsListRelationFilter;
  };

  export type BrandsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    products?: productsOrderByRelationAggregateInput;
  };

  export type BrandsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: BrandsWhereInput | BrandsWhereInput[];
      OR?: BrandsWhereInput[];
      NOT?: BrandsWhereInput | BrandsWhereInput[];
      name?: StringFilter<"Brands"> | string;
      description?: StringFilter<"Brands"> | string;
      created_at?: DateTimeFilter<"Brands"> | Date | string;
      updated_at?: DateTimeFilter<"Brands"> | Date | string;
      products?: ProductsListRelationFilter;
    },
    "id"
  >;

  export type BrandsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: BrandsCountOrderByAggregateInput;
    _max?: BrandsMaxOrderByAggregateInput;
    _min?: BrandsMinOrderByAggregateInput;
  };

  export type BrandsScalarWhereWithAggregatesInput = {
    AND?:
      | BrandsScalarWhereWithAggregatesInput
      | BrandsScalarWhereWithAggregatesInput[];
    OR?: BrandsScalarWhereWithAggregatesInput[];
    NOT?:
      | BrandsScalarWhereWithAggregatesInput
      | BrandsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Brands"> | string;
    name?: StringWithAggregatesFilter<"Brands"> | string;
    description?: StringWithAggregatesFilter<"Brands"> | string;
    created_at?: DateTimeWithAggregatesFilter<"Brands"> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<"Brands"> | Date | string;
  };

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[];
    OR?: CommentsWhereInput[];
    NOT?: CommentsWhereInput | CommentsWhereInput[];
    id?: StringFilter<"Comments"> | string;
    title?: StringFilter<"Comments"> | string;
    description?: StringFilter<"Comments"> | string;
    rating?: FloatFilter<"Comments"> | number;
    created_at?: DateTimeFilter<"Comments"> | Date | string;
    updated_at?: DateTimeFilter<"Comments"> | Date | string;
    author_id?: StringFilter<"Comments"> | string;
    comment_id?: StringNullableFilter<"Comments"> | string | null;
    author?: XOR<UserScalarRelationFilter, UserWhereInput>;
    products?: XOR<
      ProductsNullableScalarRelationFilter,
      productsWhereInput
    > | null;
  };

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    author_id?: SortOrder;
    comment_id?: SortOrder;
    author?: UserOrderByWithRelationInput;
    products?: productsOrderByWithRelationInput;
  };

  export type CommentsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CommentsWhereInput | CommentsWhereInput[];
      OR?: CommentsWhereInput[];
      NOT?: CommentsWhereInput | CommentsWhereInput[];
      title?: StringFilter<"Comments"> | string;
      description?: StringFilter<"Comments"> | string;
      rating?: FloatFilter<"Comments"> | number;
      created_at?: DateTimeFilter<"Comments"> | Date | string;
      updated_at?: DateTimeFilter<"Comments"> | Date | string;
      author_id?: StringFilter<"Comments"> | string;
      comment_id?: StringNullableFilter<"Comments"> | string | null;
      author?: XOR<UserScalarRelationFilter, UserWhereInput>;
      products?: XOR<
        ProductsNullableScalarRelationFilter,
        productsWhereInput
      > | null;
    },
    "id"
  >;

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    author_id?: SortOrder;
    comment_id?: SortOrder;
    _count?: CommentsCountOrderByAggregateInput;
    _avg?: CommentsAvgOrderByAggregateInput;
    _max?: CommentsMaxOrderByAggregateInput;
    _min?: CommentsMinOrderByAggregateInput;
    _sum?: CommentsSumOrderByAggregateInput;
  };

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?:
      | CommentsScalarWhereWithAggregatesInput
      | CommentsScalarWhereWithAggregatesInput[];
    OR?: CommentsScalarWhereWithAggregatesInput[];
    NOT?:
      | CommentsScalarWhereWithAggregatesInput
      | CommentsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Comments"> | string;
    title?: StringWithAggregatesFilter<"Comments"> | string;
    description?: StringWithAggregatesFilter<"Comments"> | string;
    rating?: FloatWithAggregatesFilter<"Comments"> | number;
    created_at?: DateTimeWithAggregatesFilter<"Comments"> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<"Comments"> | Date | string;
    author_id?: StringWithAggregatesFilter<"Comments"> | string;
    comment_id?: StringNullableWithAggregatesFilter<"Comments"> | string | null;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    name?: StringFilter<"User"> | string;
    password?: StringFilter<"User"> | string;
    comments?: CommentsListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    comments?: CommentsOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<"User"> | string;
      password?: StringFilter<"User"> | string;
      comments?: CommentsListRelationFilter;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    name?: StringWithAggregatesFilter<"User"> | string;
    password?: StringWithAggregatesFilter<"User"> | string;
  };

  export type productsCreateInput = {
    id?: string;
    name: string;
    description: string;
    slug: string;
    price: number;
    discount: number;
    info: XOR<InfoCreateEnvelopeInput, InfoCreateInput>;
    cpu_info: XOR<Cpu_InfoCreateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: number;
    quantity?: number;
    rating: number;
    images?: productsCreateimagesInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentsCreateNestedManyWithoutProductsInput;
    brands?: BrandsCreateNestedOneWithoutProductsInput;
    categories?: CategoryCreateNestedOneWithoutProductsInput;
  };

  export type productsUncheckedCreateInput = {
    id?: string;
    name: string;
    description: string;
    slug: string;
    price: number;
    discount: number;
    info: XOR<InfoCreateEnvelopeInput, InfoCreateInput>;
    cpu_info: XOR<Cpu_InfoCreateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: number;
    quantity?: number;
    rating: number;
    brandId: string;
    categoryId: string;
    images?: productsCreateimagesInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentsUncheckedCreateNestedManyWithoutProductsInput;
  };

  export type productsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    discount?: FloatFieldUpdateOperationsInput | number;
    info?: XOR<InfoUpdateEnvelopeInput, InfoCreateInput>;
    cpu_info?: XOR<Cpu_InfoUpdateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    images?: productsUpdateimagesInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentsUpdateManyWithoutProductsNestedInput;
    brands?: BrandsUpdateOneWithoutProductsNestedInput;
    categories?: CategoryUpdateOneWithoutProductsNestedInput;
  };

  export type productsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    discount?: FloatFieldUpdateOperationsInput | number;
    info?: XOR<InfoUpdateEnvelopeInput, InfoCreateInput>;
    cpu_info?: XOR<Cpu_InfoUpdateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    brandId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    images?: productsUpdateimagesInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentsUncheckedUpdateManyWithoutProductsNestedInput;
  };

  export type productsCreateManyInput = {
    id?: string;
    name: string;
    description: string;
    slug: string;
    price: number;
    discount: number;
    info: XOR<InfoCreateEnvelopeInput, InfoCreateInput>;
    cpu_info: XOR<Cpu_InfoCreateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: number;
    quantity?: number;
    rating: number;
    brandId: string;
    categoryId: string;
    images?: productsCreateimagesInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type productsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    discount?: FloatFieldUpdateOperationsInput | number;
    info?: XOR<InfoUpdateEnvelopeInput, InfoCreateInput>;
    cpu_info?: XOR<Cpu_InfoUpdateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    images?: productsUpdateimagesInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type productsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    discount?: FloatFieldUpdateOperationsInput | number;
    info?: XOR<InfoUpdateEnvelopeInput, InfoCreateInput>;
    cpu_info?: XOR<Cpu_InfoUpdateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    brandId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    images?: productsUpdateimagesInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryCreateInput = {
    id?: string;
    name: string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    products?: productsCreateNestedManyWithoutCategoriesInput;
  };

  export type CategoryUncheckedCreateInput = {
    id?: string;
    name: string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput;
  };

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: productsUpdateManyWithoutCategoriesNestedInput;
  };

  export type CategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput;
  };

  export type CategoryCreateManyInput = {
    id?: string;
    name: string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BrandsCreateInput = {
    id?: string;
    name: string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    products?: productsCreateNestedManyWithoutBrandsInput;
  };

  export type BrandsUncheckedCreateInput = {
    id?: string;
    name: string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    products?: productsUncheckedCreateNestedManyWithoutBrandsInput;
  };

  export type BrandsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: productsUpdateManyWithoutBrandsNestedInput;
  };

  export type BrandsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: productsUncheckedUpdateManyWithoutBrandsNestedInput;
  };

  export type BrandsCreateManyInput = {
    id?: string;
    name: string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type BrandsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BrandsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentsCreateInput = {
    id?: string;
    title: string;
    description: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    author: UserCreateNestedOneWithoutCommentsInput;
    products?: productsCreateNestedOneWithoutCommentsInput;
  };

  export type CommentsUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    author_id: string;
    comment_id?: string | null;
  };

  export type CommentsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput;
    products?: productsUpdateOneWithoutCommentsNestedInput;
  };

  export type CommentsUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    author_id?: StringFieldUpdateOperationsInput | string;
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CommentsCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    author_id: string;
    comment_id?: string | null;
  };

  export type CommentsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentsUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    author_id?: StringFieldUpdateOperationsInput | string;
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    name: string;
    password: string;
    comments?: CommentsCreateNestedManyWithoutAuthorInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    name: string;
    password: string;
    comments?: CommentsUncheckedCreateNestedManyWithoutAuthorInput;
  };

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    comments?: CommentsUpdateManyWithoutAuthorNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    comments?: CommentsUncheckedUpdateManyWithoutAuthorNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    name: string;
    password: string;
  };

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
  };

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type InfoCompositeFilter = {
    equals?: InfoObjectEqualityInput;
    is?: InfoWhereInput;
    isNot?: InfoWhereInput;
  };

  export type InfoObjectEqualityInput = {
    weight: string;
    color: string;
  };

  export type Cpu_InfoCompositeFilter = {
    equals?: Cpu_InfoObjectEqualityInput;
    is?: Cpu_InfoWhereInput;
    isNot?: Cpu_InfoWhereInput;
  };

  export type Cpu_InfoObjectEqualityInput = {
    model: string;
    cores: number;
    threads: number;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput;
    some?: CommentsWhereInput;
    none?: CommentsWhereInput;
  };

  export type BrandsNullableScalarRelationFilter = {
    is?: BrandsWhereInput | null;
    isNot?: BrandsWhereInput | null;
  };

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null;
    isNot?: CategoryWhereInput | null;
  };

  export type InfoOrderByInput = {
    weight?: SortOrder;
    color?: SortOrder;
  };

  export type Cpu_InfoOrderByInput = {
    model?: SortOrder;
    cores?: SortOrder;
    threads?: SortOrder;
  };

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
    price?: SortOrder;
    discount?: SortOrder;
    in_stock?: SortOrder;
    quantity?: SortOrder;
    rating?: SortOrder;
    brandId?: SortOrder;
    categoryId?: SortOrder;
    images?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type productsAvgOrderByAggregateInput = {
    price?: SortOrder;
    discount?: SortOrder;
    in_stock?: SortOrder;
    quantity?: SortOrder;
    rating?: SortOrder;
  };

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
    price?: SortOrder;
    discount?: SortOrder;
    in_stock?: SortOrder;
    quantity?: SortOrder;
    rating?: SortOrder;
    brandId?: SortOrder;
    categoryId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
    price?: SortOrder;
    discount?: SortOrder;
    in_stock?: SortOrder;
    quantity?: SortOrder;
    rating?: SortOrder;
    brandId?: SortOrder;
    categoryId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type productsSumOrderByAggregateInput = {
    price?: SortOrder;
    discount?: SortOrder;
    in_stock?: SortOrder;
    quantity?: SortOrder;
    rating?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type ProductsListRelationFilter = {
    every?: productsWhereInput;
    some?: productsWhereInput;
    none?: productsWhereInput;
  };

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BrandsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BrandsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BrandsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type ProductsNullableScalarRelationFilter = {
    is?: productsWhereInput | null;
    isNot?: productsWhereInput | null;
  };

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    author_id?: SortOrder;
    comment_id?: SortOrder;
  };

  export type CommentsAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    author_id?: SortOrder;
    comment_id?: SortOrder;
  };

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    author_id?: SortOrder;
    comment_id?: SortOrder;
  };

  export type CommentsSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
  };

  export type InfoCreateEnvelopeInput = {
    set?: InfoCreateInput;
  };

  export type InfoCreateInput = {
    weight: string;
    color: string;
  };

  export type Cpu_InfoCreateEnvelopeInput = {
    set?: Cpu_InfoCreateInput;
  };

  export type Cpu_InfoCreateInput = {
    model: string;
    cores: number;
    threads: number;
  };

  export type productsCreateimagesInput = {
    set: string[];
  };

  export type CommentsCreateNestedManyWithoutProductsInput = {
    create?:
      | XOR<
          CommentsCreateWithoutProductsInput,
          CommentsUncheckedCreateWithoutProductsInput
        >
      | CommentsCreateWithoutProductsInput[]
      | CommentsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?:
      | CommentsCreateOrConnectWithoutProductsInput
      | CommentsCreateOrConnectWithoutProductsInput[];
    createMany?: CommentsCreateManyProductsInputEnvelope;
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
  };

  export type BrandsCreateNestedOneWithoutProductsInput = {
    create?: XOR<
      BrandsCreateWithoutProductsInput,
      BrandsUncheckedCreateWithoutProductsInput
    >;
    connectOrCreate?: BrandsCreateOrConnectWithoutProductsInput;
    connect?: BrandsWhereUniqueInput;
  };

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<
      CategoryCreateWithoutProductsInput,
      CategoryUncheckedCreateWithoutProductsInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput;
    connect?: CategoryWhereUniqueInput;
  };

  export type CommentsUncheckedCreateNestedManyWithoutProductsInput = {
    create?:
      | XOR<
          CommentsCreateWithoutProductsInput,
          CommentsUncheckedCreateWithoutProductsInput
        >
      | CommentsCreateWithoutProductsInput[]
      | CommentsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?:
      | CommentsCreateOrConnectWithoutProductsInput
      | CommentsCreateOrConnectWithoutProductsInput[];
    createMany?: CommentsCreateManyProductsInputEnvelope;
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type InfoUpdateEnvelopeInput = {
    set?: InfoCreateInput;
    update?: InfoUpdateInput;
  };

  export type Cpu_InfoUpdateEnvelopeInput = {
    set?: Cpu_InfoCreateInput;
    update?: Cpu_InfoUpdateInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type productsUpdateimagesInput = {
    set?: string[];
    push?: string | string[];
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type CommentsUpdateManyWithoutProductsNestedInput = {
    create?:
      | XOR<
          CommentsCreateWithoutProductsInput,
          CommentsUncheckedCreateWithoutProductsInput
        >
      | CommentsCreateWithoutProductsInput[]
      | CommentsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?:
      | CommentsCreateOrConnectWithoutProductsInput
      | CommentsCreateOrConnectWithoutProductsInput[];
    upsert?:
      | CommentsUpsertWithWhereUniqueWithoutProductsInput
      | CommentsUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: CommentsCreateManyProductsInputEnvelope;
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    update?:
      | CommentsUpdateWithWhereUniqueWithoutProductsInput
      | CommentsUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?:
      | CommentsUpdateManyWithWhereWithoutProductsInput
      | CommentsUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[];
  };

  export type BrandsUpdateOneWithoutProductsNestedInput = {
    create?: XOR<
      BrandsCreateWithoutProductsInput,
      BrandsUncheckedCreateWithoutProductsInput
    >;
    connectOrCreate?: BrandsCreateOrConnectWithoutProductsInput;
    upsert?: BrandsUpsertWithoutProductsInput;
    disconnect?: boolean;
    delete?: BrandsWhereInput | boolean;
    connect?: BrandsWhereUniqueInput;
    update?: XOR<
      XOR<
        BrandsUpdateToOneWithWhereWithoutProductsInput,
        BrandsUpdateWithoutProductsInput
      >,
      BrandsUncheckedUpdateWithoutProductsInput
    >;
  };

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<
      CategoryCreateWithoutProductsInput,
      CategoryUncheckedCreateWithoutProductsInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput;
    upsert?: CategoryUpsertWithoutProductsInput;
    disconnect?: boolean;
    delete?: CategoryWhereInput | boolean;
    connect?: CategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoryUpdateToOneWithWhereWithoutProductsInput,
        CategoryUpdateWithoutProductsInput
      >,
      CategoryUncheckedUpdateWithoutProductsInput
    >;
  };

  export type CommentsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?:
      | XOR<
          CommentsCreateWithoutProductsInput,
          CommentsUncheckedCreateWithoutProductsInput
        >
      | CommentsCreateWithoutProductsInput[]
      | CommentsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?:
      | CommentsCreateOrConnectWithoutProductsInput
      | CommentsCreateOrConnectWithoutProductsInput[];
    upsert?:
      | CommentsUpsertWithWhereUniqueWithoutProductsInput
      | CommentsUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: CommentsCreateManyProductsInputEnvelope;
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    update?:
      | CommentsUpdateWithWhereUniqueWithoutProductsInput
      | CommentsUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?:
      | CommentsUpdateManyWithWhereWithoutProductsInput
      | CommentsUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[];
  };

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<
          productsCreateWithoutCategoriesInput,
          productsUncheckedCreateWithoutCategoriesInput
        >
      | productsCreateWithoutCategoriesInput[]
      | productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | productsCreateOrConnectWithoutCategoriesInput
      | productsCreateOrConnectWithoutCategoriesInput[];
    createMany?: productsCreateManyCategoriesInputEnvelope;
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[];
  };

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<
          productsCreateWithoutCategoriesInput,
          productsUncheckedCreateWithoutCategoriesInput
        >
      | productsCreateWithoutCategoriesInput[]
      | productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | productsCreateOrConnectWithoutCategoriesInput
      | productsCreateOrConnectWithoutCategoriesInput[];
    createMany?: productsCreateManyCategoriesInputEnvelope;
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[];
  };

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<
          productsCreateWithoutCategoriesInput,
          productsUncheckedCreateWithoutCategoriesInput
        >
      | productsCreateWithoutCategoriesInput[]
      | productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | productsCreateOrConnectWithoutCategoriesInput
      | productsCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | productsUpsertWithWhereUniqueWithoutCategoriesInput
      | productsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: productsCreateManyCategoriesInputEnvelope;
    set?: productsWhereUniqueInput | productsWhereUniqueInput[];
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[];
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[];
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[];
    update?:
      | productsUpdateWithWhereUniqueWithoutCategoriesInput
      | productsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | productsUpdateManyWithWhereWithoutCategoriesInput
      | productsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[];
  };

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<
          productsCreateWithoutCategoriesInput,
          productsUncheckedCreateWithoutCategoriesInput
        >
      | productsCreateWithoutCategoriesInput[]
      | productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | productsCreateOrConnectWithoutCategoriesInput
      | productsCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | productsUpsertWithWhereUniqueWithoutCategoriesInput
      | productsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: productsCreateManyCategoriesInputEnvelope;
    set?: productsWhereUniqueInput | productsWhereUniqueInput[];
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[];
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[];
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[];
    update?:
      | productsUpdateWithWhereUniqueWithoutCategoriesInput
      | productsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | productsUpdateManyWithWhereWithoutCategoriesInput
      | productsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[];
  };

  export type productsCreateNestedManyWithoutBrandsInput = {
    create?:
      | XOR<
          productsCreateWithoutBrandsInput,
          productsUncheckedCreateWithoutBrandsInput
        >
      | productsCreateWithoutBrandsInput[]
      | productsUncheckedCreateWithoutBrandsInput[];
    connectOrCreate?:
      | productsCreateOrConnectWithoutBrandsInput
      | productsCreateOrConnectWithoutBrandsInput[];
    createMany?: productsCreateManyBrandsInputEnvelope;
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[];
  };

  export type productsUncheckedCreateNestedManyWithoutBrandsInput = {
    create?:
      | XOR<
          productsCreateWithoutBrandsInput,
          productsUncheckedCreateWithoutBrandsInput
        >
      | productsCreateWithoutBrandsInput[]
      | productsUncheckedCreateWithoutBrandsInput[];
    connectOrCreate?:
      | productsCreateOrConnectWithoutBrandsInput
      | productsCreateOrConnectWithoutBrandsInput[];
    createMany?: productsCreateManyBrandsInputEnvelope;
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[];
  };

  export type productsUpdateManyWithoutBrandsNestedInput = {
    create?:
      | XOR<
          productsCreateWithoutBrandsInput,
          productsUncheckedCreateWithoutBrandsInput
        >
      | productsCreateWithoutBrandsInput[]
      | productsUncheckedCreateWithoutBrandsInput[];
    connectOrCreate?:
      | productsCreateOrConnectWithoutBrandsInput
      | productsCreateOrConnectWithoutBrandsInput[];
    upsert?:
      | productsUpsertWithWhereUniqueWithoutBrandsInput
      | productsUpsertWithWhereUniqueWithoutBrandsInput[];
    createMany?: productsCreateManyBrandsInputEnvelope;
    set?: productsWhereUniqueInput | productsWhereUniqueInput[];
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[];
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[];
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[];
    update?:
      | productsUpdateWithWhereUniqueWithoutBrandsInput
      | productsUpdateWithWhereUniqueWithoutBrandsInput[];
    updateMany?:
      | productsUpdateManyWithWhereWithoutBrandsInput
      | productsUpdateManyWithWhereWithoutBrandsInput[];
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[];
  };

  export type productsUncheckedUpdateManyWithoutBrandsNestedInput = {
    create?:
      | XOR<
          productsCreateWithoutBrandsInput,
          productsUncheckedCreateWithoutBrandsInput
        >
      | productsCreateWithoutBrandsInput[]
      | productsUncheckedCreateWithoutBrandsInput[];
    connectOrCreate?:
      | productsCreateOrConnectWithoutBrandsInput
      | productsCreateOrConnectWithoutBrandsInput[];
    upsert?:
      | productsUpsertWithWhereUniqueWithoutBrandsInput
      | productsUpsertWithWhereUniqueWithoutBrandsInput[];
    createMany?: productsCreateManyBrandsInputEnvelope;
    set?: productsWhereUniqueInput | productsWhereUniqueInput[];
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[];
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[];
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[];
    update?:
      | productsUpdateWithWhereUniqueWithoutBrandsInput
      | productsUpdateWithWhereUniqueWithoutBrandsInput[];
    updateMany?:
      | productsUpdateManyWithWhereWithoutBrandsInput
      | productsUpdateManyWithWhereWithoutBrandsInput[];
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;
    connect?: UserWhereUniqueInput;
  };

  export type productsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      productsCreateWithoutCommentsInput,
      productsUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: productsCreateOrConnectWithoutCommentsInput;
    connect?: productsWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;
    upsert?: UserUpsertWithoutCommentsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCommentsInput,
        UserUpdateWithoutCommentsInput
      >,
      UserUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type productsUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<
      productsCreateWithoutCommentsInput,
      productsUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: productsCreateOrConnectWithoutCommentsInput;
    upsert?: productsUpsertWithoutCommentsInput;
    disconnect?: boolean;
    delete?: productsWhereInput | boolean;
    connect?: productsWhereUniqueInput;
    update?: XOR<
      XOR<
        productsUpdateToOneWithWhereWithoutCommentsInput,
        productsUpdateWithoutCommentsInput
      >,
      productsUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
    unset?: boolean;
  };

  export type CommentsCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          CommentsCreateWithoutAuthorInput,
          CommentsUncheckedCreateWithoutAuthorInput
        >
      | CommentsCreateWithoutAuthorInput[]
      | CommentsUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentsCreateOrConnectWithoutAuthorInput
      | CommentsCreateOrConnectWithoutAuthorInput[];
    createMany?: CommentsCreateManyAuthorInputEnvelope;
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
  };

  export type CommentsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          CommentsCreateWithoutAuthorInput,
          CommentsUncheckedCreateWithoutAuthorInput
        >
      | CommentsCreateWithoutAuthorInput[]
      | CommentsUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentsCreateOrConnectWithoutAuthorInput
      | CommentsCreateOrConnectWithoutAuthorInput[];
    createMany?: CommentsCreateManyAuthorInputEnvelope;
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
  };

  export type CommentsUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          CommentsCreateWithoutAuthorInput,
          CommentsUncheckedCreateWithoutAuthorInput
        >
      | CommentsCreateWithoutAuthorInput[]
      | CommentsUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentsCreateOrConnectWithoutAuthorInput
      | CommentsCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | CommentsUpsertWithWhereUniqueWithoutAuthorInput
      | CommentsUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: CommentsCreateManyAuthorInputEnvelope;
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    update?:
      | CommentsUpdateWithWhereUniqueWithoutAuthorInput
      | CommentsUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | CommentsUpdateManyWithWhereWithoutAuthorInput
      | CommentsUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[];
  };

  export type CommentsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          CommentsCreateWithoutAuthorInput,
          CommentsUncheckedCreateWithoutAuthorInput
        >
      | CommentsCreateWithoutAuthorInput[]
      | CommentsUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentsCreateOrConnectWithoutAuthorInput
      | CommentsCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | CommentsUpsertWithWhereUniqueWithoutAuthorInput
      | CommentsUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: CommentsCreateManyAuthorInputEnvelope;
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[];
    update?:
      | CommentsUpdateWithWhereUniqueWithoutAuthorInput
      | CommentsUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | CommentsUpdateManyWithWhereWithoutAuthorInput
      | CommentsUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[];
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type InfoWhereInput = {
    AND?: InfoWhereInput | InfoWhereInput[];
    OR?: InfoWhereInput[];
    NOT?: InfoWhereInput | InfoWhereInput[];
    weight?: StringFilter<"Info"> | string;
    color?: StringFilter<"Info"> | string;
  };

  export type Cpu_InfoWhereInput = {
    AND?: Cpu_InfoWhereInput | Cpu_InfoWhereInput[];
    OR?: Cpu_InfoWhereInput[];
    NOT?: Cpu_InfoWhereInput | Cpu_InfoWhereInput[];
    model?: StringFilter<"Cpu_Info"> | string;
    cores?: IntFilter<"Cpu_Info"> | number;
    threads?: IntFilter<"Cpu_Info"> | number;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
  };

  export type CommentsCreateWithoutProductsInput = {
    id?: string;
    title: string;
    description: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    author: UserCreateNestedOneWithoutCommentsInput;
  };

  export type CommentsUncheckedCreateWithoutProductsInput = {
    id?: string;
    title: string;
    description: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    author_id: string;
  };

  export type CommentsCreateOrConnectWithoutProductsInput = {
    where: CommentsWhereUniqueInput;
    create: XOR<
      CommentsCreateWithoutProductsInput,
      CommentsUncheckedCreateWithoutProductsInput
    >;
  };

  export type CommentsCreateManyProductsInputEnvelope = {
    data: CommentsCreateManyProductsInput | CommentsCreateManyProductsInput[];
  };

  export type BrandsCreateWithoutProductsInput = {
    id?: string;
    name: string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type BrandsUncheckedCreateWithoutProductsInput = {
    id?: string;
    name: string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type BrandsCreateOrConnectWithoutProductsInput = {
    where: BrandsWhereUniqueInput;
    create: XOR<
      BrandsCreateWithoutProductsInput,
      BrandsUncheckedCreateWithoutProductsInput
    >;
  };

  export type CategoryCreateWithoutProductsInput = {
    id?: string;
    name: string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string;
    name: string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutProductsInput,
      CategoryUncheckedCreateWithoutProductsInput
    >;
  };

  export type InfoUpdateInput = {
    weight?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
  };

  export type Cpu_InfoUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string;
    cores?: IntFieldUpdateOperationsInput | number;
    threads?: IntFieldUpdateOperationsInput | number;
  };

  export type CommentsUpsertWithWhereUniqueWithoutProductsInput = {
    where: CommentsWhereUniqueInput;
    update: XOR<
      CommentsUpdateWithoutProductsInput,
      CommentsUncheckedUpdateWithoutProductsInput
    >;
    create: XOR<
      CommentsCreateWithoutProductsInput,
      CommentsUncheckedCreateWithoutProductsInput
    >;
  };

  export type CommentsUpdateWithWhereUniqueWithoutProductsInput = {
    where: CommentsWhereUniqueInput;
    data: XOR<
      CommentsUpdateWithoutProductsInput,
      CommentsUncheckedUpdateWithoutProductsInput
    >;
  };

  export type CommentsUpdateManyWithWhereWithoutProductsInput = {
    where: CommentsScalarWhereInput;
    data: XOR<
      CommentsUpdateManyMutationInput,
      CommentsUncheckedUpdateManyWithoutProductsInput
    >;
  };

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[];
    OR?: CommentsScalarWhereInput[];
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[];
    id?: StringFilter<"Comments"> | string;
    title?: StringFilter<"Comments"> | string;
    description?: StringFilter<"Comments"> | string;
    rating?: FloatFilter<"Comments"> | number;
    created_at?: DateTimeFilter<"Comments"> | Date | string;
    updated_at?: DateTimeFilter<"Comments"> | Date | string;
    author_id?: StringFilter<"Comments"> | string;
    comment_id?: StringNullableFilter<"Comments"> | string | null;
  };

  export type BrandsUpsertWithoutProductsInput = {
    update: XOR<
      BrandsUpdateWithoutProductsInput,
      BrandsUncheckedUpdateWithoutProductsInput
    >;
    create: XOR<
      BrandsCreateWithoutProductsInput,
      BrandsUncheckedCreateWithoutProductsInput
    >;
    where?: BrandsWhereInput;
  };

  export type BrandsUpdateToOneWithWhereWithoutProductsInput = {
    where?: BrandsWhereInput;
    data: XOR<
      BrandsUpdateWithoutProductsInput,
      BrandsUncheckedUpdateWithoutProductsInput
    >;
  };

  export type BrandsUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BrandsUncheckedUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<
      CategoryUpdateWithoutProductsInput,
      CategoryUncheckedUpdateWithoutProductsInput
    >;
    create: XOR<
      CategoryCreateWithoutProductsInput,
      CategoryUncheckedCreateWithoutProductsInput
    >;
    where?: CategoryWhereInput;
  };

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput;
    data: XOR<
      CategoryUpdateWithoutProductsInput,
      CategoryUncheckedUpdateWithoutProductsInput
    >;
  };

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type productsCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    description: string;
    slug: string;
    price: number;
    discount: number;
    info: XOR<InfoCreateEnvelopeInput, InfoCreateInput>;
    cpu_info: XOR<Cpu_InfoCreateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: number;
    quantity?: number;
    rating: number;
    images?: productsCreateimagesInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentsCreateNestedManyWithoutProductsInput;
    brands?: BrandsCreateNestedOneWithoutProductsInput;
  };

  export type productsUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    description: string;
    slug: string;
    price: number;
    discount: number;
    info: XOR<InfoCreateEnvelopeInput, InfoCreateInput>;
    cpu_info: XOR<Cpu_InfoCreateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: number;
    quantity?: number;
    rating: number;
    brandId: string;
    images?: productsCreateimagesInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentsUncheckedCreateNestedManyWithoutProductsInput;
  };

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput;
    create: XOR<
      productsCreateWithoutCategoriesInput,
      productsUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type productsCreateManyCategoriesInputEnvelope = {
    data:
      | productsCreateManyCategoriesInput
      | productsCreateManyCategoriesInput[];
  };

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput;
    update: XOR<
      productsUpdateWithoutCategoriesInput,
      productsUncheckedUpdateWithoutCategoriesInput
    >;
    create: XOR<
      productsCreateWithoutCategoriesInput,
      productsUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput;
    data: XOR<
      productsUpdateWithoutCategoriesInput,
      productsUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput;
    data: XOR<
      productsUpdateManyMutationInput,
      productsUncheckedUpdateManyWithoutCategoriesInput
    >;
  };

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[];
    OR?: productsScalarWhereInput[];
    NOT?: productsScalarWhereInput | productsScalarWhereInput[];
    id?: StringFilter<"products"> | string;
    name?: StringFilter<"products"> | string;
    description?: StringFilter<"products"> | string;
    slug?: StringFilter<"products"> | string;
    price?: FloatFilter<"products"> | number;
    discount?: FloatFilter<"products"> | number;
    in_stock?: IntFilter<"products"> | number;
    quantity?: IntFilter<"products"> | number;
    rating?: FloatFilter<"products"> | number;
    brandId?: StringFilter<"products"> | string;
    categoryId?: StringFilter<"products"> | string;
    images?: StringNullableListFilter<"products">;
    created_at?: DateTimeFilter<"products"> | Date | string;
    updated_at?: DateTimeFilter<"products"> | Date | string;
  };

  export type productsCreateWithoutBrandsInput = {
    id?: string;
    name: string;
    description: string;
    slug: string;
    price: number;
    discount: number;
    info: XOR<InfoCreateEnvelopeInput, InfoCreateInput>;
    cpu_info: XOR<Cpu_InfoCreateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: number;
    quantity?: number;
    rating: number;
    images?: productsCreateimagesInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentsCreateNestedManyWithoutProductsInput;
    categories?: CategoryCreateNestedOneWithoutProductsInput;
  };

  export type productsUncheckedCreateWithoutBrandsInput = {
    id?: string;
    name: string;
    description: string;
    slug: string;
    price: number;
    discount: number;
    info: XOR<InfoCreateEnvelopeInput, InfoCreateInput>;
    cpu_info: XOR<Cpu_InfoCreateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: number;
    quantity?: number;
    rating: number;
    categoryId: string;
    images?: productsCreateimagesInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentsUncheckedCreateNestedManyWithoutProductsInput;
  };

  export type productsCreateOrConnectWithoutBrandsInput = {
    where: productsWhereUniqueInput;
    create: XOR<
      productsCreateWithoutBrandsInput,
      productsUncheckedCreateWithoutBrandsInput
    >;
  };

  export type productsCreateManyBrandsInputEnvelope = {
    data: productsCreateManyBrandsInput | productsCreateManyBrandsInput[];
  };

  export type productsUpsertWithWhereUniqueWithoutBrandsInput = {
    where: productsWhereUniqueInput;
    update: XOR<
      productsUpdateWithoutBrandsInput,
      productsUncheckedUpdateWithoutBrandsInput
    >;
    create: XOR<
      productsCreateWithoutBrandsInput,
      productsUncheckedCreateWithoutBrandsInput
    >;
  };

  export type productsUpdateWithWhereUniqueWithoutBrandsInput = {
    where: productsWhereUniqueInput;
    data: XOR<
      productsUpdateWithoutBrandsInput,
      productsUncheckedUpdateWithoutBrandsInput
    >;
  };

  export type productsUpdateManyWithWhereWithoutBrandsInput = {
    where: productsScalarWhereInput;
    data: XOR<
      productsUpdateManyMutationInput,
      productsUncheckedUpdateManyWithoutBrandsInput
    >;
  };

  export type UserCreateWithoutCommentsInput = {
    id?: string;
    email: string;
    name: string;
    password: string;
  };

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string;
    email: string;
    name: string;
    password: string;
  };

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
  };

  export type productsCreateWithoutCommentsInput = {
    id?: string;
    name: string;
    description: string;
    slug: string;
    price: number;
    discount: number;
    info: XOR<InfoCreateEnvelopeInput, InfoCreateInput>;
    cpu_info: XOR<Cpu_InfoCreateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: number;
    quantity?: number;
    rating: number;
    images?: productsCreateimagesInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    brands?: BrandsCreateNestedOneWithoutProductsInput;
    categories?: CategoryCreateNestedOneWithoutProductsInput;
  };

  export type productsUncheckedCreateWithoutCommentsInput = {
    id?: string;
    name: string;
    description: string;
    slug: string;
    price: number;
    discount: number;
    info: XOR<InfoCreateEnvelopeInput, InfoCreateInput>;
    cpu_info: XOR<Cpu_InfoCreateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: number;
    quantity?: number;
    rating: number;
    brandId: string;
    categoryId: string;
    images?: productsCreateimagesInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type productsCreateOrConnectWithoutCommentsInput = {
    where: productsWhereUniqueInput;
    create: XOR<
      productsCreateWithoutCommentsInput,
      productsUncheckedCreateWithoutCommentsInput
    >;
  };

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<
      UserUpdateWithoutCommentsInput,
      UserUncheckedUpdateWithoutCommentsInput
    >;
    create: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCommentsInput,
      UserUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type UserUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
  };

  export type UserUncheckedUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
  };

  export type productsUpsertWithoutCommentsInput = {
    update: XOR<
      productsUpdateWithoutCommentsInput,
      productsUncheckedUpdateWithoutCommentsInput
    >;
    create: XOR<
      productsCreateWithoutCommentsInput,
      productsUncheckedCreateWithoutCommentsInput
    >;
    where?: productsWhereInput;
  };

  export type productsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: productsWhereInput;
    data: XOR<
      productsUpdateWithoutCommentsInput,
      productsUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type productsUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    discount?: FloatFieldUpdateOperationsInput | number;
    info?: XOR<InfoUpdateEnvelopeInput, InfoCreateInput>;
    cpu_info?: XOR<Cpu_InfoUpdateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    images?: productsUpdateimagesInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    brands?: BrandsUpdateOneWithoutProductsNestedInput;
    categories?: CategoryUpdateOneWithoutProductsNestedInput;
  };

  export type productsUncheckedUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    discount?: FloatFieldUpdateOperationsInput | number;
    info?: XOR<InfoUpdateEnvelopeInput, InfoCreateInput>;
    cpu_info?: XOR<Cpu_InfoUpdateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    brandId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    images?: productsUpdateimagesInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentsCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    description: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    products?: productsCreateNestedOneWithoutCommentsInput;
  };

  export type CommentsUncheckedCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    description: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    comment_id?: string | null;
  };

  export type CommentsCreateOrConnectWithoutAuthorInput = {
    where: CommentsWhereUniqueInput;
    create: XOR<
      CommentsCreateWithoutAuthorInput,
      CommentsUncheckedCreateWithoutAuthorInput
    >;
  };

  export type CommentsCreateManyAuthorInputEnvelope = {
    data: CommentsCreateManyAuthorInput | CommentsCreateManyAuthorInput[];
  };

  export type CommentsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentsWhereUniqueInput;
    update: XOR<
      CommentsUpdateWithoutAuthorInput,
      CommentsUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      CommentsCreateWithoutAuthorInput,
      CommentsUncheckedCreateWithoutAuthorInput
    >;
  };

  export type CommentsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentsWhereUniqueInput;
    data: XOR<
      CommentsUpdateWithoutAuthorInput,
      CommentsUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type CommentsUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentsScalarWhereInput;
    data: XOR<
      CommentsUpdateManyMutationInput,
      CommentsUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type CommentsCreateManyProductsInput = {
    id?: string;
    title: string;
    description: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    author_id: string;
  };

  export type CommentsUpdateWithoutProductsInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput;
  };

  export type CommentsUncheckedUpdateWithoutProductsInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    author_id?: StringFieldUpdateOperationsInput | string;
  };

  export type CommentsUncheckedUpdateManyWithoutProductsInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    author_id?: StringFieldUpdateOperationsInput | string;
  };

  export type productsCreateManyCategoriesInput = {
    id?: string;
    name: string;
    description: string;
    slug: string;
    price: number;
    discount: number;
    info: XOR<InfoCreateEnvelopeInput, InfoCreateInput>;
    cpu_info: XOR<Cpu_InfoCreateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: number;
    quantity?: number;
    rating: number;
    brandId: string;
    images?: productsCreateimagesInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type productsUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    discount?: FloatFieldUpdateOperationsInput | number;
    info?: XOR<InfoUpdateEnvelopeInput, InfoCreateInput>;
    cpu_info?: XOR<Cpu_InfoUpdateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    images?: productsUpdateimagesInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentsUpdateManyWithoutProductsNestedInput;
    brands?: BrandsUpdateOneWithoutProductsNestedInput;
  };

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    discount?: FloatFieldUpdateOperationsInput | number;
    info?: XOR<InfoUpdateEnvelopeInput, InfoCreateInput>;
    cpu_info?: XOR<Cpu_InfoUpdateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    brandId?: StringFieldUpdateOperationsInput | string;
    images?: productsUpdateimagesInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentsUncheckedUpdateManyWithoutProductsNestedInput;
  };

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    discount?: FloatFieldUpdateOperationsInput | number;
    info?: XOR<InfoUpdateEnvelopeInput, InfoCreateInput>;
    cpu_info?: XOR<Cpu_InfoUpdateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    brandId?: StringFieldUpdateOperationsInput | string;
    images?: productsUpdateimagesInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type productsCreateManyBrandsInput = {
    id?: string;
    name: string;
    description: string;
    slug: string;
    price: number;
    discount: number;
    info: XOR<InfoCreateEnvelopeInput, InfoCreateInput>;
    cpu_info: XOR<Cpu_InfoCreateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: number;
    quantity?: number;
    rating: number;
    categoryId: string;
    images?: productsCreateimagesInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type productsUpdateWithoutBrandsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    discount?: FloatFieldUpdateOperationsInput | number;
    info?: XOR<InfoUpdateEnvelopeInput, InfoCreateInput>;
    cpu_info?: XOR<Cpu_InfoUpdateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    images?: productsUpdateimagesInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentsUpdateManyWithoutProductsNestedInput;
    categories?: CategoryUpdateOneWithoutProductsNestedInput;
  };

  export type productsUncheckedUpdateWithoutBrandsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    discount?: FloatFieldUpdateOperationsInput | number;
    info?: XOR<InfoUpdateEnvelopeInput, InfoCreateInput>;
    cpu_info?: XOR<Cpu_InfoUpdateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    categoryId?: StringFieldUpdateOperationsInput | string;
    images?: productsUpdateimagesInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentsUncheckedUpdateManyWithoutProductsNestedInput;
  };

  export type productsUncheckedUpdateManyWithoutBrandsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    discount?: FloatFieldUpdateOperationsInput | number;
    info?: XOR<InfoUpdateEnvelopeInput, InfoCreateInput>;
    cpu_info?: XOR<Cpu_InfoUpdateEnvelopeInput, Cpu_InfoCreateInput>;
    in_stock?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    categoryId?: StringFieldUpdateOperationsInput | string;
    images?: productsUpdateimagesInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentsCreateManyAuthorInput = {
    id?: string;
    title: string;
    description: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    comment_id?: string | null;
  };

  export type CommentsUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: productsUpdateOneWithoutCommentsNestedInput;
  };

  export type CommentsUncheckedUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CommentsUncheckedUpdateManyWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
