import { Component, EventEmitter, OnInit } from '@angular/core';
import { DanceApiService } from '../../../services/dance-api.service'; 
import DanceDetails from 'src/app/models/dancedetails.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  selectedDanceEmitter = new EventEmitter<DanceDetails>();
  items: any[] | undefined;
  selectedItem: DanceDetails = null;
  suggestions: any[] | undefined;

  constructor(private danceApiService: DanceApiService) {}

  ngOnInit(): void {
  }

  search(event: any) {
    const query = event.query; 
    this.danceApiService.searchDancesByName(query).subscribe(
      results => {
        this.suggestions = results; // Update suggestions with the search results
      },
      error => {
        console.error('Error fetching search results:', error);
      }
    );
  }

  onDanceSelected(selectedDance){
    this.danceApiService.setActiveDance(selectedDance.value)
    this.selectedDanceEmitter.emit(selectedDance.value)
  }
}
