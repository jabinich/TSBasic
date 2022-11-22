import { Flight, ScheduledFlight, CharteFlight } from "./flight";

//folngedes Beispiel zeigt den Austauch von Objekten
let f: Flight = new ScheduledFlight();
f.distance = 1000;
if (f.calcPrice){
    console.debug('Preis', f.calcPrice());
}

f = new CharteFlight();
f.distance = 1000;
if (f.calcPrice){
    console.debug('Preis', f.calcPrice());
}