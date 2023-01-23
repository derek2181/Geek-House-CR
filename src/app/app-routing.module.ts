import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent,loadChildren:()=> import("./home/home.module").then(m=>m.HomeModule)},
  {path:"home",component:HomeComponent,loadChildren:()=> import("./home/home.module").then(m=>m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
