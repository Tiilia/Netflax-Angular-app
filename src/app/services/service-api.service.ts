import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  private _url: string = "http://localhost:300/";

  constructor(private _http: HttpClient) { }

  public getAllMovies(): Observable<any> {
    return this._http.get(this._url + "/movies")
  }
}
