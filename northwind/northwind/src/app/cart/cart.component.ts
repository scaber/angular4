import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item'
import { Product } from 'app/product/product'
import { CartService } from "./cart.service"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  isProductRemoved: boolean = false;
  cartItems: CartItem[] = [];

  ngOnInit() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product: Product) {
    if (confirm("Are you sure")) {
      this.cartService.removeFromCart(product);
      this.isProductRemoved = true;
    }
  }

}
