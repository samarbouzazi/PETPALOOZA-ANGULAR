import {Component, OnInit} from '@angular/core';
import {UserCrudService} from "../../../../services/User/user-crud.service";
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






}
