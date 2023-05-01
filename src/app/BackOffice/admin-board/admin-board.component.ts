import {Component, OnInit} from '@angular/core';
import {User} from "../../Models/user";
import {UserCrudService} from "../../services/User/user-crud.service";
import {Observable} from "rxjs";
import {UserListComponent} from "../../FrontOffice/User/userCrud/user-list/user-list.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-board',

  templateUrl:'./admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent  implements  OnInit{
  users!: User[];

  ngOnInit(): void {



  }

  constructor(private usersCrud: UserCrudService, private  http:HttpClient , private  route: Router) {
    this.usersCrud.getListOfUser().subscribe(data => {
      this.users = data;
    });
  }


  public getUsers(){
    this.usersCrud.getListOfUser().subscribe(data => {
      this.users = data;
    });
  }


  // public getAll() :Observable<User[]> {
  //   const url = "http://localhost:8888/admin/user/list";
  //   const headers = new HttpHeaders({
  //     Authorization: "Bearer " + btoa("user:bara123456789")
  //   });
  //   return this.http.get<User[]>(url, { headers });
  // }

  //





  deleteUserS(id: number){
    this.usersCrud.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }

  blockUser(id: number){
    this.usersCrud.blockUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }



}
