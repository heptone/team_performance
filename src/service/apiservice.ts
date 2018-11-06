import { autoinject } from 'aurelia-dependency-injection';
//import {HttpClient, json} from 'aurelia-fetch-client';
import { HttpClient, responseTypeTransformer } from 'aurelia-http-client';
import {JsonObject, JsonProperty} from "json2typescript";
//import { JSON } from 'json';

let client = new HttpClient()

@autoinject
export class ApiService {

  http: HttpClient;
  constructor(http: HttpClient) {

    http.configure(config => {
      config
        .withBaseUrl('http://localhost:4000/api/')
        /*
        .withDefaults({
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch',
            'Access-Control-Allow-Origin': '*',
          }
        })
        */
        .withInterceptor({
          request(request) {
            //console.log(`Requesting ${request.method} ${request.url}`);
            return request;
          },
          response(response) {
            //console.log(`Received ${response} ${response} ${response}`);
            return response;
          }
        });
    });
    this.http = http;
  }

  public async getGames() : Promise<JSON> {
    let resp = await this.http.get('games')
      .then(response => {
        return response.response;
      });
      //console.log(resp);
        return resp;
  }
  public async postGame(game: string) : Promise<void> {
    this.http = this.http.configure(x => {
      x.withHeader('Content-Type', 'application/json');
      //x.withCredentials(true);
    });
    let resp = await this.http.post('games', game).then(
      response => {
        console.log(response);
    });
    console.log(resp);
  }
  public async putGame(id: string,game: string) : Promise<void> {
    this.http = this.http.configure(x => {
      x.withHeader('Content-Type', 'application/json');
      //x.withCredentials(true);
    });
    let resp = await this.http.put('games/' + id, game).then(
      response => {
        console.log(response);
    });
    console.log(resp);
  }
  public async deleteGame(id: string) : Promise<void> {
    this.http = this.http.configure(x => {
      x.withHeader('Content-Type', 'application/json');
      //x.withCredentials(true);
    });
    let resp = await this.http.delete('games/' + id).then(
      response => {
        console.log(response);
    });
    console.log(resp);
  }
  public async getTeams() : Promise<JSON> {
    let resp = await this.http.get('teams')
      .then(response => {
        return response.response;
      });
      return resp;
  }
  public async postTeam(team: string) : Promise<void> {
    this.http = this.http.configure(x => {
      x.withHeader('Content-Type', 'application/json');
      //x.withCredentials(true);
    });
    let resp = await this.http.post('teams', team).then(
      response => {
        console.log(response);
    });
    console.log(resp);
  }
  public async putTeam(id: string,team: string) : Promise<void> {
    this.http = this.http.configure(x => {
      x.withHeader('Content-Type', 'application/json');
      //x.withCredentials(true);
    });
    let resp = await this.http.put('teams/' + id, team).then(
      response => {
        console.log(response);
    });
    console.log(resp);
  }
  public async deleteTeam(id: string) : Promise<void> {
    this.http = this.http.configure(x => {
      x.withHeader('Content-Type', 'application/json');
      //x.withCredentials(true);
    });
    let resp = await this.http.delete('teams/' + id).then(
      response => {
        console.log(response);
    });
    console.log(resp);
  }

  public async getPlayers() : Promise<JSON> {
    let resp = await this.http.get('players')
      .then(response => {
        return response.response;
      });
      return resp;
  }
  public async postPlayer(player: string) : Promise<void> {
    this.http = this.http.configure(x => {
      x.withHeader('Content-Type', 'application/json');
      //x.withCredentials(true);
    });
    let resp = await this.http.post('players', player).then(
      response => {
        console.log(response);
    });
    console.log(resp);
  }
  public async putPlayer(id: string,player: string) : Promise<void> {
    this.http = this.http.configure(x => {
      x.withHeader('Content-Type', 'application/json');
      //x.withCredentials(true);
    });
    let resp = await this.http.put('players/' + id, player).then(
      response => {
        console.log(response);
    });
    console.log(resp);
  }
  public async deletePlayer(id: string) : Promise<void> {
    this.http = this.http.configure(x => {
      x.withHeader('Content-Type', 'application/json');
      //x.withCredentials(true);
    });
    let resp = await this.http.delete('players/' + id).then(
      response => {
        console.log(response);
    });
    console.log(resp);
  }
}
