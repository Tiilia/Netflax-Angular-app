import { ServiceApiService } from './../../../services/service-api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() IdMovie: number = 0;

  // public IdMovie: number = 0
  public IdUser: number = 3;
  public Score: number = 0;
  public DateRating: Date = new Date();

  constructor(private _api: ServiceApiService) { }


  public sendNewRating() {
    this._api.PostRating({ IdMovie: this.IdMovie, IdUser: this.IdUser, Score: this.Score, DateRating: this.DateRating }).subscribe(data => console.log(data))
  }

  ngOnInit(): void {
  }

}
