import { CharteFlight } from "./flight";
import { FlightInvoice } from "./invoice";

let charterFlightToCharge = new CharteFlight(1);
charterFlightToCharge.from = 'Graz';
charterFlightToCharge.to = 'Hamburg';
charterFlightToCharge.distance = 3000;

let charterInvoice = new FlightInvoice<CharteFlight>();
charterInvoice.subject = charterFlightToCharge;
charterInvoice.amount = charterFlightToCharge.calcPrice() * 1.50;

console.debug('charterInvoice:', charterInvoice.toString());