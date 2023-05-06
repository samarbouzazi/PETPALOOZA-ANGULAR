// import {Component, OnInit} from '@angular/core';
// import {AuthService} from "../../../services/User/auth.service";
// import {Router} from "@angular/router";
//
// export interface Register {
//
//
//   username: string;
//   password: string;
//   email:string;
//   roles?: string[];
//   firstName:string;
//   lastName:string;
//   occupation:string;
//   birthDate :Date;
//
//
//
// }
//
//
//
//
//
// import Swal from 'sweetalert2';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent  implements OnInit{
//   constructor(private authService: AuthService , private  router: Router) { }
//   error: string = '';
//   username: string = '';
//   password: string = '';
//   email:string='';
//   firstName:string='';
//   lastName:string='';
//   occupation:string='';
//   birthDate=new Date();
//
//   user_roles: any = [
//     {name:'User', value:'ROLE_USER', selected: false},
//     {name:'Admin', value:'ROLE_ADMIN', selected: false},
//     {name:'Anonymous', value:'ROLE_ANONYMOUS', selected: false},
//   ]
//
//   selectedRoles: string[] = [];
//
//   success: string = '';
//
//   ngOnInit(): void {
//   }
//
//   onChangeCategory(event: any, role: any) {
//     this.selectedRoles.push(role.value);
//   }
//   doSignup() {
//     if (this.username !== '' && this.username !== null && this.password !== '' && this.password !== null) {
//       const request: Register = {
//         username: this.username,
//         password: this.password,
//         email: this.email,
//         firstName: this.firstName,
//         lastName: this.lastName,
//         occupation: this.occupation,
//         birthDate: this.birthDate
//       };
//
//       this.authService.registerTWO(request).subscribe(
//         (result) => {
//           this.success = result;
//           console.log("the email is " + this.email);
//           var emailss = this.email;
//           Swal.fire({
//             title: 'Success!',
//             html: `You have successfully joined our community. Please verify your email address to activate your account: <a href="https://mail.google.com/mail/u/0/#inbox?compose=new&to=${this.email}">${this.email}</a>`,
//             icon: 'success',
//             showConfirmButton: true
//           });
//           this.authService.SendVificationEmail(this.email).subscribe(
//             sec => {
//               Swal.fire({
//                 title: 'Success!',
//                 html: `You have successfully joined our community. Please verify your email address to activate your account: <a href="mailto:${this.email}">${this.email}</a>`,
//                 icon: 'success',
//                 timer: 2000,
//                 showConfirmButton: false
//               });
//             },
//             (error) => {
//               if (error.status === 555) {
//                 const username = this.username;
//                 this.username = '';
//                 Swal.fire({
//                   title: 'Error!',
//                   text: `Username '${username}' is already in use. Please choose another username.`,
//                   icon: 'error',
//                   confirmButtonText: 'OK'
//                 });
//               }
//
//
//               else {
//                 Swal.fire({
//                   title: 'Error!',
//                   text: 'never mmind .',
//                   icon: 'error',
//                   confirmButtonText: 'OK'
//                 });
//               }
//             }
//           );
//         },
//         (error) => {
//
//
//           if (error.status === 498) {
//             const username = this.username;
//             this.username = '';
//             Swal.fire({
//               title: 'Error!',
//               text: `Username '${username}' is already in use. Please choose another username.`,
//               icon: 'error',
//               confirmButtonText: 'OK'
//             });
//           } else if (error.status === 498) {
//             const email = this.username;
//             this.email = '';
//             Swal.fire({
//               title: 'Error!',
//               text: `Email '${email}' is already in use. Please choose another email or veifiy if your already sigined up .`,
//               icon: 'error',
//               confirmButtonText: 'OK'
//             });
//           } else {
//             Swal.fire({
//               title: 'Error!',
//               text: 'An error occurred. Please try again later.',
//               icon: 'error',
//               confirmButtonText: 'OK'
//             });
//           }
//         }
//       );
//     }
//   }}

import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/User/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";


export interface Register {


  username: string;
  password: string;
  email:string;
  roles?: string[];
  firstName:string;
  lastName:string;
  occupation:string;
  birthDate :Date;


 }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {
  constructor(private authService: AuthService, private router: Router, private activeRoute: ActivatedRoute) {
  }
  retypePassword:string='';


  error: string = '';
  username: string = '';
  password: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  occupation: string = '';
  birthDate = new Date();

  user_roles: any = [
    {name: 'User', value: 'ROLE_USER', selected: false},
    {name: 'Admin', value: 'ROLE_ADMIN', selected: false},
    {name: 'Anonymous', value: 'ROLE_ANONYMOUS', selected: false},
  ]

  selectedRoles: string[] = [];

  success: string = '';

  ngOnInit(): void {
  }


  onChangeCategory(event: any, role: any) {
    this.selectedRoles.push(role.value);
  }
  doSignup() {
    if (this.username !== '' && this.username !== null && this.password !== '' && this.password !== null) {
      const request: Register = { username: this.username, password: this.password, email: this.email, firstName: this.firstName, lastName: this.lastName, occupation: this.occupation, birthDate: this.birthDate };

      this.authService.registerTWO(request).subscribe(

        (result) => {


          this.success = result;
          console.log("the email is " + this.email);
          var emailss = this.email;
          this.authService.SendVificationEmail(this.email).subscribe(
            sec=>{
              Swal.fire({
                title: 'Welcome To our community , only one step more ',
                text: `please check your email inbox to activate your account .`,
                icon: 'success',
                confirmButtonText: 'OK'
              });

            //  alert("email have been sent !!")
              this.router.navigate(['/login'])
            },

            err=>{
              alert("somme error ")
            })
        },
        (error) => {



          if (error.status === 499) {
            const username = this.username;
            this.username = '';
            Swal.fire({
              title: 'Error!',
              text: `Username '${username} '  is already in use. Please choose another username.`,
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
          else if (error.status === 498) {
            const email = this.email;
            this.email = '';
            Swal.fire({
              title: 'Error!',
              text: `Email '${email}' is already in use. Please choose another email or verify if your already sigined up .`,
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }

          else {
            Swal.fire({
              title: 'Error!',
              text: 'An error occurred. Please try again later.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        }
      );
    }
  }



}
