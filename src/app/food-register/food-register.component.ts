import { Component } from '@angular/core';

@Component({
  selector: 'app-food-register',
  templateUrl: './food-register.component.html',
  styleUrls: ['./food-register.component.css']
})
export class FoodRegisterComponent {

  username=""
  mail=""
  phone=""
  password=""
  confirmpassword=""

register=()=>{
   let data:any={
    "username":this.username,
    "mail":this.mail,
    "phone":this.phone,
    "password":this.password,
    "confirmpassword":this.confirmpassword
   }
   console.log(data)
}

}
