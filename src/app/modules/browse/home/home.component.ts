import { ServiceApiService } from './../../../services/service-api.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public idSelection = [11, 120, 129, 497, 539, 756, 927, 1091, 1726, 8392, 8587, 13004, 280217, 283995, 297762, 299534, 324857, 335983, 346364, 354912, 383498, 424694, 447404, 450465, 458156, 458723, 475557]
  public moviesList: Movie[] = [];

  public affiche?: Movie;
  public idAffiche: number = this.randomIdMovie();

  public movieSelection() {
    for (let id of this.idSelection) {
      this._api.getMovieById(id).subscribe(res => this.moviesList.push(res));
    }
  }

  public randomIdMovie() {
    return (Math.floor(Math.random() * this.idSelection.length))
  }


  constructor(private _api: ServiceApiService) { }

  ngOnInit(): void {
    this.movieSelection();

    //! selectionne une id random sur le nombre d'id dans idselection.. n'importe quoi ^^'
    // this._api.getMovieById(this.idAffiche).subscribe(res => this.affiche = res);

    this._api.getMovieById(324857).subscribe(res => this.affiche = res);
  }

}
