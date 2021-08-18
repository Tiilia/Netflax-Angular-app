import { Director } from './../modules/browse/models/director';
import { Crew } from './../modules/browse/models/crew';
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
  public getAllGenresByMovieId(id: number): Observable<Genre[]> {
    return this._http.get<Genre[]>(this._url + `/genres/movie/${id}`);
  }

  // * get Actors -----------------------------------------------
  public getAllActors(): Observable<Actor[]> {
    return this._http.get<Actor[]>(this._url + "/cast")
  }
  public getActorById(id: number): Observable<Actor> {
    return this._http.get<Actor>(this._url + `/cast/id/${id}`);
  }
  public getAllActorsByMovieId(id: number): Observable<Actor[]> {
    return this._http.get<Actor[]>(this._url + `/cast/movie/${id}`);
  }

  // * get all crews
  public getAllCrewsByMovieId(id: number): Observable<Crew[]> {
    return this._http.get<Crew[]>(this._url + `/crews/movie/${id}`);
  }
  // * get all directors
  public getAllDirectorsByMovieId(id: number): Observable<Director[]> {
    return this._http.get<Director[]>(this._url + `/directors/movie/${id}`);
  }
}
