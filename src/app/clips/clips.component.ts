import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.css']
})
export class ClipsComponent implements OnInit {

  
gifs:any;
subscription:Subscription=new Subscription;
  constructor(private gifsService:GifsService) { 

  }


  ngOnInit(): void {
    this.gifsService.getTrendingGifs();
    this.subscription=this.gifsService.getGifs().subscribe((response:any)=>{this.gifs=response})
  }

}
