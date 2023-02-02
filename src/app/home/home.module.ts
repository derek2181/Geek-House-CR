import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeLandingComponent } from './components/home-landing/home-landing.component';
import { HomeCategoriesModule } from './components/home-categories/home-categories.module';
import { HomeNewModule } from './components/home-new/home-new.module';
import { HomeLandingModule } from './components/home-landing/home-landing.module';
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeNewModule,
    HomeCategoriesModule,
    HomeLandingModule,
    HomeRoutingModule,
    CarouselModule,

  ]
})
export class HomeModule { }
