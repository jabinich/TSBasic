import { Person, Passenger, Pilot } from "./person";

let person1: Person = new Passenger(1, 'Max', 'Muster', 'registered');

let person2: Person = new Pilot(1, 'Jens', 'Wolkenmeyer', '21000');

let isPerson = person1 instanceof Person; //true
let isPassenger = person1 instanceof Passenger; //true
let isPilot = person1 instanceof Pilot; //false

console.debug('isPerson', isPerson);
console.debug('isPilot', isPilot);
console.debug('isPassenger', isPassenger);
