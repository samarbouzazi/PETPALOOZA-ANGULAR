import {Component, OnInit} from '@angular/core';
import {User} from "../../Models/user";
import {UserCrudService} from "../../services/User/user-crud.service";
import {Observable} from "rxjs";
import {UserListComponent} from "../../FrontOffice/User/userCrud/user-list/user-list.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";



export interface Role {
  id: number;
  roleName: string;
}


@Component({
  selector: 'app-admin-board',

  templateUrl:'./admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})

export class AdminBoardComponent  implements  OnInit{
  users!: User[];
  userID!:number;

  userRoles!: Role[];
  ngOnInit(): void {
    this.getUsers();
    //this.getUserRoles(this.userID);

  }

  constructor(private usersCrud: UserCrudService, private  http:HttpClient , private  route: Router) {
    this.usersCrud.getListOfUser().subscribe(data => {
      this.users = data;
    });

   // this.userID = 2; // Initialize userID with a default value

  }





  public getUsers(){
    this.usersCrud.getListOfUser().subscribe(data => {
      this.users = data;
    });

  }
//////
//   getUserRoles(idUser2:number): Role[] {
//     let roles: Role[] = [];
//     this.usersCrud.getUserRoles(idUser2).subscribe(
//
//       roles => {
//         this.userRoles = roles;
//         console.log("role is for user 4 " +  JSON.stringify( roles ))
//       },
//       error => {
//         console.log('Error fetching roles for user', error);
//       }
//     );
//   }
/////
  getUserRoles(idUser2: number): Role[] {
    let roles: Role[] = [];
    this.usersCrud.getUserRoles(idUser2).subscribe(
      data => {
        roles = data;
        console.log("Roles for user " + idUser2 + ": " + JSON.stringify(data));
      },
      error => {
        console.log('Error fetching roles for user', error);
      }
    );
    return roles;
  }






  deleteUserS(id: number){
    this.usersCrud.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }

  blockUser(id: number) {
    this.usersCrud.blockUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    })
  }}
