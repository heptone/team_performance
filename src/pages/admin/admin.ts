import { ApiService } from './../../service/apiservice';
import { TeamStatistics } from './../../helpers/teamstatistics';
import { Game } from '../../helpers/games';
import { Performer } from '../performer';
import { autoinject } from 'aurelia-dependency-injection';

@autoinject
export class Admin {
  games: Game[];
  teamStatistics: TeamStatistics[];
  players: Performer[];
  apiService: ApiService;
  homeSelected: TeamStatistics = null;
  awaySelected: TeamStatistics = null;
  gameSelected: Game = null;
  playerSelected: Performer = null;
  gameTime: string;
  groupGame: Boolean = true;
  groupName: string = "c";
  result: string;
  homeGoals: number;
  awayGoals: number;
  createTeamName: string;
  createPlayerName: string;
  gameReferat: string;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  activate() {
    this.getTeams();
    this.getGames();
    this.getPlayers();
  }

  public updateScores() {
    console.log(this.gameSelected);
    this.homeGoals = this.gameSelected.homeGoals;
    this.awayGoals = this.gameSelected.awayGoals;
  }
  async getPlayers(){
    var k = await this.apiService.getPlayers();
    var arr = eval('(' + k + ')');
    this.players = arr;
    console.log(arr);
  }
  async createPlayer(){
    var obj = new Performer();
    obj.name = this.createPlayerName;
    var str = JSON.stringify(obj);
    console.log(str);
    await this.apiService.postPlayer(str);
  }
  async getTeams() {
    var k = await this.apiService.getTeams();
    var arr = eval('(' + k + ')');
    this.teamStatistics = arr;
    console.log(arr);
  }

  async getGames() {
    var k = await this.apiService.getGames();
    var arr = eval('(' + k + ')');
    this.games = arr;
    console.log(arr);
  }
  async updateGameReferat(){
    var obj = new Game();
    obj._id = this.gameSelected._id;
    obj.referat = this.gameReferat;
    var str = JSON.stringify(obj);
    await this.apiService.putGame(obj._id, str);

  }

  async createGame() {
    var obj = new Game();
    obj.homeTeamName = this.homeSelected.name;
    obj.awayTeamName = this.awaySelected.name;
    obj.kickoffTime = this.gameTime;
    obj.homeTeamId = this.homeSelected._id;
    obj.awayTeamId = this.awaySelected._id;
    obj.groupGame = this.groupGame;
    obj.nameOfGroup = this.groupName;
    var jsonString = JSON.stringify(obj);
    console.log(jsonString);
    await this.apiService.postGame(jsonString);
  }
  async gameScore() {
    var obj = new Game();
    obj._id = this.gameSelected._id;
    obj.result = this.result;
    obj.homeGoals = this.homeGoals;
    obj.awayGoals = this.awayGoals;
    obj.referat = this.gameReferat;
    var jsonString = JSON.stringify(obj);
    console.log(jsonString);

    await this.apiService.putGame(obj._id, jsonString);

    if (this.gameSelected.groupGame) {
      this.updateTeamStatistics();
    } else {
      this.updateTeamStatisticsPlayoff();
    }
  }

  async updateTeamStatistics() {

    var home = this.teamStatistics.filter(x => x._id == this.gameSelected.homeTeamId)[0];
    var away = this.teamStatistics.filter(x => x._id == this.gameSelected.awayTeamId)[0];
    home.groupGoalsMade = Number(home.groupGoalsMade) + Number(this.homeGoals);
    home.groupGoalsAgainst =  Number(home.groupGoalsAgainst) + Number(this.awayGoals);

    away.groupGoalsMade = Number(away.groupGoalsMade) + Number(this.awayGoals);
    away.groupGoalsAgainst = Number(away.groupGoalsAgainst) + Number(this.homeGoals);

    home.groupGames = Number(home.groupGames) + 1;
    away.groupGames = Number(away.groupGames) + 1;

    if (this.result === "1") {
      home.groupWins = Number(home.groupWins) + 1;
      home.groupPoints = Number(home.groupPoints) + 3;
      away.groupLosses =  Number(home.groupLosses) + 1;
    } else if (this.result === "X") {
      home.groupDraws = Number(home.groupDraws) + 1;
      home.groupPoints = Number(home.groupPoints) + 1;
      away.groupDraws = Number(away.groupDraws) + 1;
      away.groupPoints = Number(away.groupPoints) + 1;
    } else {
      away.groupPoints = Number(away.groupPoints) + 3;
      away.groupWins = Number(away.groupWins) + 1;
      home.groupLosses = Number(home.groupLosses) + 1;
    }

    console.log(home);
    console.log(away);

    var homeJsonString = JSON.stringify(home);
    //await this.apiService.putTeam(home._id, homeJsonString);
    var awayJsonString = JSON.stringify(away);
    //await this.apiService.putTeam(away._id, awayJsonString);
  }

  async createTeam() {
    var obj = new TeamStatistics();
    obj.name = this.createTeamName;
    var str = JSON.stringify(obj);
    await this.apiService.postTeam(str);
  }
  async deleteTeam() {
    await this.apiService.deleteTeam(this.homeSelected._id);
  }
  async deleteGame() {
    await this.apiService.deleteGame(this.gameSelected._id);
  }

  public isNull(k: number): any {
    return isNaN(k);
    k == null ? true : false;
  }

  async updateTeamStatisticsPlayoff() {

    var home = this.teamStatistics.filter(x => x._id == this.gameSelected.homeTeamId)[0];
    var away = this.teamStatistics.filter(x => x._id == this.gameSelected.awayTeamId)[0];
    home.playoffGoalsMade = Number(home.playoffGoalsMade) + Number(this.homeGoals);
    home.playoffGoalsAgainst = Number(home.playoffGoalsAgainst) + Number(this.awayGoals);
    away.playoffGoalsMade = Number(away.playoffGoalsMade) + Number(this.awayGoals);
    away.playoffGoalsAgainst = Number(away.playoffGoalsAgainst) + Number(this.homeGoals);
    home.playoffGames = Number(home.playoffGames) + 1;
    away.playoffGames = Number(away.playoffGames) + 1;

    if (this.result === "1") {
      home.playoffWins = Number(home.playoffWins) + 1;
      home.playoffPoints = Number(home.playoffPoints) + 3;
      away.playoffLosses = Number(home.playoffLosses) + 1;
    } else if (this.result === "X") {
      home.playoffDraws = Number(home.playoffDraws) + 1;
      home.playoffPoints = Number(home.playoffPoints) + 1;
      away.playoffDraws = Number(away.playoffDraws) + 1;
      away.playoffPoints = Number(away.playoffPoints) + 1;
    } else {
      away.playoffPoints = Number(away.playoffPoints) + 3;
      away.playoffWins = Number(away.playoffWins) + 1;
      home.playoffLosses = Number(home.playoffLosses) + 1;
    }

    console.log(home);
    console.log(away);

    var homeJsonString = JSON.stringify(home);
    await this.apiService.putTeam(home._id, homeJsonString);
    var awayJsonString = JSON.stringify(away);
    await this.apiService.putTeam(away._id, awayJsonString);
  }



}
