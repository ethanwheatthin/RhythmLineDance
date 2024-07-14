import { Component, OnInit } from '@angular/core';
import { DanceApiService } from '../../../services/dance-api.service'; 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items: any[] | undefined;
  selectedItem: any;
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
}
