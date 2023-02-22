import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { ProductCardModule } from './components/product-card/product-card.module';
import { FooterModule } from './components/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NotFoundModule } from './components/not-found/not-found.module';




@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HeaderModule,
    ProductCardModule,
    FooterModule,
    HttpClientModule,
    NotFoundModule
  ],
  exports:[ 
    HeaderModule,ProductCardModule,FooterModule,HttpClientModule,NotFoundModule
  ]
})
export class SharedModule {
  
 }
