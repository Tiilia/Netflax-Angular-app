import { Director } from './../models/director';
import { Crew } from './../models/crew';
import { Genre } from './../models/genre';
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
  public actorsListFromId: Actor[] = [];
  public genresListFromId: Genre[] = [];
  public crewsListFromId: Crew[] = [];
  public directorsListFromId: Director[] = [];


  public AllActors() {
    this._api.getAllActorsByMovieId(this.idmovie).subscribe(res => this.actorsListFromId = res);
  }

  public AllGenres() {
    this._api.getAllGenresByMovieId(this.idmovie).subscribe(res => this.genresListFromId = res);
  }

  public AllDirectors() {
    this._api.getAllDirectorsByMovieId(this.idmovie).subscribe(res => this.directorsListFromId = res);
  }

  public AllCrews() {
    this._api.getAllCrewsByMovieId(this.idmovie).subscribe(res => this.crewsListFromId = res);
    for (let crew of this.crewsListFromId) {
      if (crew.Job === "Director") {
        this.crewsListFromId.splice(crew.Idcrew)
      }
    }
  }

  constructor(private _api: ServiceApiService, private _details: MovieDetailsService) { }

  ngOnInit(): void {
    this.AllActors();
    this.AllGenres();
    this.AllDirectors();
    this.AllCrews();
  }


  public get selectedMovie() {
    return this._details.selectedMovie;
  }

  public get trailer() {
    return this.selectedMovie.Trailer;
  }
}
