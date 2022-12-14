import { last } from "rxjs";

export class Person {
    id: number;
    firstName: string;
    lastName: string;

    // constructor(id: number, firstName: string, lastName: string){
    //     this.id = id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    fullName(){
        return this.firstName + " " + this.lastName;
    }
}

export class Passenger extends Person{
    // constructor(
    //     id: number, 
    //     firstName: string, 
    //     lastName: string,
    //     public passengerStatus: string
    // ){
    //     super(id, firstName, lastName);
    // }
    passengerStatus: string;
}

export class Pilot extends Person{

    licenseNumber: string;
}