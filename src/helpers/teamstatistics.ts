import { autoinject } from 'aurelia-dependency-injection';


@autoinject
export class TeamStatistics {
    team: string;
    wins: string;
    draws: string;
    loses: string;
    goalsFor: string;
    goalsAgainst: string;
    points: string;

    constructor(
    team: string, wins: string, draws: string, loses: string, goalsFor: string, goalsAgainst: string, points: string){
        this.team = team;
        this.wins = wins;
        this.draws = draws;
        this.loses = loses;
        this.goalsFor = goalsFor;
        this.goalsAgainst = goalsAgainst;
        this.points = points;
    }
}