import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import env from 'src/utils/config';
import { ProductModel } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint=env.LOCAL.url + "/products";
  constructor(private _httpClient:HttpClient) { }
  
  public getRecentProducts(): Observable<ProductModel[]>{
  
    return this._httpClient.get<ProductModel[]>(this.endpoint + "/recent");
    
  }
}
