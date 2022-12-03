import { Flight } from "./flight";

export class Invoice<T> {
    subject: T;
    price: number;

    toString(){
        let id = '';
        return `${id}: ${this.price}`;
    }
}

export class FlightInvoice<T extends Flight> {
    subject: T;
    amount: number;

    toString() {
        return `Flight ${this.subject.id}: ${this.amount}`;
    }
}