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
    return this.http.get(API_URL + '/admin/user/list');
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(API_URL +'/admin/user/delete/'+ id);
  }

  blockUser(id:number): Observable<any> {

return this.http.put(API_URL+'/admin/user/block/'+ id, undefined);
  }









}
