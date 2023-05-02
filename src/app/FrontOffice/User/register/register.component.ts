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
  doSignup() {}
}
