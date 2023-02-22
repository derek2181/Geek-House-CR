import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { ProductsComponent } from './components/products.component';
import { RouterModule } from '@angular/router';
import { DetailsModule } from './components/details/details.module';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    DetailsModule,
   ProductsRoutingModule
  ]
})
export class ProductsModule { }
