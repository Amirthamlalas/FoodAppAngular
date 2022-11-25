import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodLoginComponent } from './food-login/food-login.component';
import { FoodRegisterComponent } from './food-register/food-register.component';
import { FoodLoginPageComponent } from './food-login-page/food-login-page.component';
import { FoodvegComponent } from './foodveg/foodveg.component';
import { FoodNonvegComponent } from './food-nonveg/food-nonveg.component';
import { FoodDessertComponent } from './food-dessert/food-dessert.component';

const myroute : Routes = [
  {
    path : "",
    component : HomePageComponent
  },
  {
    path : "login",
    component : FoodLoginComponent
  },
  {
    path : "register",
    component : FoodRegisterComponent
  },
  {
    path : "loginpage",
    component : FoodLoginPageComponent
  },
  {
    path : "vegetarian",
    component : FoodvegComponent
  },
  {
    path : "nonveg",
    component : FoodNonvegComponent
  },
  {
    path : "dessert",
    component : FoodDessertComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FoodLoginComponent,
    FoodRegisterComponent,
    FoodLoginPageComponent,
    FoodvegComponent,
    FoodNonvegComponent,
    FoodDessertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
