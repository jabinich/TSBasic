//import { time } from "console";

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

    //Getter and Setter
    get unixDate(){
        return new Date(this.date).getTime();
    }

    set unixDate(time: number){
        let date = new Date(time);
        this.date = date.toISOString();
    }
}

export class CharteFlight implements Flight{
    id: number;
    from: string;
    to: string;
    date: string;
    distance: number;

    constructor(id: number){
        this.id = id;
    }

    calcPrice(){
        return this.distance / 2;
    }
}