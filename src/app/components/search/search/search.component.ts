import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }
  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] | undefined;

  search(event) {
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
}
