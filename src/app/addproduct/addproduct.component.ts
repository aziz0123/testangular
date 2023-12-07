import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../models/product';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productform!:FormGroup;
  ngOnInit(): void {
    
  
  this.productform=new FormGroup({

      id:new FormControl(''),
      title:new FormControl(),
      price:new FormControl(),

    })
  }

    add(){
      console.log(console.log("notre form"+JSON.stringify(this.productform.value)))
    }
  
}
