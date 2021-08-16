import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { HomeComponent } from './home/home.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AllActorsComponent } from './all-actors/all-actors.component';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { DetailsActorComponent } from './details-actor/details-actor.component';
import { UrlVideoPipe } from './pipes/url-video.pipe';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UrlPicturePipe } from './pipes/url-picture.pipe';
import { AffichageDatePipe } from './pipes/affichage-date.pipe';
import { AffichageYearPipe } from './pipes/affichage-year.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    AllMoviesComponent,
    MovieDetailsComponent,
    AllActorsComponent,
    AllComponent,
    DetailsComponent,
    DetailsActorComponent,
    UrlVideoPipe,
    MovieCardComponent,
    UrlPicturePipe,
    AffichageDatePipe,
    AffichageYearPipe
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    MaterialModule
  ],
  bootstrap: [HomeComponent]
})
export class BrowseModule { }
