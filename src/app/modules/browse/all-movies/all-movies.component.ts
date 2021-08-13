import { MovieDetailsService } from './../../../services/movie-details.service';
import { Genre } from './../models/genre';
import { Movie } from './../models/movie';
import { ServiceApiService } from './../../../services/service-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  public moviesList: Movie[] = [];
  public genresList: Genre[] = [];


  constructor(private _api: ServiceApiService, private _details: MovieDetailsService) { }

  // public filtreMovies(id: number) {
  //   let listMoviesByGenre: Movie[] = []
  //   if (this.moviesList.length !== 0) {
  //     this._api.getAllMovieByGenreId(id).subscribe(res => listMoviesByGenre = res)
  //     for (let i = 0; i < listMoviesByGenre.length; i++) {
  //       if (this.moviesList[i].Title !== listMoviesByGenre[i].Title) {
  //         this.moviesList.splice(i)
  //       }
  //     }
  //   }
  // }
  public filtreMovies(id: number) {
    this._api.getAllMovieByGenreId(id).subscribe(res => this.moviesList = res)
  }

  public AllMovies() {
    this._api.getAllMovies().subscribe(res => this.moviesList = res);
  }
  ngOnInit(): void {
    this.AllMovies()
    this._api.getAllGenres().subscribe(res => this.genresList = res);
  }

}
