import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLandingComponent } from './home-landing.component';



@NgModule({
  declarations: [HomeLandingComponent],
  imports: [
    CommonModule
  ],
  exports:[HomeLandingComponent]
})
export class HomeLandingModule { }
