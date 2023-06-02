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

/**************типы any  &  unknown ******************************* */
type typePerson = {
    address: string;
}
let person1: any;
person1 = JSON.parse('{"adress": "25 Broadway"}');
console.log(person1.address);

let person2: unknown;
person2 = JSON.parse('{"adress": "25 Broadway"}');
console.log(person2.address) //error

/*первый вариант защиты */
// const isPerson = (object: any): object is typePerson => "address" in object;

/* второй вариант защиты, более безопасный  */
const isPerson = (object: any): object is typePerson => !!object && "address" in object;

if(isPerson(person2)) console.log(person2.address)
else console.log("person2 is not a Person")

/*Более простым решением будет объявить собственное свойво-дискриминатор, которое будет индеитифицировать этот тип как person */
type disPerson = {
  discriminator: 'person';
  address: string
}

const isPerson1 = (object: any): object is disPerson => !!object && object.discriminator === 'person';
if(isPerson1(person2)) console.log(person2.address, 'discriminator')
else console.log("person2 is not a Person", 'discriminator')

/***********************     mini-project      *********************/

class Dog {
readonly  name: string = 'dog';
   sayHello(): string {
    return 'hello!'
  }
}
const dog: Dog = new Dog();

class Fish {
readonly name: string = 'fish';
 dive(howDeep: number): string {
  return "Fish cannot talk, sorry ";
  }
}
const fish: Fish = new Fish();

type Pet = Dog | Fish ;

function talkToPet(pet: Pet): string {
  if(pet.name === 'dog') return dog.sayHello()
  if(pet.name === 'fish') return fish.dive(3)
  else return 'falled'
}

console.log(talkToPet(dog))
console.log(talkToPet(fish))
console.log(talkToPet({}))
/********************мусор*************/
// const isPet = (object: Pet) => { 
//   if(!!object && object.name === 'dog') return dog;
//   else if(!!object && object.name === 'fish') return fish;
//   else return object
// };

// const isFish = (object: any): object is Pet => !!object && object.name === 'fish';

// function talkToPet(pet: Pet): string {
//   console.log(isPet())
  // if(isPet(pet) === 'dog') return dog.sayHello()
  // else if (isPet(pet) === 'fish') return fish.dive(2)
  // else return 'falled'
// }
// console.log(talkToPet(dog))
// console.log(talkToPet(fish))
// console.log(talkToPet())
// // let pet: Pet 
// // console.log(fish.dive())
// const isPet =  (object: any): void => console.log(object)
// isPet(Pet)
// function talkToPet(pet: Pet): void{
//   if(isPet(pet)) console.log(pet, 'discriminator')
//   else console.log("Fish", 'discriminator')
// }
// talkToPet()
