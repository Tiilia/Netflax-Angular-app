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
  public selectedGenre: Set<number> = new Set();
  constructor(private _api: ServiceApiService, private _details: MovieDetailsService) { }

  public filtreMovies(id: number) {
    if (this.selectedGenre.has(id)) {
      this.selectedGenre.delete(id);
    } else {
      this.selectedGenre.add(id);
    }
    console.log(id);
    console.log(this.selectedGenre);
    if (this.selectedGenre.size > 0) {
      this.moviesList = [];
      for (let genreid of this.selectedGenre) {
        this._api.getAllMovieByGenreId(genreid).subscribe(res => this.moviesList.push(...res));
      }

    } else {
      this.AllMovies();
    }
    // this.selectedGenre = new Set(...id)

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



  //obtenir id acteur
  public getActor(actor: Actor) {
    this._details.selectActor(actor);
  }





}
