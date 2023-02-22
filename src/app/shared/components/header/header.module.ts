import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { HeaderComponent } from './header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavListModule } from './nav-list/nav-list.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSidenavModule,
    NavListModule,
    MatButtonModule,
    MatInputModule,
    RouterModule
   
  ],
  exports:[HeaderComponent, NavListModule]
})
export class HeaderModule { 

}
