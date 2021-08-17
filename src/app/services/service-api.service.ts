import { Actor } from './../modules/browse/models/actor';
import { Genre } from './../modules/browse/models/genre';
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


  // * get Movies ------------------------------------------
  public getAllMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(this._url + "/movies");
  }
  public getMovieById(id: number): Observable<Movie> {
    return this._http.get<Movie>(this._url + `/movies/id/${id}`);
  }
  public getAllMovieByGenreId(id: number): Observable<Movie[]> {
    return this._http.get<Movie[]>(this._url + `/movies/genre/${id}`);
  }
  public getAllMovieByActorId(id: number): Observable<Movie[]> {
    return this._http.get<Movie[]>(this._url + `/movies/cast/${id}`);
  }


  // * get Genres ------------------------------------------
  public getAllGenres(): Observable<Genre[]> {
    return this._http.get<Genre[]>(this._url + "/genres");
  }

  // * get Actors -----------------------------------------------
  public getAllActors(): Observable<Actor[]> {
    return this._http.get<Actor[]>(this._url + "/cast")
  }
  public getActorById(id: number): Observable<Movie> {
    return this._http.get<Movie>(this._url + `/cast/id/${id}`);
  }
  public getAllActorsByMovieId(id: number): Observable<Actor[]> {
    return this._http.get<Actor[]>(this._url + `/cast/movie/${id}`);
  }
}
