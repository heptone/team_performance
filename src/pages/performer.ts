import { autoinject } from 'aurelia-dependency-injection';


@autoinject
export class Performer {
  _id: string;
  name: string;
  description: string;
  position: string;
  shirtNumber: number;
  goalInLife: string;
  yearsPerforming: string;
  imgRel: string;

  games: number;
  goals: number;
  assists: number;
  tabbar: number;
  utvisningar: number;
  dribblingar: number;

  playoffGames: number;
  playoffGoals: number;
  playoffAssists: number;
  playoffTabbar: number;
  playoffUtvisningar: number;
  playoffDribblingar: number;

  constructor(){
  }
}
