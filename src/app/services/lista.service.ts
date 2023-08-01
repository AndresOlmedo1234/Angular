import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private _http: HttpClient) { }

  fetchDataFromApi(): Observable<any> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 
    return this._http.get<any>(apiUrl);
  }
}
