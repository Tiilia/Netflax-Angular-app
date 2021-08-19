import { ServiceApiService } from './../../../services/service-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() IdMovie?: number;

  // public IdMovie: number = 0
  public IdUser: number = 3;
  public Score?: number;
  public DateRating: Date = new Date();

  constructor(private _api: ServiceApiService) { }

  public control = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(5)]);

  public getErrorMessage() {
    if (this.control.hasError('min')) {
      return 'Minimum 0';
    }
    if (this.control.hasError('max')) {
      return 'Maximun 5';
    }
    return this.control.hasError('required') ? 'You must enter a value' : '';
  }

  public sendNewRating() {
    if (this.Score && this.IdMovie) {
      this._api.PostRating({ IdMovie: this.IdMovie, IdUser: this.IdUser, Score: this.Score, DateRating: this.DateRating }).subscribe(data => console.log(data))
    }
  }

  ngOnInit(): void {
  }

}
