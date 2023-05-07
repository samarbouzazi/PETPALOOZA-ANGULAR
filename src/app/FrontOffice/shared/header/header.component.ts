import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../../../services/User/auth.service";
import {UserService} from "../../../services/User/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private roles: string[] = [];
  isLoggedIn: boolean = false;
  username?: string;
  eventBusSub?: Subscription;    // private storageService: StorageService,


  constructor(
    private authService: AuthService,
    // private eventBusService: EventBusService,
    private  userS: UserService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userS.isLoggedIn();
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
  }


  //
  //   this.eventBusSub = this.eventBusService.on('logout', () => {
  //     this.logout();
  //   });
  // }





  public isLog(){
    return this.userS.isLoggedIn();
  }

  doSignout() {
    this.userS.signout();
  }

  //
  // logout(): void {
  //   this.authService.logout().subscribe({
  //     next: res => {
  //       console.log(res);
  //       this.storageService.clear();
  //
  //       window.location.reload();
  //     },
  //     error: err => {
  //       console.log(err);
  //     }
  //   });
  // }


}
