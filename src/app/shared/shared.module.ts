import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { ProductCardModule } from './components/product-card/product-card.module';
import { FooterModule } from './components/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HeaderModule,
    ProductCardModule,
    FooterModule,
    HttpClientModule
  ],
  exports:[ 
    HeaderModule,ProductCardModule,FooterModule,HttpClientModule
  ]
})
export class SharedModule {
  
 }
