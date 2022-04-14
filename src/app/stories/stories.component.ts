import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GifsService } from '../gifs.service';
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  gifs:any;
  subscription:Subscription=new Subscription;
    constructor(private gifsService:GifsService) { 
  
    }
  
  
    ngOnInit(): void {
      this.gifsService.getTrendingGifs();
      this.subscription=this.gifsService.getGifs().subscribe((response:any)=>{this.gifs=response})
    }
  
}
