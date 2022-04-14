import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

 
gifs:any;
randoms:any;
subscription:Subscription=new Subscription;
  constructor(private gifsService:GifsService) { 

  }


  ngOnInit(): void {
    this.gifsService.getTrendingGifs();
    this.subscription=this.gifsService.getGifs().subscribe((response:any)=>{this.gifs=response})
  }


}
