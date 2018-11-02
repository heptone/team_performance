import { autoinject } from 'aurelia-dependency-injection';
import { Game } from '../helpers/games';
import { TeamStatistics } from '../helpers/teamstatistics';
import { PerformerStatistic } from '../helpers/performerStatistic';

@autoinject
export class Performing {

    heading = 'PERFORMING!';
    info = 'You can get a random quote without logging in, but if you do log in you can get a super secret quote!';
    games: Game[];
    groupTable: TeamStatistics[];
    performerTable: PerformerStatistic[];
  
    activate(){
      this.createGames();
      this.createGroupTable();
      this.createPerformerTable();


    }

    public createGames(){
      var games: Game[] = [];

      var i: number = 0;
      for (i = 0; i < 5; i++) {
        var g: Game = new Game("9:00", "TP", "Izun", "5", "0");
        games.push(g);
      }
      this.games = games;
    }

    public createGroupTable(){
      var statistics: TeamStatistics[] = [];

      var i: number = 0;
      for (i = 0; i < 5; i++) {
        var g: TeamStatistics = new TeamStatistics("team performance", "5", "0", "0", "10", "0", "15");
        statistics.push(g);
      }
      this.groupTable = statistics;
    }
    public createPerformerTable(){
      var performerTable: PerformerStatistic[] = [];

      var i: number = 0;
      for (i = 0; i < 5; i++) {
        var g: PerformerStatistic = new PerformerStatistic("HEPHASSOEKE ok", "5", "15", "4", "4", "1", "3");
        performerTable.push(g);
      }
      this.performerTable = performerTable;

    }
  }