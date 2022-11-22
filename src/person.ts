import { last } from "rxjs";

export class Person {
    // id: number;
    // firstName: string;
    // lastName: string;

    // constructor(id: number, firstName: string, lastName: string){
    //     this.id = id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    constructor(
        private id: number, 
        private firstName: string, 
        private lastName: string
    ){}

    fullName(){
        return this.firstName + " " + this.lastName;
    }
}

export class Passenger extends Person{
    constructor(
        id: number, 
        firstName: string, 
        lastName: string,
        passengerStatus: string
    ){
        super(id, firstName, lastName);
    }
}

export class Pilot extends Person{
    constructor(
        id: number, 
        firstName: string, 
        lastName: string,
        licenseNumber: string
    ){
        super(id, firstName, lastName);
    }
}