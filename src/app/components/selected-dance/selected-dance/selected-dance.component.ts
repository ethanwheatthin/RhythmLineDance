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
  constructor(private danceApiService: DanceApiService){}

  ngOnInit(): void {
    this.danceApiService.getRandomDance().subscribe(resp => {
      this.selectedDance = resp
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
