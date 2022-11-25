//import { Component, OnInit } from "@angular/core";
export abstract class AbstractAddress {
    id: number;
    street: string;
    zipCode: string;
    city: string;

    constructor(id: number){
        this.id = id;
    }

    fullAddress(){
        return this.street + ", " + this.zipCode + " " + this.city;
    }

    abstract toCSV(): string;
}

export class CompanyAddress extends AbstractAddress {
    companyName: string;

    toCSV() {
        return `${this.id};${this.companyName};${this.street};${this.zipCode};${this.city}`;
    }
}

export class PrivateAddress extends AbstractAddress{
    firstName: string;
    lastName: string;

    constructor(){
        super(0);
    }

    override fullAddress(): string {
        return this.firstName + " " + this.lastName + ", " + super.fullAddress();
    }

    toCSV(): string {
        return `${this.id};${this.firstName};${this.street};${this.zipCode};${this.city}`;
    }
}