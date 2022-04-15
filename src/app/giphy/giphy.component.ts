import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  gifs: any;
  searchService: any;

  constructor(gifsService:GifsService, searchService:SearchService) { 
    this.gifs=gifsService.getGifs()
    this.searchService=searchService.getSearch();

  }

  ngOnInit(): void {
  }

}
