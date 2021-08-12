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

  constructor(private _api: ServiceApiService) { }

  ngOnInit(): void {
    this._api.getAllMovies().subscribe(res => this.moviesList = res);
  }

}
