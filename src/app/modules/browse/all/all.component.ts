import { Actor } from './../models/actor';
import { Genre } from './../models/genre';
import { Movie } from './../models/movie';
import { MovieDetailsService } from './../../../services/movie-details.service';
import { ServiceApiService } from './../../../services/service-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  // public allList: Movie[] | Actor[] = [];
  public movies: boolean = false;
  public actors: boolean = false;

  public moviesList: Movie[] = [];
  public genresList: Genre[] = [];
  public actorsList: Actor[] = [];

  constructor(private _api: ServiceApiService, private _details: MovieDetailsService) { }

  public filtreMovies(id: number) {
    this._api.getAllMovieByGenreId(id).subscribe(res => this.moviesList = res)
  }

  public AllMovies() {
    this._api.getAllMovies().subscribe(res => this.moviesList = res);
    this.movies = true;
    this.actors = false;
  }
  public AllActors() {
    this._api.getAllActors().subscribe(res => this.actorsList = res);
    this.movies = false;
    this.actors = true;
  }

  ngOnInit(): void {
    this.AllMovies()
    this._api.getAllGenres().subscribe(res => this.genresList = res);
  }


  //obtenir movie
  public getMovie(movie: Movie) {
    this._details.selectMovie(movie);
  }
  //obtenir id acteur






}
