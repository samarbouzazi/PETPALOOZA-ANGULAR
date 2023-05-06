import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8888';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

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
