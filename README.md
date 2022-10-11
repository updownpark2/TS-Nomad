# TS-Nomad
 노마드코더 TS 
# TS_Study
노마드코더 타입스크립트

 ## 다형성(polymorphism
 ```TS
 type SUPER = {
  (arr: number[]): void;
  (arr: string[]): void;
};//이렇게 타입을 정의하면 SUPER를 재사용하기 힘들 뿐더러 
//다양한 타입의 배열 원소가 들어있을 경우 타입 선언을 하기 힘들다.
const A: SUPER = (arr) => {
  arr.forEach((item) => console.log(item));
};

A([1, 2, 3]);
A(["1", "2", "3"]);
 ```
 그래서 등장한게 Generic type 
## Generic type VS Concrete type
Concrete Type은 string , number, boolean, never, unknown, any 등을 의미한다.
이는 분명하게 명시할 때 사용한다.
Generic Type은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.
```TS
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
B([12, "123", false]);//이렇게 생성될 때 타입이 정의된다.
//return => number 5번 string 3번 boolean 3번
//call signature를 작성하는데 concrete type을 알 수 없을때
//generic type을 사용한다.
//타입스크립트가 타입을 발견해준다.
```
## Generic VS any 
any은 오류로 부터 보호받지 못한다.Generic은 생성 시점에서 변수에 대한 타입이 설정되지만
any는 그렇지않다.
```TS
const C: WOMAN = (arr) => arr[1];
const first = C([1, 2, 3, 4]);
const second = C(["a", "b", "c"]);

console.log(second.toUpperCase());
console.log(first.toUpperCase()); //any를 넣으면 이 오류를 발견하지못한다!
```
## Generic사용

```TS
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
```
