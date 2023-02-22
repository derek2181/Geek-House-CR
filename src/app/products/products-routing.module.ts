import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { ProductsComponent } from './components/products.component';

const routes: Routes = [{
  path:"",
  children:[ 
    { path: 'detalles/:name', component: DetailsComponent },
  
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
