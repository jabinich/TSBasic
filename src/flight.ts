export interface Flight {
    id: number;
    from: string;
    to: string;
    date: string;

    distance?: number;
    calcPrice?(): number;
}

export class ScheduledFlight implements Flight{
    id: number;
    from: string;
    to: string;
    date: string;
    distance: number;

    calcPrice(){
        return this.distance / 3;
    }
}

export class CharteFlight implements Flight{
    id: number;
    from: string;
    to: string;
    date: string;
    distance: number;

    calcPrice(){
        return this.distance / 2;
    }
}