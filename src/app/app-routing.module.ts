import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/components/products.component';

const routes: Routes = [
  {path:"",component:HomeComponent,loadChildren:()=> import("./home/home.module").then(m=>m.HomeModule)},
  {path:"home",component:HomeComponent,loadChildren:()=> import("./home/home.module").then(m=>m.HomeModule)},
  {path:"productos",component:ProductsComponent,loadChildren:()=> import("./products/products.module").then(m=>m.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
