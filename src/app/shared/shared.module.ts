import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { ProductCardModule } from './components/product-card/product-card.module';




@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HeaderModule,
    ProductCardModule
  ],
  exports:[ 
    HeaderModule,ProductCardModule
  ]
})
export class SharedModule {
  
 }
