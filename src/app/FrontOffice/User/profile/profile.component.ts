import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../../services/User/storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
 // loggedUser: any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();

   // this.loggedUser = this.storageService.getUser();
  }
}
