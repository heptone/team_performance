import { autoinject } from 'aurelia-dependency-injection';


@autoinject
export class Game {
    time: string;
    home: string;
    away: string;
    goalsHome: string;
    goalsAway: string;

    constructor(time:string, home:string, away:string, goalsHome:string, goalsAway: string){
        this.time = time;
        this.home = home;
        this.away = away;
        this.goalsHome = goalsHome;
        this.goalsAway = goalsAway;
    }
}