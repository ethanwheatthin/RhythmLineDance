import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import DanceDetails from 'src/app/models/dancedetails.model';
import { DanceApiService } from 'src/app/services/dance-api.service';

@Component({
  selector: 'selected-dance',
  templateUrl: './selected-dance.component.html',
  styleUrl: './selected-dance.component.css'
})
export class SelectedDanceComponent implements OnInit, OnChanges {

  selectedDance: DanceDetails = null
  danceSteps: string = null
  constructor(private danceApiService: DanceApiService){}

  ngOnInit(): void {
    this.danceApiService.getRandomDance().subscribe(resp => {
      this.setDance(resp)
    })

    this.danceApiService.getActiveDance().subscribe(resp => {
      this.setDance(resp)
    })
  }

  setDance(resp){
    if(resp != null){
      this.selectedDance = resp
      this.getDanceSteps(this.selectedDance._id, this.selectedDance.DanceID)
    }
  }

  getDanceSteps(_id, DanceID){
    this.danceApiService.getDanceStepsByID(DanceID).subscribe(resp => {
      console.log("🚀 ~ SelectedDanceComponent ~ this.danceApiService.getDanceStepsByID ~ resp:", resp)
      this.danceSteps = resp.dance_steps
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
