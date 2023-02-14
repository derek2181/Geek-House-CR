import { Component,OnInit } from '@angular/core';
import env from 'src/utils/config';
import { ProductModel } from '../shared/models/product.model';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public products : ProductModel[]=[];
  constructor(public productService : ProductService){}
  ngOnInit():void{
    this.productService.getRecentProducts().subscribe((response : any)=>{
      this.products=response;
    });
  }


}
