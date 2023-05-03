import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/User/user.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser: any;
  id!:number;

  user: any;

  constructor(private userS: UserService) { }

  ngOnInit(): void {

    this.currentUser = this.userS.getUser();

    const id = localStorage.getItem("id");
    console.log("The fucking id is \n "+ id);

    console.log(" \n the current user ishhhhhhhhhh "+ this.currentUser);
// =======
//     this.currentUser = this.storageService.getUser();
//
//     this.id=this.currentUser.id;
//     console.log("the id of the current user is "+this.id);
//
// >>>>>>> main
  }



}
