import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAnimalsComponent } from './FrontOffice/Animals/view-animals/view-animals.component';
import { AddAnimalComponent } from './FrontOffice/Animals/add-animal/add-animal.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import {LoginComponent} from "./FrontOffice/User/login/login.component";
import {RegisterComponent} from "./FrontOffice/User/register/register.component";

import {NavbarComponent} from "./BackOffice/navbar/navbar.component";
import {AdminBoardComponent} from "./BackOffice/admin-board/admin-board.component";
import {AccountComponent} from "./FrontOffice/User/Account/account/account.component";

const routes: Routes = [

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path:'', component:HomeComponent, pathMatch:'full'},
  { path: '', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'navbar', component:NavbarComponent},
  { path : "animals" , component : ViewAnimalsComponent },
  { path : "animals/add" , component : AddAnimalComponent },
  {path:'admin', component:AdminBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
