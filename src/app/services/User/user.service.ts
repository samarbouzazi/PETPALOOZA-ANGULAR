import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8888';
const USER_KEY = 'bara123456789';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

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



  public isLoggedIn() {
    return this.getToken() && this.getRoles();
  }



  public getID(){

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



  // public isLoggedInTwo(): boolean {
  //   const user = window.localStorage.getItem(USER_KEY);
  //   if (user) {
  //     return true;
  //   }
  //
  //   return false;
  // }


  // if(this.getRoles() !=null && this.getToken() != null){
  //   return true;
  // }
  // return false



  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserTwo(): any {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : {};
    return user;
  }


  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
