import { autoinject } from 'aurelia-dependency-injection';


@autoinject
export class PerformerStatistic {
    performer: string;
    games: string;
    goals: string;
    assists: string;
    tabbar: string;
    utvisningar: string;
    dribblingar: string;

    constructor(performer: string, games: string, goals: string, assists: string, tabbar: string, utvisningar: string, dribblingar: string
){
        this.performer = performer;
        this.games = games;
        this.goals = goals;
        this.assists = assists;
        this.tabbar = tabbar;
        this.utvisningar = utvisningar;
        this.dribblingar = dribblingar;
    }
}