


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, tap, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {Register} from "../../models/register";
import {catchError, map} from 'rxjs/operators';
import {NgForm} from "@angular/forms";
const AUTH_API = 'http://localhost:8888/';
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

  private API_URL = 'http://localhost:8888/';

  constructor(private http: HttpClient, private router: Router) {
  }



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





  registerTWO(register: Register): Observable<any> {
    return this.http.post(
      AUTH_API + 'public/register',
      register,
      httpOptions
    );
  }





  SendVificationEmail(email:string){  return this.http.post<any>(AUTH_API + 'public/user/sendVerification/?email='+email, email,
    {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {
    return resp;
  }));
  }










  AccepteVirficationEmail(email: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {headers: headers, responseType: 'text' as 'json'};
    const emailEncoded = encodeURIComponent(email);
    const url = `${AUTH_API}public/user/verifyAccountLink/?email=${emailEncoded}`;

    return this.http.post<any>(url, {}, options).pipe(
      map((resp) => {
        return resp;
      }),
      catchError((err) => {
        console.log(err); // log the error object to the console
        return throwError(err);
      })
    );
  }




  SendForgetPWD(email: NgForm) {
    console.log(email);
    return this.http.post<any>(AUTH_API + 'public/user/forgot_password/?email=' + email,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        responseType: 'text' as 'json'
      }).pipe(map((resp) => {
      return resp;
    }));
  }




  ChangePWD(token: string, password:NgForm) {
    console.log("\n the token is :"+token);
    console.log("\n the password is : "+password);
    return this.http.post<any>(AUTH_API + 'public/user/reset_password/?token=' + token +'&password='+ password,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        responseType: 'text' as 'json'
      }).pipe(map((resp) => {
      return resp;
    }));
  }


















  public Login(username: string, password: string) {
    return this.http.post(
      AUTH_API + 'public/login',
      {
        username,
        password,
      },
      httpOptions
    );


  }

  isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem('accessToken');
    return of(!!token); // return an Observable of a boolean value
  }
}
