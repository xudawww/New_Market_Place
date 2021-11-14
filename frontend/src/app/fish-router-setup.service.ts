import { Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./products/products.component"
import { HomeComponent } from "./home/home.component"
import { ProfileComponent } from "./profile/profile.component"
const routes: any = [
  { path:'',title:'Home',component: HomeComponent,ifMenu:false},
  { path:'product',title:'Product',component: ProductsComponent ,ifMenu:false },
  { path:'profile',title:'Profile',component: ProfileComponent,ifMenu:true  },
];
const routing = RouterModule.forRoot(routes);
export var Routing_Directive = [ routing, routes ];
