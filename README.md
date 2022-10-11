# TS-Nomad
 노마드코더 TS 


### 타입스크립트는 강타입 프로그래밍 언어로 코드를 실행하기 전에 오류를 알려준다.

타입스크립트에서 타입을 정의해주는 방법은 크게 두 가지가 있다.

1. 데이터와 변수의 타입을 명시적으로 정의
```TS
const arr:string = ""

```
2. 데이터와 변수의 타입이 추론되어 자동으로 정의됨
```TS
const arr ="" //=>string으로 자동인식
```
*명시적 정의는 적을수록 좋다*
Type을 설명할 때 기본은 : 로 설명한다.

```TS
const :{name:string, age:number}   ={
name:"sangha"
age:26
}
```

type을 지정하는 방법 중 Alias 가 있다.

```TS
type CanCan{
name:string,
age?:number//?를 붙이면 number|undefined로 정의된다. 즉 없을 수 도 있다는 말


const wow : CanCan= { //이렇게 타입을 정의해주는 방법이 Alias
name:"sangha",
age:26

}

}
```

타입앞에 readonly를 붙여주면 수정이 안되게 해준다.
```TS
const arr:readonly number[] =[1,2,3]

arr.push(4) //이러면 오류가 남 readonly를 붙여줘서 수정이 불가능하기 때문이다.
```

## any

이는 비어있는 값을 쓰면 주로 나온다. 타입스크립트를 벗어나고 싶을 때 쓰면 된다.
자주쓰는것은 지양해야한다.

## unknown , void , never

### unknown 
unknown은 TS의 보호를 받는다. 
```TS
let a: unknown; //TS의 보호를받음 => 어떤 작업을 하려면 이 변수의 타입을 먼저 확인해야함
let b = a + 1;
if (typeof a === "number") {
  let b = a + 1;
} //타입에 따른 결과가 다를때 이렇게 사용

```
이렇게 unknown은 아직 타입에 대한 정보를 확신할 수 없을때 사용하면된다.

### void

void는 아무것도 return 하지않는함수에 쓰인다.
```TS
function hello(): void {
  console.log("x");
}
const c = hello();

//만약
c.toUpperCase()//오류발생

```
return 값이 없기 때문이다.(void)

## never
never은 함수가 절대 return 하지 않을 때 발생한다.
```TS
function EEE(): never {
  throw new Error("오류!");
}
//이렇게 절대 return 값이 없을 때 사용

```
 ## call signature
 함수에서 타입을 분리할 수 있게해준다.
 ```TS
 type ADD = (a: number, b: number) => number;//이게 call signature
 //이를 call signuture라고한다. 분리가가능!
const add: ADD = (a, b) => a + b;
//원래
 const add=(a:string,b:string)=>{console.log("asd"}
 ```
 ## overloading 
 이는 call signature가 2개 이상일 때이다.
 
 ```TS
 type Call={
 (a:string,b:string):string
 (a:number,b:number):number
 }//이처럼 call signature가 2개 이상 사용될 때 overloading 이라한다.
```
 ## 다형성(polymorphism)
 인자의 타입이 다양한 형태를 가질때
Generic타입!
 
```TS
type SuperPrint = {
  <Placeholder>(arr: Placeholder[]): void;
};
const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};
superPrint([1, 2, 3, 4]);//이렇게하면 함수 안의 인자에 따라 arr의 타입이 변경된다.
   //any와 다른점은 인자의 타입에 대한 정보를 잃지 않는다는 점이다.
```

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
## interface
type과 거의 비슷하다 , 다른점: 오브젝트형태의 타입만을 설명할 수 있다.
```TS
type Team={
name:string,
age:number
}//이것두되고

type Team2 ={
name:"sangha"|"haha",
age:12|23
}
//이렇게 값을 제한할수도있다.

//interface
interface Team{
name:string,
age:number
}

```
인터페이스틑 오브젝트의 타입을 설명할 때 사용한다고 보면된다. 또 인터페이스는 상속이 가능하다.

```TS
interface User {
  name: string;
}

interface User2 extends User {}
//상속이가능하다
const nicoo: User2 = {
  name: "nico",
};
```
