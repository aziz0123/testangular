import { Component } from '@angular/core';
import { product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  listproduct: product[]=[
    {id: 1, title: "T.shirt1", price: "18",quantity: "0" , like:"0"},
    {id: 2, title: "T.shirt2", price: "21",quantity: "0" , like:"0"},
    {id: 3, title: "T.shirt3", price: "16",quantity: "0" , like:"0"},

  ]

  show(){
    console.log("aa")
   }

}
