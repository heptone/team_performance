import { autoinject } from 'aurelia-dependency-injection';
import { HttpClient } from "aurelia-http-client";


@autoinject
export class GetData {
    baseUrl: string;
    httpClient: HttpClient;
    constructor(httpClient: HttpClient){
      this.httpClient = httpClient;
    }
    getAll(url: string) : any{
      this.baseUrl = url;
      return this.httpClient.get("../data/games.json").then(response => { return response.content });
  }

  getBodyPart(id, url: string) : any {
    this.baseUrl = url;
      return this.httpClient.get(this.baseUrl).then(response => {
          return response.content.filter(n => n.id == id);
      });
  }
}
