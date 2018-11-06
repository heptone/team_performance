import { ApiService } from './../service/apiservice';
import { Performer } from './performer';
import { autoinject } from 'aurelia-dependency-injection';

@autoinject
export class Performers {
    apiService: ApiService;
    performers: Performer[];


    heading = 'Performers';
    constructor(apiService : ApiService){
      this.apiService = apiService
    }

    activate(){
      this.createPerformers();
    }
  
    async createPerformers(){
        let list: Performer[] = [];
        var k = await this.apiService.getPlayers();
        var arr = eval('(' + k + ')');
        this.performers = this.shuffle(arr);
        console.log(this.performers);
    }
    private shuffle(array) : [] {
        let counter = array.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
    
        return array;
    }
  }
