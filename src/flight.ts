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

    constructor(id:number, from:string, to:string, date:string, distance:number){
        this.id = id;
        this.from = from;
        this.to = to;
        this.date = date;
        this.distance = distance;
    }

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

    constructor(id:number, from:string, to:string, date:string, distance:number){
        this.id = id;
        this.from = from;
        this.to = to;
        this.date = date;
        this.distance = distance;
    }

    calcPrice(){
        return this.distance / 2;
    }
}