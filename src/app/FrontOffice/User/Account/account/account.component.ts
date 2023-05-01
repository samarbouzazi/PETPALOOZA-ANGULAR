import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/User/user.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser: any;

  user: any;

  constructor(private userS: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.userS.getUser();
  }
}
