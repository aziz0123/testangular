import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'product',component:ProductComponent},
  {path:'home',component:HomeComponent},
  {path:'product/:id',component:ShowproductComponent},
  {path:'add',component:AddproductComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
