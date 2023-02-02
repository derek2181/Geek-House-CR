import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCategoriesComponent } from './home-categories.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [HomeCategoriesComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports:[
    HomeCategoriesComponent
  ]
})
export class HomeCategoriesModule { }
