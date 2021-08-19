import { Rating } from './../modules/browse/models/rating';
import { Director } from './../modules/browse/models/director';
import { Crew } from './../modules/browse/models/crew';
import { Actor } from './../modules/browse/models/actor';
import { Genre } from './../modules/browse/models/genre';
import { Movie } from './../modules/browse/models/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../modules/browse/models/user';


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


  // * get/post all rating
  public getAllRatingByMovieId(id: number): Observable<Rating[]> {
    return this._http.get<Rating[]>(this._url + `/rating/movie/${id}`);
  }
  // post rating
  public PostRating(rating: Rating): Observable<any> {
    return this._http.post<any>(this._url + `/rating/`, rating).pipe(map(data => data.IdUser));
  }


  // * get/post all user
  public getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>(this._url + `/users`);
  }
  public getUserById(id: number): Observable<User> {
    return this._http.get<User>(this._url + `/users/id/${id}`);
  }
  public getAllUsersRatingByIdMovie(id: number): Observable<User[]> {
    return this._http.get<User[]>(this._url + `/users/movie/${id}`);
  }



}

