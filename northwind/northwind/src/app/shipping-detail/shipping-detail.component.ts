import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import {ShippingDetail} from "./shipping-detail"
import {NotificationsService} from "angular2-notifications"
import {CartService} from "app/cart/cart.service"
import {Router} from "@angular/router"
import {ComponentCanDeactivate} from 'app/guards/pending-changes.guard'

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.css']
})
export class ShippingDetailComponent implements OnInit,ComponentCanDeactivate {

  constructor(private cartService:CartService,
              private notificationsService:NotificationsService,
              private router:Router) { }
  cities = [];
  model:ShippingDetail=new ShippingDetail('','',true,-1)
  
  isDirty :boolean=false;

  canDeactivate():boolean{
   return !this.isDirty;
  }
  ngOnInit() {
    this.cities.push(
      { "id": "1", "name": "Ankara" },
      { "id": "2", "name": "İstanbul" },
      { "id": "3", "name": "London" }
    );
  }

  checkout(form:NgForm){
    if(form.invalid){
      return;
    }
    this.cartService.clear();
    this.notificationsService.info("Successfull","Shopping completed!");
    this.router.navigate(["products"]);
  }

}
