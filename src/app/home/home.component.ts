import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
