import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Router} from "@angular/router";

const API_URL = 'http://localhost:8888';
const USER_KEY = 'bara123456789';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private  router: Router) {}



  public setRoles(roles:[]){
    localStorage.setItem("roles", JSON.stringify(roles));
  }
  public getRoles(): string[] {
    const rolesJson = localStorage.getItem('roles');
    const roles = rolesJson ? JSON.parse(rolesJson) : [];
    return roles;
  }


  public setToken(jwtToken: string){
    localStorage.setItem("accessToken", jwtToken)
  }

  public getToken(): string {
    const token = localStorage.getItem("accessToken");
    if (token === null) {
      throw new Error("jwtToken is null");
    }
    return token;
  }


  public clear(){
    localStorage.clear();
  }




  public isLoggedIn(): boolean {
    const token = this.getToken();
    const roles = this.getRoles();
    return !!(token && roles);
  }


/////////////////


  ////////////







  public getUserID(): any {
    const id = localStorage.getItem("id");
   return id;
  }





  signout() {
    //localStorage.clear();
    // localStorage.removeItem('accessToken');
    // localStorage.removeItem('token');

    localStorage.clear();
    this.router.navigateByUrl('/login');
  }




  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserTwo(): any {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : {};
    return user;
  }



  public getUser(): any {
    const id = localStorage.getItem("id");
    const username= localStorage.getItem("username");
    const email= localStorage.getItem("email");
    const token = localStorage.getItem("accessToken");
    console.log("token 0"+ token);
    console.log("\n  id is "+ id);
    console.log("\n unsername   "+ username);
    console.log("\n email  "+ email);
    return { id, username, email };
  
  
  }

}
