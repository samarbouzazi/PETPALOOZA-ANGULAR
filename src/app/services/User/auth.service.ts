


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


  // signup(register: Register): Observable<any> {
  //   return this.http.post<any>(AUTH_API + 'public/register', register,
  //     {
  //       headers: new HttpHeaders({'Content-Type': 'application/json'}),
  //       responseType: 'text' as 'json'
  //     }).pipe(map((resp) => {
  //     return resp;
  //   }));
  // }


  registerTWO(register: Register): Observable<any> {
    return this.http.post(
      AUTH_API + 'public/register',
      register,
      httpOptions
    );
  }

 //  SendVificationEmail(email: string)
 // {
 //   console.log("the email is " + email);
 //    return this.http.post<any>(AUTH_API + '/public/user/sendVerification/?email=' + email,
 //      {
 //        headers: new HttpHeaders({'Content-Type': 'application/json'}),
 //        responseType: 'text' as 'json'
 //      }).pipe(map((resp) => {
 //      return resp;
 //    }));
 //  }



  SendVificationEmail(email:string){  return this.http.post<any>(AUTH_API + 'public/user/sendVerification/?email='+email, email,
    {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {
    return resp;
  }));
  }





  // AccepteVirficationEmail(email: string) {
  //   return this.http.post<any>(AUTH_API + 'public/user/verifyAccountLink/?email=' + email, email,
  //     {
  //       headers: new HttpHeaders({'Content-Type': 'application/json'}),
  //       responseType: 'text' as 'json'
  //     }).pipe(map((resp) => {
  //     return resp;
  //   }));
  // }



  //
  // AccepteVirficationEmail(email: string) {
  //   return this.http.get<any>(AUTH_API + 'public/user/verifyAccountLink/?email=' + email,
  //     {
  //       headers: new HttpHeaders({'Content-Type': 'application/json'}),
  //       responseType: 'text' as 'json'
  //     }).pipe(map((resp) => {
  //     return resp;
  //   }));
  // }



  // AccepteVirficationEmail(email: string) {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   const options = {headers: headers, responseType: 'text' as 'json'};
  //   const body = JSON.stringify({email: email});
  //   //alert("the email is "+ email   +"    and the body is "+ body);
  //   return this.http.post<any>(AUTH_API + 'public/user/verifyAccountLink/?email=',+ email, options).pipe(
  //
  //     map((resp) => {
  //       return resp;
  //     })
  //   );
  // }


  //
  // AccepteVirficationEmail(email: string) {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   const options = {headers: headers, responseType: 'text' as 'json'};
  //   const url = `${AUTH_API}public/user/verifyAccountLink/?email=${email}`;
  //
  //   return this.http.post<any>(url, {}, options).pipe(
  //     map((resp) => {
  //       return resp;
  //     }),
  //     catchError((err) => {
  //       console.log(err); // log the error object to the console
  //       return throwError(err);
  //     })
  //   );
  // }



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


  //
  // AccepteVirficationEmail(email: string) {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   const options = {headers: headers, responseType: 'text' as 'json'};
  //
  //   // concatenate the email parameter to the URL
  //   const url = AUTH_API + 'public/user/verifyAccountLink/?email=' + email;
  //
  //   return this.http.post<any>(url, {}, options).pipe(
  //     map((resp) => {
  //       return resp;
  //     })
  //   );
  // }

  SendForgetPWD(email: string) {
    return this.http.post<any>(AUTH_API + 'public/user/forgot_password/?email=' + email, email,
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
      AUTH_API + 'public/login',
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
