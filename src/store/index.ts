import { storeKey } from "vuex";

// interface Image extends ImageEle
// type Element =
// type A = 1
// type B = 2
// type reault = A extends B ? true : false
// type A = [1, 2, 3]
// type result = A extends [infer first, ...infer other] ? 1 : false

// interface Fish {
//     fish: string
// }
// interface Water {
//     water: string
// }
// interface Bird {
//     bird: string
// }
// interface Sky {
//     sky: string
// }
// //naked type
// type Condition<T> = T extends Fish ? Water : Sky;

// let condition1: Condition<Fish | Bird> = { water: '水' };
// let condition2: Condition<Fish | Bird> = { sky: '天空' };

// type Diff<T, U> = T extends U ? never : T;

// type R = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"

// type Filter<T, U> = T extends U ? T : never;
// type R1 = Filter<string | number | boolean, number>;

// type Parameters<T> = T extends (...args: infer R) => any ? R : any;
// type T0 = Parameters<() => string>;  // []
// type T1 = Parameters<(s: string) => void>;  // [string]
// type T2 = Parameters<(<T>(arg: T) => T)>;  // [unknown]

// type T1 = { name: string };
// type T2 = { age: number };

// type UnionToInterp<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void } ? U : never;
// type T3 = UnionToInterp<{ a: (x: T1) => void; b: (x: T2) => void }>; // T1 & T2

interface Action<T> {
  payload?: T;
  type: string;
}

class EffectModule {
  count = 1;
  message = "hello!";

  delay(input: Promise<number>) {
    return input.then((i) => ({
      payload: `hello ${i}!`,
      type: "delay",
    }));
  }

  setMessage(action: Action<Date>) {
    return {
      payload: action.payload!.getMilliseconds(),
      type: "set-message",
    };
  }
}

// 修改 Connect 的类型，让 connected 的类型变成预期的类型
// type Connect = (module: EffectModule) => any;

const connect: Connect = (m) => ({
  delay: (input: number) => ({
    type: "delay",
    payload: `hello 2`,
  }),
  setMessage: (input: Date) => ({
    type: "set-message",
    payload: input.getMilliseconds(),
  }),
});

type Connected = {
  delay(input: number): Action<string>;
  setMessage(action: Date): Action<number>;
};

export const connected: Connected = connect(new EffectModule());

type MethodName<T> = {
  [F in keyof T]: T[F] extends Function ? F : never;
}[keyof T];
type EE = MethodName<EffectModule>;

type asyncMethod<T, U> = (input: Promise<T>) => Promise<Action<U>>;
type asyncMethodConnect<T, U> = (input: T) => Action<U>;
type syncMethod<T, U> = (action: Action<T>) => Action<U>;
type syncMethodConnect<T, U> = (action: T) => Action<U>;
type EffectMethodAssign<T> = T extends asyncMethod<infer U, infer V>
  ? asyncMethodConnect<U, V>
  : T extends syncMethod<infer U, infer V> 
  ? syncMethodConnect<U, V>
  : never;
type Connect = (module: EffectModule) => {
  [F in MethodName<typeof module>]: EffectMethodAssign<typeof module[F]>;
};

// type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
//   T1
// >() => T1 extends B ? 1 : 2
//   ? true
//   : false
// type IsEqual<A, B> = A extends B ? true : false
// type a = IsEqual<Array<string>, Object>
// type test<U> = <T>() => T extends U ? 1 : 2
// type b = test<string>
// ===
// ==
type Test1<A> =  <T>() => (T extends A ? 1 : 2)
type Test3<A, B> = Test1<A> extends Test1<B> ? true : false
type Test4 = Test3<Array<number>, Array<string>>
const value: Test4 = false
type Test6<T> =  <T>() => T
// let func1: Test6<string> = (): string => '1'
// type Test5 = Test1<string>
// const value2: Test5 = 1