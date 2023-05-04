import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/User/auth.service";
import {loginRequest} from "./loginRequest";
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {HttpInterceptor} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {UserService} from "../../../services/User/user.service";
import Swal from "sweetalert2";
const ROLE_USER = 'ROLE_USER';
const ROLE_ADMIN = 'ROLE_ADMIN';
const AUTH_API = 'http://localhost:8888';
const USER_KEY = 'bara123456789';

interface bara {
  accessToken: string;
  // other properties here
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private API_URL = 'http://localhost:8888';



  ///////////////////

  username: string = '';
  password : string = '';

  isSignedin = false;

  error: string = '';

  constructor( private userS: UserService,  private authService: AuthService,  private router:Router) { }

  ngOnInit(): void {
    // if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }
  }



  public FinalLogin(){
    const { username, password } = this.form;

    this.authService.Login(username, password).subscribe(
      (response : any)=>{
        // console.log("  the response is  "+ JSON.stringify(response.accessToken));
        // console.log(" \n the role is  is  "+ JSON.stringify(response.roles));
        // console.log(" \n the hole object   is  "+ JSON.stringify(response));
        this.userS.setRoles(response.roles);
     //   alert("the respanse is    :  "+ JSON.stringify(response));
        this.userS.setToken(response.accessToken);
        localStorage.setItem("id", response.id);
        localStorage.setItem("username", response.username);
        localStorage.setItem("email", response.email);
        ///console.log(" \n \n now the token is   "+ this.userS.getToken())
        //console.log(" \n \n now the role is   "+ this.userS.getRoles())
      //  if(response.user.role)
        const roles= response.roles[0];
        if(roles=== 'ROLE_ADMIN'){
         this.router.navigate(['/admin']);
        }else {
          this.router.navigate(['/home']);

        }
      },
      (error)=>{
    //    console.log("error "+ error);
        Swal.fire("There is some error please verify your input and also verify you have an active account !", "error");
      }
    )
  }




  sendAResetPwdLink(form: NgForm) {

    console.log(form.value.email);
    this.authService.SendForgetPWD(form.value.email).subscribe(res => {
      Swal.fire("An email have been send succusfully  to your email adresse \n  please follow the steps in order to change your password !", "success");

    }, error => {
      Swal.fire("An email have been send succusfully  to your email adresse \n  please follow the steps in order to change your password !", "error");
    })

  }




}
