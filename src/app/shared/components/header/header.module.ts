import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { HeaderComponent } from './header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavListModule } from './nav-list/nav-list.module';


@NgModule({
  declarations: [ HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSidenavModule,
    NavListModule
  ],
  exports:[HeaderComponent, NavListModule]
})
export class HeaderModule { 

}
