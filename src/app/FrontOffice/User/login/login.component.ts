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

  showPassword: boolean = false;


  ///////////////////

  username: string = '';
  password : string = '';

  isSignedin = false;

  error: string = '';

  constructor( private userS: UserService,  private authService: AuthService,  private router:Router) { }

  ngOnInit(): void {

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



  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }




  sendAResetPwdLink(form: NgForm) {
    console.log(form.value.email);
    this.authService.SendForgetPWD(form.value.email).subscribe(
      (res) => {
        Swal.fire({
          title: 'An email has been sent successfully to your email',
          text: 'Please follow the steps in order to change your password!',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
          }
        });
      },
      (error) => {
        Swal.fire({
          title: 'An email has been sent successfully to your email',
          text: 'Please follow the steps in order to change your password!',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
          }
        });
      }
    );
  }





}
