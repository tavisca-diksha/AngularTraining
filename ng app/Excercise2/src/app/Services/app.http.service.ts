import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../Models/app.movie';

@Injectable({providedIn:'root'})
export class HttpService {
    private url: string;
    constructor(private http:HttpClient){
        this.url = 'https://localhost:5001/api/movies';
    }
    
    get(): Observable<Movie[]> {
        let response: Observable<Movie[]> = null;        
        response  = this.http.get<Movie[]>(this.url);
        return response;
    }
  
    post(prd: Movie): Observable<Array<Movie>> {
      let response: Observable<Array<Movie>> = null;
      const options = {
          headers: new HttpHeaders({
             'Content-Type': 'application/json'
          })
      };
      response  = this.http.post<Array<Movie>>(this.url, prd, options);
      return response;
   }
  
   put(id: number, prd: Movie): Observable<Array<Movie>> {
    let response: Observable<Array<Movie>> = null;
    const options = {
        headers: new HttpHeaders({
           'Content-Type': 'application/json'
        })
    };
    response  = this.http.put<Array<Movie>>(`${this.url}/${id}`, prd, options);
    return response;
   }

   delete(id: number): Observable<Array<Movie>> {
    let response: Observable<Array<Movie>> = null;
    response  = this.http.delete<Array<Movie>>(`${this.url}/${id}`);
    return response;
  }
}