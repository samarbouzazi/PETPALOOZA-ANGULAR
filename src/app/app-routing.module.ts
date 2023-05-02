import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnimalComponent } from './FrontOffice/Animals/add-animal/add-animal.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import {LoginComponent} from "./FrontOffice/User/login/login.component";
import {RegisterComponent} from "./FrontOffice/User/register/register.component";

import {NavbarComponent} from "./BackOffice/navbar/navbar.component";
import {AdminBoardComponent} from "./BackOffice/admin-board/admin-board.component";
import {AccountComponent} from "./FrontOffice/User/Account/account/account.component";

import { CreateOffreComponent } from './BackOffice/offreback/create-offre/create-offre.component';
import { ListOffreComponent } from './BackOffice/offreback/list-offre/list-offre.component';
import { UpdateOffreComponent } from './BackOffice/offreback/update-offre/update-offre.component';

import { CreateEventComponent } from './BackOffice/EventBack/create-event/create-event.component';
import { ListEventComponent } from './BackOffice/EventBack/list-event/list-event.component';
import { UpdateEventComponent } from './BackOffice/EventBack/update-event/update-event.component';
import { UpdateAnimalComponent } from './FrontOffice/Animals/update-animal/update-animal.component';
import { DetailsComponent } from './FrontOffice/Animals/details/details.component';
import { ViewAnimalsComponent } from './FrontOffice/Animals/view-animals/view-animals.component';


const routes: Routes = [

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path:'', component:HomeComponent, pathMatch:'full'},
  { path: '', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'navbar', component:NavbarComponent},
  //event
  {path:'admin', component:AdminBoardComponent},
  {path: 'events', component: ListEventComponent},
  {path: 'create-event', component: CreateEventComponent},
  {path: 'update-event/:id', component: UpdateEventComponent},
  //Animal
  { path : "animals" , component : ViewAnimalsComponent },
  { path : "animals/add" , component : AddAnimalComponent },

  {path:'admin', component:AdminBoardComponent},
  {path: 'addoffre', component:CreateOffreComponent},
  {path: 'offres', component:ListOffreComponent},
  {path: 'view-offres', component:ListOffreComponent},
  {path: 'update-offre/:id', component:UpdateOffreComponent},

  { path : "UpdateAnimale/:id" , component : UpdateAnimalComponent },
  { path : "detailsAnimal/:id" , component : DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
