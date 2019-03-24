import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'

import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications'

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VatAddedPipe } from './product/vat-added.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe'

import { CartService } from './cart/cart.service';
import {AccountService} from './account/account.service'
import{LoginGuard} from 'app/account/login.guard'
import {PendingChangesGuard} from 'app/guards/pending-changes.guard'

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "products/:seoUrl",
    component: ProductComponent
  },
  {
    path: "my-cart",
    component: CartComponent
  },
  {
    path: "shipping-detail",
    component: ShippingDetailComponent, canActivate:[LoginGuard],canDeactivate:[PendingChangesGuard]
  },
  {
    path: "account",
    component: AccountComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent,
    VatAddedPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SimpleNotificationsModule.forRoot()
  ],
  exports: [

  ],
  providers: [
    { provide: "apiUrl", useValue: "http://northwindapi.azurewebsites.net/api" },
    NotificationsService,
    CartService,
    AccountService,
    LoginGuard,
    PendingChangesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
