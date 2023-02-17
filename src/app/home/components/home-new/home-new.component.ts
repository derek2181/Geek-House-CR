import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductModel } from 'src/app/shared/models/product.model';
@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.css']
})
export class HomeNewComponent {
 
  @Input() products : ProductModel[]=[];
  
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
