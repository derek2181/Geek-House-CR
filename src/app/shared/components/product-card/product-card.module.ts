import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ProductCardComponent } from './product-card.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule
  ],
  exports:[ProductCardComponent]
})
export class ProductCardModule { }
