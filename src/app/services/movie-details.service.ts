import { Actor } from './../modules/browse/models/actor';
import { Injectable } from '@angular/core';
import { Movie } from '../modules/browse/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  public selectedMovie: any;
  public selectedActor: any;


  constructor() { }

  public selectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }
  public selectActor(actor: Actor) {
    this.selectedActor = actor;
  }


}
