import { Injectable } from '@angular/core';
import { Movie } from '../modules/browse/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  public selectedMovie: any;
  public visible: boolean = false;

  constructor() { }

  public selectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

  public isVisible() {
    !this.visible;
  }


}
