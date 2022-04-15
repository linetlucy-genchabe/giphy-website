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
btnValue="get Gifs"
gifs:any;
subscription:Subscription=new Subscription;
 
  constructor(private gifsService:GifsService, private searchService:SearchService) { 

  }

  // getGifs(count: number) {
  //   this.searchService.getMoreGifs(count).subscribe((data:any) => {
  //     this.gifs = data.data;
  //   });
  // }
  viewMore(){
    
    if(this.btnValue=== "get Gifs"){
      this.btnValue = "Less Gifs"
      console.log(this.btnValue);
    this.searchService.getMoreTrendingGifs()
    this.subscription = this.searchService.getGifs().subscribe((response:any)=>{
      this.gifs = response;
      
    })
  }else if(this.btnValue ==="Less Gifs"){
    this.searchService.getTrendingGifs(5)
    this.subscription = this.searchService.getGifs().subscribe((response:any)=>{
    this.gifs = response;    
    this.btnValue = "More Gifs"
  })
  }
  }

  ngOnInit(): void {
    this.searchService.getTrendingGifs(12);
    this.subscription=this.searchService.getGifs().subscribe((response:any)=>{this.gifs=response})
  }

}
