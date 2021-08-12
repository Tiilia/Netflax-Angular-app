import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { HomeComponent } from './home/home.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';


@NgModule({
  declarations: [
    HomeComponent,
    AllMoviesComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule
  ],
  bootstrap: [HomeComponent]
})
export class BrowseModule { }
