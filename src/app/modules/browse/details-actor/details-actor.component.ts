import { MovieDetailsService } from './../../../services/movie-details.service';
import { ServiceApiService } from './../../../services/service-api.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-details-actor',
  templateUrl: './details-actor.component.html',
  styleUrls: ['./details-actor.component.scss']
})
export class DetailsActorComponent implements OnInit {

  public idactor = this.selectedActor.IdCast;
  public moviesListFromId: Movie[] = [];

  public get selectedActor() {
    return this._details.selectedActor;
  }

  public AllMovies() {
    this._api.getAllMovieByActorId(this.idactor).subscribe(res => this.moviesListFromId = res)
  }


  constructor(private _api: ServiceApiService, private _details: MovieDetailsService) { }

  ngOnInit(): void {
    this.AllMovies();
  }

}
