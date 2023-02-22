import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductModel } from '../../../shared/models/product.model';
import env from 'src/utils/config';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  endpoint=env.URL + "/images"
  myThumbnail : string = ""
  myFullresImage :string = ""
  public name : string = "";
  public product = {} as ProductModel;
  constructor(private route : ActivatedRoute,private productService : ProductService,private router : Router){

  }
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.name=param['name'];

    this.productService.getProductByName(this.name).subscribe({next:(response)=>{
      
      this.product=response;
      this.myThumbnail=this.endpoint + "/" + this.product?.image?.id;
      this.myFullresImage=this.endpoint + "/" + this.product?.image?.id;
    },
    error:()=>{
      console.log("a")
      this.goToNotFound();
    }

    }
    ,
    )
    })
  }
  goToNotFound():void{
    this.router.navigate(["not-found"]);
  }
  products : ProductModel[]=[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    margin:10,
    navText: ['<','>'],
    responsive: {
      0: {
        items: 1
      },
      400:{
        items:2
      },
      600: {
        items: 3
      },
      950: {
        items: 4
      },
      1400: {
        items: 7
      }
    },
    nav:true
  }
}
