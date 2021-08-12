import { Movie } from './../modules/browse/models/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  private _url: string = "http://localhost:3000";

  constructor(private _http: HttpClient) { }

  public getAllMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(this._url + "/movies");
  }
  public getMovieById(id: number): Observable<Movie> {
    return this._http.get<Movie>(this._url + `/movies/id/${id}`);
  }
}
