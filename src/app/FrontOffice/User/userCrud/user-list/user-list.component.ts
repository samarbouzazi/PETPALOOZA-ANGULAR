import {Component, OnInit} from '@angular/core';
import {UserCrudService} from "../../../../services/User/user-crud.service";
import {User} from "../../../../Models/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit{
  ngOnInit(): void {
    this.usersCrud.getListOfUser().subscribe(data => {
      this.users = data;
    });
  }
  users!: User[];

constructor(private usersCrud: UserCrudService) {

}


  // getBooks() {
  //   this.usersCrud.getListOfUser().subscribe(data => {
  //     this.users = data;
  //   });
  // }





}
