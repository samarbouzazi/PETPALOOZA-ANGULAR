import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8888';

export interface RoleT {
  id: number;
  roleName: string;
}

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





  public getUserRoles(userId: number): Observable<RoleT[]> {
    const url = `http://localhost:8888/admin/user/users/${userId}`;
    return this.http.get<RoleT[]>(url);
  }

}
