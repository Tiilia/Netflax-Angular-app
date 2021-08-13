import { MovieDetailsService } from './../../../services/movie-details.service';
import { ServiceApiService } from './../../../services/service-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public visible: boolean = false;

  constructor(private _api: ServiceApiService, private _details: MovieDetailsService) { }

  public get visibility() { return this.visible = this._details.visible }

  ngOnInit(): void {

  }

}
