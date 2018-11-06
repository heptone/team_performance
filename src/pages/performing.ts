import { ApiService } from './../service/apiservice';
import { GetData } from './../helpers/getData';
import { autoinject } from 'aurelia-dependency-injection';
import { Game } from '../helpers/games';
import { TeamStatistics } from '../helpers/teamstatistics';
import { Performer } from './performer';

@autoinject
export class Performing {
    apiService: ApiService;
    heading = 'PERFORMING!';
    info = 'You can get a random quote without logging in, but if you do log in you can get a super secret quote!';
    games: Game[];
    groupTable: TeamStatistics[];
    performerTable: Performer[];
    getData: GetData;

    constructor(data: GetData, apiService: ApiService){
      this.getData = data;
      this.apiService = apiService;
    }
  
    activate(){
      console.log('hej');
      this.createGames();
      this.createGroupTable();
      this.createPerformerTable();


    }

    async createGames(){
      var games: Game[] = [];
      
      var k = await this.apiService.getGames();
      var arr = eval('(' + k + ')');
      this.games = arr;
      console.log(arr);
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
