import { Component } from '@angular/core';
import {AuthService} from "../../../../services/User/auth.service";
import {Route, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
const AUTH_API = 'http://localhost:8888';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPWDComponent {
constructor(private authService:AuthService, private route: Router, private http:HttpClient) {
}  email!: string;



sendVerifyEmail(){
  const payload = {
    email: this.email,

  };

  const headers = new HttpHeaders({'Content-Type': 'application/json'});
console.log("hereeee is sending")
  this.http.post(AUTH_API+ 'public/user/forgot_password', payload, {headers: headers})
    .subscribe(
      () => {

        console.log("ok send")
      },
      () => {
     console.log("errro")
      }
    );
}
}

