import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../Models/app.movie';
import { Product } from '../Models/app.models';

@Injectable({providedIn:'root'})
export class HttpService {
    private url: string;
    constructor(private http:HttpClient){
        this.url = 'https://apiapptrainingnewapp.azurewebsites.net/api/Products';
    }
    
    get(): Observable<Product[]> {
        let response: Observable<Product[]> = null;        
        response  = this.http.get<Product[]>(this.url);
        return response;
    }

    getById(id:number) : Observable<Product>{
        let response: Observable<Product> = null;        
        response  = this.http.get<Product>(`${this.url}/${id}`);
        return response;
    }
  
    post(prd: Product): Observable<Product> {
      let response: Observable<Product> = null;
      const options = {
          headers: new HttpHeaders({
             'Content-Type': 'application/json'
          })
      };
      response  = this.http.post<Product>(this.url, prd, options);
      return response;
   }
  
   put(id: number, prd: Product): Observable<Product> {
    let response: Observable<Product> = null;
    const options = {
        headers: new HttpHeaders({
           'Content-Type': 'application/json'
        })
    };
    response  = this.http.put<Product>(`${this.url}/${id}`, prd, options);
    return response;
   }

   delete(id: number): Observable<Array<Product>> {
    let response: Observable<Array<Product>> = null;
    response  = this.http.delete<Array<Product>>(`${this.url}/${id}`);
    return response;
  }
}