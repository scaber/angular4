import { Component, OnInit } from '@angular/core';
import {Product} from "./product"
import {ProductList} from './product-list.mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:Product[];
  constructor() {
    this.products=ProductList;
   }

  ngOnInit() {
  }

}
