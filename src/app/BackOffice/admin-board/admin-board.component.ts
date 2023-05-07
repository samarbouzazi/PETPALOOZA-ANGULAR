import {Component, OnInit} from '@angular/core';

import {UserCrudService} from "../../services/User/user-crud.service";
import {Observable, Subscription} from "rxjs";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import Swal from 'sweetalert2';


export interface Role {
  id: number;
  roleName: string;
}


export interface User {
  idUser:number;
  firstName: string;
  lastName : string;
  username  : string;
  email: string;
  birthDate  :Date;
  registrationDate  : Date;
  phone : string;
  occupation : string;
  active : number;
  role :string [];
  numberOfSignal: number;
  address:string;
  userRole?: string;

}


@Component({
  selector: 'app-admin-board',

  templateUrl:'./admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})




export class AdminBoardComponent  implements  OnInit{private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  eventBusSub?: Subscription;


  p: number = 1;
  itempages:number=  8 ;
  totalPages:any;
  users!: User[];
  userID!:number;
  selectedUser: User | null = null;


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

  deleteUserS(id: number){

      this.usersCrud.deleteUser(id).subscribe(data => {
        console.log(data);
        this.getUsers();
      })

  }


  selectUser(user: User) {
    this.selectedUser = user;
  }
  // deleteSelectedUser() {
  //   if (this.selectedUser) {
  //     if (confirm('Are you sure you want to delete this user?')) {
  //       this.deleteUserS(this.selectedUser.idUser);
  //       this.selectedUser = null;
  //     }
  //   }
  // }


  deleteSelectedUser() {
    if (this.selectedUser) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete user!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUserS(this.selectedUser?.idUser!);
          this.selectedUser = null;
          Swal.fire('Deleted!', 'The user has been deleted.', 'success');
        }
      });
    }
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








  blockUser(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, block user!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersCrud.blockUser(id).subscribe((data) => {
          console.log(data);
          this.getUsers();
        });
        Swal.fire('Blocked!', 'The user has been blocked.', 'success');
      }
    });
  }









}
