import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../search.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  subscription:Subscription=new Subscription;
  gifs: any;
  constructor(private http:HttpClient,private searchService:SearchService) { }

  getGifs(count: number) {
    this.searchService.getMoreGifs(count).subscribe((data:any) => {
      this.gifs = data.data;
    });
  }
  searchGif(form: NgForm) {
    let { searchTerm } = form.value;
    this.searchService.getSearchedGifs(searchTerm).subscribe((data:any) => {
      this.gifs = data.data;
    });
    form.reset();
  }
  ngOnInit(): void {
    // this.searchService.getGifs().subscribe((data));
    // this.gifs=data.data;
     this.subscription=this.searchService.getSearch().subscribe((response:any)=>{this.gifs=response})
  // }
  }

}
