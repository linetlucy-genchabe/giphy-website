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
 
//   getMoreGifs(count: number): Observable<any> {
//     return this.http.get<any>(
//       `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=${count}&rating=g`
//     );
//   }
//   getGifs(): Observable<any> {
//     return this.http.get<any>(
//       `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=4&rating=g`
//     );
//   }
//   getSearchedGifs(searchTerm:string):Observable<any> {
//     return this.http.get<any>(
//       `https://api.giphy.com/v1/gifs/search?api_key=${environment.apiKey}&q=${searchTerm}&limit=2&offset=0&rating=g&lang=en`
//     );
//     // return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=XPyJEij2iuEYg6LKoAbABz2orJnRCI6d&limit=6&rating=g`).subscribe((response:any)=>{
//     //   this.gifs.next(response.data)
//     // })
//   }
//   getSearch() {
//     return this.gifs.asObservable()
//   }
//   gifs=new BehaviorSubject<any>([]);

//   constructor(private http:HttpClient) { }
// }
// searchGifs(gifName:string){
//   return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.trendingAPI}&q=laugh&limit=25&offset=0&rating=g&lang=en`).subscribe((response:any)=>{
//     this.gifs.next(response.data)
//   },err=>{
//     this.gifs = new BehaviorSubject<any>("Try another Search Item")
//     alert("Try sometimes later")
//   });



// searchGifs(searchTerm: string): Observable<any> '{
//   return this.http.get<any>(
//     `https://api.giphy.com/v1/gifs/search?api_key=${environment.apiKey}&q=${searchTerm}&limit=2&offset=0&rating=g&lang=en`
//   );



