import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';

const materialModule = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatBadgeModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatExpansionModule
];
@NgModule({
  imports: [
    CommonModule,
    ...materialModule
  ],
  exports: [...materialModule]
})
export class MaterialModule { }
