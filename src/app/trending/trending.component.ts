import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GifsService } from '../gifs.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

gifs:any;
subscription:Subscription=new Subscription;
  constructor(private gifsService:GifsService) { 

  }


  ngOnInit(): void {
    this.gifsService.getTrendingGifs();
    this.subscription=this.gifsService.getGifs().subscribe((response:any)=>{this.gifs=response})
  }

}
