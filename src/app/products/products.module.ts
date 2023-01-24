import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { ProductsComponent } from './components/products.component';



@NgModule({
  declarations: [
    FilterComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
