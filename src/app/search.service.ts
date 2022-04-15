import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class SearchService {

 
  getMoreGifs(count: number): Observable<any> {
    return this.http.get<any>(
      `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=${count}&rating=g`
    );
  }
  getGifs(): Observable<any> {
    return this.http.get<any>(
      `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=4&rating=g`
    );
  }
  getSearchedGifs(searchTerm:string):Observable<any> {
    return this.http.get<any>(
      `https://api.giphy.com/v1/gifs/search?api_key=${environment.apiKey}&q=${searchTerm}&limit=2&offset=0&rating=g&lang=en`
    );
    // return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=XPyJEij2iuEYg6LKoAbABz2orJnRCI6d&limit=6&rating=g`).subscribe((response:any)=>{
    //   this.gifs.next(response.data)
    // })
  }
  getSearch() {
    return this.gifs.asObservable()
  }
  gifs=new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }
}

// searchGifs(searchTerm: string): Observable<any> '{
//   return this.http.get<any>(
//     `https://api.giphy.com/v1/gifs/search?api_key=${environment.apiKey}&q=${searchTerm}&limit=2&offset=0&rating=g&lang=en`
//   );



