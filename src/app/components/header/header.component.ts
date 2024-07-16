import { Component } from '@angular/core';
import { DanceApiService } from 'src/app/services/dance-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor( private danceApiServcie:DanceApiService){

    }
    
    randomDance(){
      this.danceApiServcie.getRandomDance().subscribe(temp => {
        this.danceApiServcie.setActiveDance(temp)
      });
    }



}
