import { autoinject } from 'aurelia-dependency-injection';


@autoinject
export class TeamStatistics {
    name: string;
    group: string;
    groupWins: number ;
    groupDraws: number ;
    groupLosses: number;
    groupGoalsMade: number ;
    groupGoalsAgainst: number ;
    groupPoints: number ;
    groupGames: number ;
    playoffWins: number ;
    playoffDraws: number ;
    playoffLosses: number;
    playoffGoalsMade: number ;
    playoffGoalsAgainst: number ;
    playoffPoints: number ;
    playoffGames: number ;
    _id: string;

    /*
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
    */
   constructor(){

   }
}
