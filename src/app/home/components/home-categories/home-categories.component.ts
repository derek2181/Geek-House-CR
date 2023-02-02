import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.css']
})
export class HomeCategoriesComponent {
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin:10,
    
    navText: ['','>'],
    responsive: {
      0: {
        items: 1
      },
      500:{
        items:2
      },
      600: {
        items: 2
      }
    },
    nav:true
  }
}
