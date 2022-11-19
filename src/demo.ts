import { Flight } from './flight'

let f: Flight = {
    id: 1,
    from: 'Graz',
    to: 'Hamburg',
    date: '2018-12-24'
}

f.from = 'GRZ';
f.to = 'HAM';

console.debug('from', f.from);
console.debug('flight', f);