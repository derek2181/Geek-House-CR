import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { ProductCardModule } from './components/product-card/product-card.module';
import { FooterModule } from './components/footer/footer.module';
import { ProgressBarModule } from './components/progress-bar/progress-bar.module';
import { ErrorLabelModule } from './components/error-label/error-label.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    ProductCardModule,
    FooterModule,
    ProgressBarModule,
    ErrorLabelModule,
    HttpClientModule,
  ],
  exports: [
    HeaderModule,
    ProductCardModule,
    FooterModule,
    ProgressBarModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
