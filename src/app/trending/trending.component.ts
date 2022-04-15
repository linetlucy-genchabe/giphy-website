import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GifsService } from '../gifs.service';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

gifs:any;
subscription:Subscription=new Subscription;
  searchService: any;
  constructor(private gifsService:GifsService) { 

  }

  getGifs(count: number) {
    this.searchService.getMoreGifs(count).subscribe((data:any) => {
      this.gifs = data.data;
    });
  }

  ngOnInit(): void {
    this.gifsService.getTrendingGifs();
    this.subscription=this.gifsService.getGifs().subscribe((response:any)=>{this.gifs=response})
  }

}
