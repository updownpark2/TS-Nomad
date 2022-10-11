type SUPER = {
  (arr: number[]): void;
  (arr: string[]): void;
};
const A: SUPER = (arr) => {
  arr.forEach((item) => console.log(item));
};

A([1, 2, 3]);
A(["1", "2", "3"]);

//polymorphism(다형성)
type MAN = {
  <Everything>(arr: Everything[]): void;
  //여기에 generic을 사용한다고 알려주는것
};
const B: MAN = (arr) => {
  arr.forEach((item) => console.log(typeof item));
};
B([1, 2, 3, 4, 5]);
B(["asd", "asd", "sadg"]);
B([true, false, true]);
B([12, "123", false]);
//return => number 5번 string 3번 boolean 3번
//call signature를 작성하는데 concrete type을 알 수 없을때
//generic type을 사용한다.
//타입스크립트가 타입을 발견해준다.
type WOMAN = {
  <T>(arr: T[]): T;
};

const C: WOMAN = (arr) => arr[1];
const first = C([1, 2, 3, 4]);
const second = C(["a", "b", "c"]);

console.log(second.toUpperCase());
console.log(first.toUpperCase()); //any를 넣으면 이 오류를 발견하지못한다!

type GO = {
  <T, M>(a: T[], b: M): T;
};

const G: GO = (a, b) => a[2];

type Player<E> = {
  name: string;
  extroinfo: E; //생성할때 정하겠다.
};

const ASD: Player<string> = {
  name: "sangha",
  extroinfo: "12", // 이렇게 생성할 때 타입을 정한다.
};

const FGH: Player<number> = {
  name: "asdasd",
  extroinfo: 12, // 이게 또 가능해진다 그니까 재사용이 좋아진다.
};
//'제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.'
console.log("Asdasd");
