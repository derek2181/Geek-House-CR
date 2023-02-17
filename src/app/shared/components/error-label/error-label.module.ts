import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ErrorLabelComponent } from './error-label.component';



@NgModule({
  declarations: [ErrorLabelComponent],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [ErrorLabelComponent]
})
export class ErrorLabelModule { }
