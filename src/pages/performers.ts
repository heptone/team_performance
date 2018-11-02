import { Performer } from './performer';
import { autoinject } from 'aurelia-dependency-injection';

@autoinject
export class Performers {
    performers: Performer[];

    heading = 'Performers';
    constructor(){
        this.performers = this.createPerformers();
    }
  
    public createPerformers() : Performer[]{
        let list: Performer[] = [];

        var i: number;
        for (i = 0; i < 5; i++){
        let per: Performer = {name: 'heptone' + i.toString(), description: 'Dummybeskrivning ...............hello', position: 'everywhere', shirtNumber: '13', goals: '13', goalInLife: 'Livin the dream', yearsPerforming: '10'};
        list.push(per);
        }
        list = this.shuffle(list);

        return list;
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