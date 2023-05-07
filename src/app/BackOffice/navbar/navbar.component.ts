import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../../services/User/auth.service";
import {Router} from "@angular/router";

import {UserService} from "../../services/User/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  //username?: string;

  currentUser: any;
  username!:string;


  eventBusSub?: Subscription;

  constructor(
    private  userS: UserService,
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit(): void {


    const username = localStorage.getItem("username");
console.log("the username is \n "+ username);
    // this.isLoggedIn = this.storageService.isLoggedIn();
    //
    // if (this.isLoggedIn) {
    //   const user = this.storageService.getUser();
    //   this.roles = user.roles;
    //
    //   this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    //   this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
    //
    //   this.username = user.username;
    // }

    // this.eventBusSub = this.eventBuService.on('logout', () => {
    //   this.logout();
    // });
  }


  getUsername(){
    return this.username;
  }



  doSignout(){




    this.userS.signout()


  }
  


}
