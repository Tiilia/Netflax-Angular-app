import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


const MaterialComponents = [
  // import modules material
  MatButtonModule,
  MatButtonToggleModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }