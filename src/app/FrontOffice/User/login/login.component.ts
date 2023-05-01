import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/User/auth.service";
import {StorageService} from "../../../services/User/storage.service";
import {loginRequest} from "./loginRequest";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {HttpInterceptor} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {UserService} from "../../../services/User/user.service";
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

  constructor( private userS: UserService,  private authService: AuthService, private storageService: StorageService, private router:Router) { }

  ngOnInit(): void {
    // if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }
  }
//
//   onSubmit(): void {
//     const { username, password } = this.form;
//
//     this.authService.login(username, password).subscribe({
//       next: data => {
//         this.storageService.saveUser(data);
//
//         this.isLoginFailed = false;
//         this.isLoggedIn = true;
//         this.roles = this.storageService.getUser().roles;
//       //  this.reloadPage();
// console.log(" \n the fucking token is "+ this.authService.saveUserF(data));
//         alert(" \n the fucking token is "+ this.authService.saveUserF(data));
//
//        // alert("the role of the logged user is "+ this.roles)
//         if(this.roles.includes(ROLE_USER)) {
//           Swal.fire({
//             title: 'Welcome Back !' ,
//             text: '  ' +this.form.username,
//             icon: 'success',
//             timer: 2000, // show the dialog for 2 seconds
//             showConfirmButton: false // hide the "OK" button
//           });
//           this.router.navigateByUrl('account');
//         }
//         else{
//           this.router.navigateByUrl('admin');
//         }
//       },
//       error: err => {
//
//         if (err.status === 401) {
//           this.form.username='';
//           this.form.password='';
//          Swal.fire( 'Invalid email or password.');
//
//         } else {
//           Swal.fire( 'An error occurred. Please try again later.');
//         }
//
//
//       }
//     });
//   }
//
//
//
//
//   DoLog(): void {
//     const { username, password } = this.form;
//
//     this.authService.login(username, password).subscribe({
//       next: data => {
//         this.authService.saveUser(data);
//         console.log("ok  login +data " +data );
//         // alert("ress is " + this.authService.getUser());
//
//
//         Swal.fire('Champ obligatoire !!', 'Password est un champ obligatoire', 'error');
//         this.isSignedin = true;
//         // this.roles = this.storageService.getUser().roles;
//        // console.log(" \n this.storageService.getUser().roles" + this.authService.getUser());
//         // this.reloadPage();
//         this.router.navigateByUrl('account');      },
//       error: err => {
//         this.errorMessage = err.error.message;
//         // this.isLoginFailed = true;
//       }
//     });
//   }
//
//
//   // doSignin() {
//   //   if(this.username !== '' && this.username !== null && this.password !== '' && this.password !== null) {
//   //     const request: loginRequest = { username: this.username, password: this.password};
//   //
//   //     this.authService.signin(request).subscribe((result)=> {
//   //       //this.router.navigate(['/home']);
//   //       this.router.navigateByUrl('home');
//   //     }, () => {
//   //       this.error = 'Either invalid credentials or something went wrong';
//   //     });
//   //   } else {
//   //     this.error = 'Invalid Credentials';
//   //   }
//   // }
//
//   reloadPage(): void {
//     window.location.reload();
//   }
//
//
//
// public doFuck (){
//   const { username, password } = this.form;
//
//   this.authService.loginr(username, password).subscribe()
//
// }
//
//   public loginr(): void {
//     const { username, password } = this.form;
//     this.authService.loginr(username, password).subscribe({
//       next: data => {
//         // Do something with the response data
//       },
//       error: err => {
//         // Handle error
//       }
//     });
//   }
//




  public FinalLogin(){
    const { username, password } = this.form;

    this.authService.Youtyou(username, password).subscribe(
      (response : any)=>{
        console.log("  the response is  "+ JSON.stringify(response.accessToken));
        console.log(" \n the role is  is  "+ JSON.stringify(response.roles));
        console.log(" \n the hole object   is  "+ JSON.stringify(response));


        this.userS.setRoles(response.roles);



        alert("the respanse is    :  "+ JSON.stringify(response));

        this.userS.setToken(response.accessToken);
        localStorage.setItem("id", response.id);
        localStorage.setItem("username", response.username);
        localStorage.setItem("email", response.email);
        console.log(" \n \n now the token is   "+ this.userS.getToken())

        console.log(" \n \n now the role is   "+ this.userS.getRoles())

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
      }


    )
  }
}
