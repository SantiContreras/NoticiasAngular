import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http :HttpClient) { }

  getNoticias(parametros:any):Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+
    parametros.categoria+'&apiKey=249616ea67a4403985c67f83569348c6'

    return this.http.get(URL)
  }
}
