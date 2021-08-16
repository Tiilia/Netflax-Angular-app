import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseModule } from './modules/browse/browse.module';
import { AccountModule } from './modules/account/account.module';

const routes: Routes = [
  {
    path: "", loadChildren:
      () => import("./modules/browse/browse.module").then(m => BrowseModule)
  },
  {
    path: "account", loadChildren:
      () => import("./modules/account/account.module").then(m => AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
