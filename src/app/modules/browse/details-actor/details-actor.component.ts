import { Actor } from './../models/actor';
import { MovieDetailsService } from './../../../services/movie-details.service';
import { ServiceApiService } from './../../../services/service-api.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-actor',
  templateUrl: './details-actor.component.html',
  styleUrls: ['./details-actor.component.scss']
})
export class DetailsActorComponent implements OnInit {

  public selectedActor?: Actor;
  public idActor?: number;
  public moviesListFromId: Movie[] = [];

  // public get selectedActor() {
  //   return this._details.selectedActor;
  // }

  public GetActorById() {
    if (this.idActor) {
      // console.log(this.idActor);
      this._api.getActorById(this.idActor).subscribe(res => this.selectedActor = res);
    }
  }

  public AllMovies() {
    if (this.idActor) {
      this._api.getAllMovieByActorId(this.idActor).subscribe(res => this.moviesListFromId = res)
    }
  }


  constructor(private _api: ServiceApiService, private _details: MovieDetailsService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params) => this.onIdReceive(params))
    // this.AllMovies();
  }

  private onIdReceive(params: Params) {
    this.idActor = Number(params['id'])
    this.GetActorById();
    this.AllMovies();
  }
}
