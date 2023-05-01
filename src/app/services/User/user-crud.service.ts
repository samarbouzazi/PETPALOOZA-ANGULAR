import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8888';

@Injectable({
  providedIn: 'root'
})

export class UserCrudService {
  constructor(private http: HttpClient) {
  }

  getListOfUser(): Observable<any> {
    return this.http.get(API_URL + '/admin/UserList');
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', );
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }


}
