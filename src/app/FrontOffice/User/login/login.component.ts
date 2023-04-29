import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/User/auth.service";
import {StorageService} from "../../../services/User/storage.service";
import {loginRequest} from "./loginRequest";
import {Router} from "@angular/router";
const ROLE_USER = 'ROLE_USER';
const ROLE_ADMIN = 'ROLE_ADMIN';
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



  ///////////////////

  username: string = '';
  password : string = '';

  isSignedin = false;

  error: string = '';

  constructor(private authService: AuthService, private storageService: StorageService, private router:Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
      //  this.reloadPage();

        alert("the role of the logged user is "+ this.roles)
        if(this.roles.includes(ROLE_USER)) {
          this.router.navigateByUrl('profile');
        }
        else{
          this.router.navigateByUrl('admin');
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }




  DoLog(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.authService.saveUser(data);
        console.log("ok  login +data " +data );
        // alert("ress is " + this.authService.getUser());



        this.isSignedin = true;
        // this.roles = this.storageService.getUser().roles;
       // console.log(" \n this.storageService.getUser().roles" + this.authService.getUser());
        // this.reloadPage();
        this.router.navigateByUrl('profile');      },
      error: err => {
        this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
      }
    });
  }


  // doSignin() {
  //   if(this.username !== '' && this.username !== null && this.password !== '' && this.password !== null) {
  //     const request: loginRequest = { username: this.username, password: this.password};
  //
  //     this.authService.signin(request).subscribe((result)=> {
  //       //this.router.navigate(['/home']);
  //       this.router.navigateByUrl('home');
  //     }, () => {
  //       this.error = 'Either invalid credentials or something went wrong';
  //     });
  //   } else {
  //     this.error = 'Invalid Credentials';
  //   }
  // }

  reloadPage(): void {
    window.location.reload();
  }


}
