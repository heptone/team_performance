import { ApiService } from './../service/apiservice';
import { GetData } from './../helpers/getData';
import { autoinject } from 'aurelia-dependency-injection';
import { Game } from '../helpers/games';
import { TeamStatistics } from '../helpers/teamstatistics';
import { Performer } from './performer';
import { isNullOrUndefined } from 'util';

@autoinject
export class Performing {
    apiService: ApiService;
    heading = 'PERFORMING!';
    info = 'You can get a random quote without logging in, but if you do log in you can get a super secret quote!';
    games: Game[];
    playOffGames: Game[];
    groupTable: TeamStatistics[];
    performerTable: Performer[];
    getData: GetData;
    showPlayOffBoolean: boolean; 

    constructor(data: GetData, apiService: ApiService){
      this.getData = data;
      this.apiService = apiService;
      this.createGames();
      this.createGroupTable();
      this.createPerformerTable();
    }
  
    activate(){


    }

    showTeam(teamstatistics: TeamStatistics) : boolean{
      return teamstatistics.group == "c" ? true : false;
    }
    showPlayoffs(): boolean {
      return this.showPlayOffBoolean;

    }
    async createGames(){
      var games: Game[] = [];
      
      var k = await this.apiService.getGames();
      var arr = eval('(' + k + ')');
      this.games = arr;

      var updatedGames = new Array();
      var playOff = new Array();

      var i: number;
      for(i = 0; i < this.games.length; i++){
        if (this.games[i].groupGame === true){
          updatedGames.push(this.games[i]);
        } else {
          playOff.push(this.games[i]);
          this.showPlayOffBoolean = true;
        }
      }
      this.games = updatedGames;
      this.playOffGames = playOff;
      console.log(updatedGames);
      console.log(playOff);
    }

    async createGroupTable(){
      var statistics: TeamStatistics[] = [];

      var k = await this.apiService.getTeams();
      var arr = eval('(' + k + ')');
      this.groupTable = arr;
      this.groupTable = this.groupTable.sort((n1,n2) => {
        if (n1.groupPoints < n2.groupPoints) {
          return 1;
        } 
        if (n1.groupPoints > n2.groupPoints) {
          return -1;
        }
        return 0;
      });
      console.log(arr);
      //this.groupTable = statistics;
    }
    async createPerformerTable(){
      var k = await this.apiService.getPlayers();
      var arr = eval('(' + k + ')');
      this.performerTable = arr;
      console.log(this.performerTable);
    }
  }
