import { Flight, ScheduledFlight, CharteFlight } from "./flight";

//folngedes Beispiel zeigt den Austauch von Objekten
let f: Flight = new ScheduledFlight();
f.distance = 1000;
if (f.calcPrice){
    console.debug('Preis', f.calcPrice());
}

f = new CharteFlight(1);
f.distance = 1000;
if (f.calcPrice){
    console.debug('Preis', f.calcPrice());
}

//Bespiel für Getter und Setter
let nextFlight = new ScheduledFlight();
nextFlight.date = "2018-12-24";
console.debug('unix-date:', nextFlight.unixDate);
nextFlight.unixDate = 1000;
console.debug('unix-date:', nextFlight.date);