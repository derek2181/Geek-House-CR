import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavListModule } from './components/header/nav-list/nav-list.module';




@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
   
  ],
  exports:[ 
    HeaderModule,
   
  ]
})
export class SharedModule {
  
 }
