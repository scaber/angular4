import { Injectable, Inject } from '@angular/core';
import { Product } from './product'

import { Http, Response } from '@angular/http'
import { Observable } from "rxjs"

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductService {

  constructor(private http: Http, @Inject('apiUrl') private apiUrl) { }


  getProducts(): Observable<Product[]> {
    return this.http.get(this.apiUrl+"/products")
      .map(response => response.json());
  }

}
