import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavListComponent } from './nav-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavListComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
   
    RouterModule
  ],
  exports:[NavListComponent]
})
export class NavListModule { }
