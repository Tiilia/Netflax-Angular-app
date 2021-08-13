import { DetailsComponent } from './details/details.component';
import { AllComponent } from './all/all.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllActorsComponent } from './all-actors/all-actors.component';
import { DetailsActorComponent } from './details-actor/details-actor.component';

const routes: Routes = [
  {
    path: "", component: AllComponent
  },
  { path: "details", component: DetailsComponent },
  { path: "detailsActor", component: DetailsActorComponent },
  // { path: "actors", component: AllActorsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
