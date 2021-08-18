import { Genre } from './../modules/browse/models/genre';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetGenreService {

  public selectedGender?: Genre;

  constructor() { }

  public getGender(gender: Genre) {
    this.selectedGender = gender;
  }
}
