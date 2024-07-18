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
    this.fixWidth();
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

  fixWidth(){
    // Select the specific stylesheet
    var stylesheet = document.styleSheets[6];
    var newRule = ".p-autocomplete { eidth: 100%; }";
    stylesheet.insertRule(newRule, stylesheet.cssRules.length);
    console.log(document.styleSheets[6])
  }

  onDanceSelected(selectedDance){
    this.danceApiService.setActiveDance(selectedDance.value)
  }

  clear(){
    this.selectedItem = null;
    this.danceApiService.clearActiveDance()
  }
}
