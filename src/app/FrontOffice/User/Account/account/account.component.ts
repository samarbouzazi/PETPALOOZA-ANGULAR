import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../../../services/User/storage.service";
import {UserService} from "../../../../services/User/user.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser: any;

  user: any;

  constructor(private storageService: StorageService,  private userS: UserService) { }

  ngOnInit(): void {

    this.currentUser = this.userS.getUser();
    //  this.user = this.userS.getUserTwo();
    //  }
  }
}
