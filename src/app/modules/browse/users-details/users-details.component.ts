import { Movie } from './../models/movie';
import { ServiceApiService } from './../../../services/service-api.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  user?: User;
  moviesList: Movie[] = [];
  public idSelection = [11, 129, 756, 927, 1091, 1726, 8392, 280217, 283995, 297762, 299534, 324857, 335983, 346364, 354912, 383498, 447404, 458156, 475557]

  public movieSelection() {
    for (let id of this.idSelection) {
      this._api.getMovieById(id).subscribe(res => this.moviesList.push(res));
    }
  }


  constructor(private _api: ServiceApiService) { }

  ngOnInit(): void {
    this.movieSelection();
    this._api.getUserById(10).subscribe(res => this.user = res);
  }

}
