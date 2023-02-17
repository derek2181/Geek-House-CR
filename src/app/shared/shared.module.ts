import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { ProductCardModule } from './components/product-card/product-card.module';
import { FooterModule } from './components/footer/footer.module';
import { ProgressBarModule } from './components/progress-bar/progress-bar.module';
import { ErrorLabelModule } from './components/error-label/error-label.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    ProductCardModule,
    FooterModule,
    ProgressBarModule,
    ErrorLabelModule,
  ],
  exports: [HeaderModule, ProductCardModule, FooterModule, ProgressBarModule],
})
export class SharedModule {}
