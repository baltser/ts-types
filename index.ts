type Foot = number;
type Pound = number;

type Patient = {
    name: string;
    height?: Foot;
    weight: Pound;
}

let patient: Patient = {
    name: 'Anton',
    // height: 5,
    weight: 100
}
console.log("working")

class Person {
constructor( 
public firstName: string,
public lastName: string,
public age: number,
  ){}
}

// const p = new Person("anton", "baton", 34);
// p.age = 32
// console.log(p.age)

class Block {
  readonly nonce: number;
  readonly hash: string;

  constructor (
    readonly index: number,
    readonly previousHash: string,
    readonly timestamp: number,

    readonly date: string
  ) {
    // const { nonce, hash } = this.mine()
    // this.nonce = nonce;
    // this.hash = hash;
  }
}
/*******************************************/ 
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function savePerson (person: Person) : void {
  console.log('Saving ', person);
}
const p: Person = { 
  firstName: 'Anton',
  lastName: 'baton',
  age: 32
}
savePerson(p);
/*******************************************/ 
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Rectangle | Circle;
// interface A { a: number };
// interface B { b: string }

// function foo(x: A  | B){
//   if( "a" in x ){
//     return x.a;
//   }
//   return x.b;
// }
function area( shape: Shape ): number {
  switch(shape.kind) {
    case "rectangle": return shape.height * shape.width;
    case "circle": return Math.PI * shape.radius ** 2;
  }
}

const myRectangle: Rectangle = {kind: "rectangle", width: 10, height: 20}
console.log(`Rectangle's area is ${area(myRectangle)}`)

const myCircle: Circle = { kind: "circle", radius: 10 };
console.log(`Cercle's area is ${area(myCircle)}`);