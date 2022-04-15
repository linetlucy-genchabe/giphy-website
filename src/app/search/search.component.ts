import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../search.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm!: string;

  constructor(private searchService:SearchService) { }

  search(searchTerm : string){
    
    if(searchTerm !== ''){
      this.searchService.searchGifs(searchTerm);
      console.log(searchTerm)
    }
    this.searchTerm == ''
  }

  ngOnInit(): void {
  }

}
