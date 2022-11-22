import { Flight, ScheduledFlight, CharteFlight } from "./flight";

//folngedes Beispiel zeigt den Austauch von Objekten
let f: Flight = new ScheduledFlight(-1, '','', '', 1000);
if (f.calcPrice){
    console.debug('Preis', f.calcPrice());
}

f = new CharteFlight(-1, '','', '', 1000);
if (f.calcPrice){
    console.debug('Preis', f.calcPrice());
}