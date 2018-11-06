import { autoinject } from 'aurelia-dependency-injection';


@autoinject
export class Game {
    _id: string;
    kickoffTime: string;
    homeTeamName: string;
    homeTeamId: string;
    awayTeamName: string;
    awayTeamId: string;
    homeGoals: number;
    awayGoals: number;
    groupGame: Boolean;
    nameOfGroup: string;
    result: string;
    referat: string;

    constructor(){
    }
}
