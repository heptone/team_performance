import { autoinject } from 'aurelia-dependency-injection';


@autoinject
export class Performer {
  name: string;
  description: string;
  position: string;
  shirtNumber: string;
  goals: string;
  goalInLife: string;
  yearsPerforming: string;
  
  

  constructor(name:string, description: string, position: string, shirtNumber: string, goals: string, goalInLife: string, yearsPerforming: string){
    this.name = name;
    this.description = description;
    this.position = position;
    this.shirtNumber = shirtNumber;
    this.goals = goals;
    this.goalInLife = goalInLife;
    this.yearsPerforming = yearsPerforming;
  }
}