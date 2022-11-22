import { Person, Passenger, Pilot } from "./person";

let person1: Person = new Passenger();
person1.firstName = 'Max';
person1.lastName = 'Muster';

/* Ein Beispiel für Type Cast */
//let status = person1.passengerStatus; //Error, da person1 mit 'Person' typisiert ist.
let person1AsPassenger = <Passenger>person1;
//let person1AsPassenger = person1 as Passenger; //Alternative Schreibweise
let status = person1AsPassenger.passengerStatus;


let person2: Person = new Pilot();
person2.firstName = 'Jens';
person2.lastName = 'Wolkenmeyer';

let isPerson = person1 instanceof Person; //true
let isPassenger = person1 instanceof Passenger; //true
let isPilot = person1 instanceof Pilot; //false

console.debug('isPerson', isPerson);
console.debug('isPilot', isPilot);
console.debug('isPassenger', isPassenger);
