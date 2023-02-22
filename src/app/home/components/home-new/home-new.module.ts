import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeNewComponent } from './home-new.component';
import { ProductCardModule } from 'src/app/shared/components/product-card/product-card.module';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HomeNewComponent],
  imports: [
    CommonModule,
    CarouselModule,
    ProductCardModule,
    MatDividerModule
  ], exports:[HomeNewComponent]
})
export class HomeNewModule {
  myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
 }
