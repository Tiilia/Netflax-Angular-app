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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrolltopModule } from 'ng-scrolltop';
import { RatingComponent } from './rating/rating.component';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';



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
    AffichageYearPipe,
    RatingComponent,
    UserComponent,
    UsersListComponent,
    UsersDetailsComponent,

  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    MaterialModule,
    FormsModule,
    NgScrolltopModule,
    ReactiveFormsModule
  ],
  bootstrap: [HomeComponent]
})
export class BrowseModule { }
