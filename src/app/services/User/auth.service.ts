


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, tap} from 'rxjs';
import {Router} from "@angular/router";
import {Register} from "../../models/register";
import { map } from 'rxjs/operators';
import {NgForm} from "@angular/forms";
const AUTH_API = 'http://localhost:8888';
const USER_KEY = 'bara123456789';

interface bara {
  accessToken: string;
  // other properties here
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private API_URL = 'http://localhost:8888';

  constructor(private http: HttpClient, private router: Router) {
  }

  // login(username: string, password: string): Observable<any> {
  //   return this.http.post(
  //     AUTH_API + '/public/login',
  //     {
  //       username,
  //       password,
  //     },
  //     httpOptions
  //   );
  // }

  //
  // public saveUserF(user: any): void {
  //   sessionStorage.setItem('user', JSON.stringify(user));
  //
  //   // Save the JWT token
  //   sessionStorage.setItem('token', user.accessToken);
  // }


  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/public/register',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }


  // public saveUser(user: any): void {
  //   // window.sessionStorage.removeItem(USER_KEY);
  //   console.log("storage user" + user);
  //
  //   window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  //   console.log("\n window.sessionStorage" + window.sessionStorage);
  //   console.log("the connected user is " + user)
  // }

  //
  // signout() {
  //   sessionStorage.removeItem('user');
  //   sessionStorage.removeItem('token');
  //   sessionStorage.clear();
  //   this.router.navigateByUrl('login');
  // }
  //

  // public getUser(): any {
  //   const user = window.sessionStorage.getItem(USER_KEY);
  //   if (user) {
  //     return JSON.parse(user);
  //   }
  //
  //   return {};
  // }


  signup(register: Register): Observable<any> {
    return this.http.post<any>(AUTH_API + 'public/register', register,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        responseType: 'text' as 'json'
      }).pipe(map((resp) => {
      return resp;
    }));
  }


  registerTWO(register: Register): Observable<any> {
    return this.http.post(
      AUTH_API + '/public/register',
      register,
      httpOptions
    );
  }


  SendVificationEmail(email: string) {
    return this.http.post<any>(AUTH_API + 'public/user/sendVerification/?email=' + email, email,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        responseType: 'text' as 'json'
      }).pipe(map((resp) => {
      return resp;
    }));
  }


  AccepteVirficationEmail(email: string) {
    return this.http.post<any>(AUTH_API + 'public/user/verifyAccountLink/?email' + email, email,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        responseType: 'text' as 'json'
      }).pipe(map((resp) => {
      return resp;
    }));
  }


  // public loginr(username: string, password: string): Observable<any> {
  //   const loginUrl = `${this.API_URL}/public/login`;
  //   return this.http.post<bara>(loginUrl, {username, password})
  //     .pipe(
  //       tap((data: bara) => {
  //         const token = data.accessToken;
  //         this.lo.saveToken(token);
  //       })
  //     );
  //
  // }











  public Login(username: string, password: string) {
    return this.http.post(
      AUTH_API + '/public/login',
      {
        username,
        password,
      },
      httpOptions
    );


  }
  //
  // isLoggedIn(): Observable<boolean> {
  //   const token = localStorage.getItem('token');
  //   return of(token != null);
  // }
  isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem('accessToken');
    return of(!!token); // return an Observable of a boolean value
  }
}
