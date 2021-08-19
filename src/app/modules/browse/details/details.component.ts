import { GetGenreService } from './../../../services/get-genre.service';
import { Movie } from './../models/movie';
import { Director } from './../models/director';
import { Crew } from './../models/crew';
import { Genre } from './../models/genre';
import { Actor } from './../models/actor';
import { MovieDetailsService } from './../../../services/movie-details.service';
import { ServiceApiService } from './../../../services/service-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Rating } from '../models/rating';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public selectedMovie?: Movie;
  public idMovie?: number;
  public actorsListFromId: Actor[] = [];
  public genresListFromId: Genre[] = [];
  public crewsListFromId: Crew[] = [];
  public directorsListFromId: Director[] = [];
  public ratingListFromId: Rating[] = [];


  public GetMovieById() {
    if (this.idMovie) {
      this._api.getMovieById(this.idMovie).subscribe(res => this.selectedMovie = res)
    }
  }

  public AllActors() {
    if (this.idMovie) {
      this._api.getAllActorsByMovieId(this.idMovie).subscribe(res => this.actorsListFromId = res);
    }
  }

  public AllGenres() {
    if (this.idMovie) {
      this._api.getAllGenresByMovieId(this.idMovie).subscribe(res => this.genresListFromId = res);
    }
  }

  public AllDirectors() {
    if (this.idMovie) {
      this._api.getAllDirectorsByMovieId(this.idMovie).subscribe(res => this.directorsListFromId = res);
    }
  }

  public async AllCrews() {
    if (this.idMovie) {
      await this._api.getAllCrewsByMovieId(this.idMovie).subscribe(res => {
        this.crewsListFromId = res;
        this.crewsListFromId = this.crewsListFromId.filter(c => c.Job !== "Director");
      })
    }
  }

  public AllRating() {
    if (this.idMovie) {
      this._api.getAllRatingByMovieId(this.idMovie).subscribe(res => this.ratingListFromId = res)
    }
  }

  constructor(private _api: ServiceApiService, private _details: MovieDetailsService, private _route: ActivatedRoute, private _gender: GetGenreService) { }

  ngOnInit(): void {
    this._route.params.subscribe((params) => this.onIdReceive(params))


  }

  private onIdReceive(params: Params) {
    this.idMovie = Number(params['id'])
    this.GetMovieById()
    this.AllActors();
    this.AllGenres();
    this.AllDirectors();
    this.AllCrews();
    this.AllRating();
  }
  // public get selectedMovie() {
  //   return this._details.selectedMovie;
  // }

  public get trailer() {
    if (this.selectedMovie) {
      return this.selectedMovie.Trailer;
    } else {
      return;
    }
  }

  //obtenir id acteur
  public getActor(actor: Actor) {
    this._details.selectActor(actor);
  }

  //enregistrer genre 
  public getGenre(genre: Genre) {
    this._gender.getGender(genre);
  }

}
