import { CompanyAddress, PrivateAddress } from "./address";

let a1 = new CompanyAddress(1);
//a1.id = 1;
a1.city = 'Graz';
a1.street = 'Hier';
a1.zipCode = '8010';
a1.companyName = 'Steh & Schau GmbH';

console.debug('a1 as CSV:', a1.toCSV());
console.debug('a1 as full Address:', a1.fullAddress());

let a2 = new PrivateAddress();
a2.city = 'Graz';
a2.street = 'Hier';
a2.zipCode = '8010';
a2.firstName = 'Max';
a2.lastName = 'Musterman';

console.debug('a2 as CSV:', a2.toCSV());
console.debug('a2 as full Address:', a2.fullAddress());