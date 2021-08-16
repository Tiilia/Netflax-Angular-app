import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [
  // import modules material
  MatButtonModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressBarModule,
  MatIconModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }