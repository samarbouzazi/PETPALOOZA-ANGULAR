import {Component, OnInit} from '@angular/core';
import {User} from "../../Models/user";
import {UserCrudService} from "../../services/User/user-crud.service";
import {Observable} from "rxjs";
import {UserListComponent} from "../../FrontOffice/User/userCrud/user-list/user-list.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-admin-board',

  templateUrl:'./admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent  implements  OnInit{
  users!: User[];

  ngOnInit(): void {



  }

  constructor(private usersCrud: UserCrudService, private  http:HttpClient) {
    this.usersCrud.getListOfUser().subscribe(data => {
      this.users = data;
    });
  }


  // public getUsers(){
  //   this.usersCrud.getListOfUser().subscribe(data => {
  //     this.users = data;
  //   });
  // }


  // public getAll() :Observable<User[]> {
  //   const url = "http://localhost:8888/admin/user/list";
  //   const headers = new HttpHeaders({
  //     Authorization: "Bearer " + btoa("user:bara123456789")
  //   });
  //   return this.http.get<User[]>(url, { headers });
  // }



}
