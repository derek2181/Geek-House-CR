import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './products/components/details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/components/products.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:"",component:HomeComponent,loadChildren:()=> import("./home/home.module").then(m=>m.HomeModule)},
  {path:"home",component:HomeComponent,loadChildren:()=> import("./home/home.module").then(m=>m.HomeModule)},
  {path:"productos",component:ProductsComponent,loadChildren:()=> import("./products/products.module").then(m=>m.ProductsModule),},
  {path:"login", component:LoginComponent, loadChildren: ()=> import ("./login/login.module").then(m=>m.LoginModule)},
  {path:"buscar", component:SearchComponent, loadChildren:()=> import("./search/search.module").then(m=>m.SearchModule)},
  {path:"**",component:NotFoundComponent},
  {path:"not-found",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
