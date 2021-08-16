import { MovieDetailsService } from './../../../services/movie-details.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie?: Movie;

  constructor(private _details: MovieDetailsService) { }

  ngOnInit(): void {
  }
  //obtenir movie
  public getMovie(movie: Movie) {
    this._details.selectMovie(movie);
  }
  public setSrc(html: HTMLImageElement) {
    html.src = "../../../assets/missing-picture.png"
  }
}
