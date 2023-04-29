import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/User/auth.service";
import {Router} from "@angular/router";
import {Register} from "../../../Models/register";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  constructor(private authService: AuthService , private  router: Router) { }
  error: string = '';
  username: string = '';
  password: string = '';
  email:string='';
  firstName:string='';
  lastName:string='';
  occupation:string='';
  birthDate=new Date();

  user_roles: any = [
    {name:'User', value:'ROLE_USER', selected: false},
    {name:'Admin', value:'ROLE_ADMIN', selected: false},
    {name:'Anonymous', value:'ROLE_ANONYMOUS', selected: false},
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
          Swal.fire({
            title: 'Success!',
            html: `You have successfully joined our community. Please verify your email address to activate your account: <a href="https://mail.google.com/mail/u/0/#inbox?compose=new&to=${this.email}">${this.email}</a>`,
            icon: 'success',
            showConfirmButton: true
          });
          this.authService.SendVificationEmail(this.email).subscribe(
            sec => {
              Swal.fire({
                title: 'Success!',
                html: `You have successfully joined our community. Please verify your email address to activate your account: <a href="mailto:${this.email}">${this.email}</a>`,
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
              });
            },
            (error) => {
              if (error.status === 400) {
                const username = this.username;
                this.username = '';
                Swal.fire({
                  title: 'Error!',
                  text: `Username '${username}' is already in use. Please choose another username.`,
                  icon: 'error',
                  confirmButtonText: 'OK'
                });
              } else {
                Swal.fire({
                  title: 'Error!',
                  text: 'An error occurred. Please try again later.',
                  icon: 'error',
                  confirmButtonText: 'OK'
                });
              }
            }
          );
        },
        (error) => {



          if (error.status === 499) {
            const username = this.username;
            this.username = '';
            Swal.fire({
              title: 'Error!',
              text: `Username '${username}' is already in use. Please choose another username.`,
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
         else if (error.status === 498) {
            const email = this.username;
            this.email = '';
            Swal.fire({
              title: 'Error!',
              text: `Email '${email}' is already in use. Please choose another email or veifiy if your already sigined up .`,
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



  // username:string='';
  // password:string='';
  // firstName:string='';
  // lastName:string='';
  // occupation:string='';
  // birthDate=new Date();
  // phone:string='';
  //

  //
  //
  // // user: User[] = [];
  // constructor(private  authService: AuthServiceService, private route: ActivatedRoute, private router: Router) {
  // }
  // ngOnInit(): void {
  // }
  //
  // doRegister(){
  //   // let user:User = {
  //   //   firstName:null,
  //   //   lastName: null!,
  //   //   passowrd: 0,
  //   //   username: null
  //   // };
  //   //
  //   if(this.username !== '' && this.username !== null && this.password !== '' && this.password !== null && this.firstName!==null) {
  //   const userA:User  = { username: this.username, passowrd: this.password, firstName: this.firstName /*, lastName:this.lastName, occupation:this.occupation, phone:this.phone, birthDate:this.birthDate*/};
  //
  //
  //   this.authService.signup(userA).subscribe((result)=> {
  //     //console.log(result);
  //     //this.success = 'Signup successful';
  //     console.log(result+ "\n");
  //     // this.success = result;
  //     console.log("kkkkkk"+ result+ "\n");
  //
  //     // this.user.push(result);
  //
  //   }, (err) => {
  //     //console.log(err);
  //     alert('Something went wrong during signup');
  //   });
  // }else {
  //   alert("nulll value")}
  // }


}
