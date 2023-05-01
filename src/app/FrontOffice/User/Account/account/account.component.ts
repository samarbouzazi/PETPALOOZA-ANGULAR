import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../../../services/User/storage.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser: any;
  id!:number;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();

    this.id=this.currentUser.id;
    console.log("the id of the current user is "+this.id);

  }


  
}
