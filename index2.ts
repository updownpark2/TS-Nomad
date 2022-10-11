type SSS = {
  name: string;
  age: number;
  sex: boolean;
};

const AAA: SSS = {
  name: "sangha",
  age: 12,
  sex: true,
};

type SSA<T> = { name: string; age: number; sex: T };

const AA: SSA<string> = {
  name: "sangha",
  age: 12,
  sex: "string!",
};
//이게 가능해짐 그럼 함수는 ?

function AACC<T>(arr: T) {
  console.log(arr);
}
AACC("asd");
AACC(123); //이렇게 생성시점에서 타입이정해진다.

//interface
type Team = "read" | "blue" | "yellow";
type Health = 1 | 5 | 10;
type Payer = {
  nickname: string;
  team: Team;
  headlth: Health;
};

interface Player2 {
  nickname: string;
  team: Team;
  headlth: Health;
} //type과 거의 비슷하다.
//interface는 한가지의 기능만한다
//바로바로 오브젝트의 모양을 특정!
//오브젝트만 설명가능!!
//타입스크립트에게 오브젝트를 설명하는 두가지방법!
//1. type ppp = {}
//2. interface ppp{}

const nico: Player2 = {
  nickname: "asd",
  team: "read",
  headlth: 1,
};
//type은 아주 다재다능하다

interface User {
  name: string;
}

interface User2 extends User {}
//상속이가능하다
const nicoo: User2 = {
  name: "nico",
};
