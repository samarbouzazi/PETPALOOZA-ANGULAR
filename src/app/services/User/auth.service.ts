import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import {Register} from "../../Models/register";
import { map } from 'rxjs/operators';
const AUTH_API = 'http://localhost:8888';
const USER_KEY = 'bara123456789';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router:Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/public/login',
      {
        username,
        password,
      },
      httpOptions
    );
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
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }


  public saveUser(user: any): void {
    // window.sessionStorage.removeItem(USER_KEY);
    console.log("storage user"+ user );

    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    console.log("\n window.sessionStorage"+ window.sessionStorage );
    console.log("the connected user is "+ user)
  }


  signout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.clear();
    this.router.navigateByUrl('login');
  }


  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }


  signup(register: Register): Observable<any> {
    return this.http.post<any>(AUTH_API + 'public/register', register,
      {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {
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



  SendVificationEmail(email:string){  return this.http.post<any>(AUTH_API + 'public/user/sendVerification/?email='+email, email,
    {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {
    return resp;
  }));
  }


  AccepteVirficationEmail(email:string){ return this.http.post<any>(AUTH_API + 'public/user/verifyAccountLink/?email'+email, email,
    {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {
    return resp;
  }));
  }
}
