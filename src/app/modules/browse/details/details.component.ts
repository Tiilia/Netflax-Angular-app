import { Actor } from './../models/actor';
import { MovieDetailsService } from './../../../services/movie-details.service';
import { ServiceApiService } from './../../../services/service-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public idmovie = this.selectedMovie.IdMovie;
  public actorsListFromId: Actor[] = []




  public AllActors() {
    this._api.getAllActorsByMovieId(this.idmovie).subscribe(res => this.actorsListFromId = res)
  }

  constructor(private _api: ServiceApiService, private _details: MovieDetailsService) { }

  ngOnInit(): void {
    this.AllActors();
  }


  public get selectedMovie() {
    return this._details.selectedMovie;
  }

  public get trailer() {
    return this.selectedMovie.Trailer;
  }
}
