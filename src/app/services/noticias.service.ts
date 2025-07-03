import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  //private http : HttpClient
  private http = inject(HttpClient)
  constructor() { }
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=249616ea67a4403985c67f83569348c6
  getNoticias(parametros:any):Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='+ parametros.pais + '&category='
    
    + parametros.categoria +'&apiKey=249616ea67a4403985c67f83569348c6'

    return this.http.get(URL)
  }
}
