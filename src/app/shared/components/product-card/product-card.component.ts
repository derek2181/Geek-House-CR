import { Component, Input } from '@angular/core';
import env from 'src/utils/config';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
endpoint=env.URL + "/images"
@Input() product:ProductModel | undefined 
}
