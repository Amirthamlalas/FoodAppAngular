import { Component } from '@angular/core';

@Component({
  selector: 'app-food-login',
  templateUrl: './food-login.component.html',
  styleUrls: ['./food-login.component.css']
})
export class FoodLoginComponent {

  username=""
  password=""

  login=()=>{
    let data:any={
      "username":this.username,
      "password":this.password
    }
    console.log(data)
  }

}
