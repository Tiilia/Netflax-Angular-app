import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { HomeComponent } from './home/home.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AllActorsComponent } from './all-actors/all-actors.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { DetailsActorComponent } from './details-actor/details-actor.component';


@NgModule({
  declarations: [
    HomeComponent,
    AllMoviesComponent,
    MovieDetailsComponent,
    AllActorsComponent,
    ActorDetailsComponent,
    AllComponent,
    DetailsComponent,
    DetailsActorComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    MaterialModule
  ],
  bootstrap: [HomeComponent]
})
export class BrowseModule { }
