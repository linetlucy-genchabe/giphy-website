import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  gifs =new BehaviorSubject<any>([])
  gifNumber: number = 12;
  constructor(private http: HttpClient){}
  trendingAP = environment.apiKey
  getTrendingGifs(gifNumber:any){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=12&rating=g`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
    // %$[environment.trendingAPI]
  }
  getMoreTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=100&rating=g`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  }
  getRandomGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/random?api_key=${environment.apiKey}&limit=100&tag=sports&rating=g`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  }
  getMoreRandomGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/random?api_key=${environment.apiKey}&tag=sports&rating=g`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  }
  getGifs(){
    return this.gifs.asObservable()
  }
  searchGifs(gifName:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.apiKey}&q=laugh&limit=25&offset=0&rating=g&lang=en`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    },err=>{
      this.gifs = new BehaviorSubject<any>("Try another Search Item")
      alert("Try sometimes later")
    })

  }
}



