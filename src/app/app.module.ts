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
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FoodLoginComponent,
    FoodRegisterComponent,
    FoodLoginPageComponent
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
