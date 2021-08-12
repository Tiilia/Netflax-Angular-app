import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { HomeComponent } from './home/home.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    AllMoviesComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    MaterialModule
  ],
  bootstrap: [HomeComponent]
})
export class BrowseModule { }
