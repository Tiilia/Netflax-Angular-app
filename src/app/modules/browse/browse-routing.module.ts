import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { RatingComponent } from './rating/rating.component';
import { DetailsComponent } from './details/details.component';
import { AllComponent } from './all/all.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllActorsComponent } from './all-actors/all-actors.component';
import { DetailsActorComponent } from './details-actor/details-actor.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "all", component: AllComponent },
  { path: "detailsMovie/:id", component: DetailsComponent },
  { path: "detailsActor/:id", component: DetailsActorComponent },
  // { path: "rating", component: RatingComponent }
  { path: "user", component: UserComponent },
  { path: "user/userlist", component: UsersListComponent },
  { path: "user/userlist/10", component: UsersDetailsComponent }
  // { path: "actors", component: AllActorsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
