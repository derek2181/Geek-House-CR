import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductCardModule } from 'src/app/shared/components/product-card/product-card.module';
import { NgxImageZoomModule } from 'ngx-image-zoom';
@NgModule({
  declarations: [
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    ProductCardModule,
    NgxImageZoomModule
  ]
})
export class DetailsModule {
 
 }
