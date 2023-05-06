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


  username:any;
  user: any;

  constructor(private userS: UserService) { }

  ngOnInit(): void {

 //   this.currentUser = this.userS.getUser();
    this.currentUser = this.userS.getUserID();
    console.log("the is is \n "+ this.currentUser)
    const id = localStorage.getItem("id");
    const username = localStorage.getItem("username");

    console.log("The fucking id is \n "+ id);
    console.log("The username is \n "+ username);
    console.log(" \n the current user ishhhhhhhhhh "+ this.currentUser);

  }



}
