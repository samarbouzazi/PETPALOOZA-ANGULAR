import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/User/auth.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {map} from "rxjs/operators";
import Swal from "sweetalert2";
const AUTH_API = 'http://localhost:8888/';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPWDComponent implements OnInit{
  constructor(private authService: AuthService, private route: Router, private http: HttpClient, private acitveRoute: ActivatedRoute) {
  }

  token?:string;

  ngOnInit(): void {
    this.token =  String(this.acitveRoute.snapshot.queryParamMap.get('token'));
    var tt=String(this.acitveRoute.snapshot.queryParamMap.get('token'));
    console.log('the token is ' + this.token);
  }


  changePWD(form: NgForm){
    this.authService.ChangePWD(String(this.token) , form.value.password).subscribe(
      res=> {
        Swal.fire("Congratulation  you have update it your password " )
        this.route.navigateByUrl('/login');
      },
      err=>{
        Swal.fire("Congratulation  you have update it your password  ")

        this.route.navigateByUrl('/login');
      //  Swal.fire('errror', 'error');

      }

    )
    //this.authService.
  }


}





  // email!: string;


//   sendAResetPwdLink(form: NgForm) {
//
//     console.log(form.value.email);
//     this.authService.SendForgetPWD(form.value.email).subscribe(res => {
//       alert("okkk")
//     }, error => {
//       alert("not okk")
//     })
//
//   }
//
//
// }

//
// sendVerifyEmail(){
//   const payload = {
//     email: this.email,
//
//   };
//
//   const headers = new HttpHeaders({'Content-Type': 'application/json'});
// console.log("hereeee is sending")
//   this.http.post(AUTH_API+ 'public/user/forgot_password', payload, {headers: headers})
//     .subscribe(
//       () => {
//
//         console.log("ok send")
//       },
//       () => {
//      console.log("errro")
//       }
//     );
// }
// }

//   ngOnInit(): void {
//     this.token = String(this.acitveRoute.snapshot.paramMap.get('token'));
//   console.log("the token is "+ this.token);
// }
