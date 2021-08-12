import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [
  // import modules material
  MatButtonModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }