const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};
const l = last([1, 2, 3]);
const l2 = last<string>(["a", "b", "c"]);
console.log(l);
console.log(l2);

const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y];
};
let v = makeArr(5, 6);
let v2 = makeArr("a", "b");
let v3 = makeArr<string | null, number>("a", 5);
let v4 = makeArr<string | null>("a", 5);
console.log(v);
console.log(v2);
console.log(v3);
console.log(v4);

interface Tab<T> {
  firstName: string;
  lastName: string;
  data: T[];
}
type NumberTab = Tab<number>;
type StringTab = Tab<string>;
const makeFullName = <T extends StringTab>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};
const v5 = makeFullName({
  firstName: "bob",
  lastName: "junior",
  data: ["a", "b", "c"],
  age: 15,
});
console.log(v5);

export {};
