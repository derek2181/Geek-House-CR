import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { ProductCardModule } from './components/product-card/product-card.module';
import { FooterModule } from './components/footer/footer.module';




@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HeaderModule,
    ProductCardModule,
    FooterModule
  ],
  exports:[ 
    HeaderModule,ProductCardModule,FooterModule
  ]
})
export class SharedModule {
  
 }
