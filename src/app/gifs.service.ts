import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  gifs=new BehaviorSubject<any>([]);
randoms=new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=XPyJEij2iuEYg6LKoAbABz2orJnRCI6d&limit=5&rating=g`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  }
  getGifs(){
    return this.gifs.asObservable()
  }


  // getRandomGifs(){
  //   return this.http.get(`https://api.giphy.com/v1/gifs/random?api_key=XPyJEij2iuEYg6LKoAbABz2orJnRCI6d&tag=&rating=g`).subscribe((response:any)=>{
  //     this.randoms.next(response.data)
  //   })
  // }
  // getRandoms(){
  //   return this.gifs.asObservable()
  // }


  // https://api.giphy.com/v1/gifs/random?api_key=XPyJEij2iuEYg6LKoAbABz2orJnRCI6d&tag=&rating=g
}
