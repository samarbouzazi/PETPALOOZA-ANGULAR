import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnimalComponent } from './FrontOffice/Animals/add-animal/add-animal.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import {LoginComponent} from "./FrontOffice/User/login/login.component";
import {RegisterComponent} from "./FrontOffice/User/register/register.component";

import {NavbarComponent} from "./BackOffice/navbar/navbar.component";
import {AdminBoardComponent} from "./BackOffice/admin-board/admin-board.component";
import {AccountComponent} from "./FrontOffice/User/Account/account/account.component";

import {UnauthorizedComponent} from "./FrontOffice/User/unauthorized/unauthorized.component";
import {AuthGuardService} from "./FrontOffice/User/auth-guard.service";
import { CreateOffreComponent } from './BackOffice/offreback/create-offre/create-offre.component';
import { ListOffreComponent } from './BackOffice/offreback/list-offre/list-offre.component';
import { UpdateOffreComponent } from './BackOffice/offreback/update-offre/update-offre.component';


import { CreateEventComponent } from './BackOffice/EventBack/create-event/create-event.component';
import { ListEventComponent } from './BackOffice/EventBack/list-event/list-event.component';
import { UpdateEventComponent } from './BackOffice/EventBack/update-event/update-event.component';
import { UpdateAnimalComponent } from './FrontOffice/Animals/update-animal/update-animal.component';
import { DetailsComponent } from './FrontOffice/Animals/details/details.component';
import { ViewAnimalsComponent } from './FrontOffice/Animals/view-animals/view-animals.component';

import {ForgetPWDComponent} from "./FrontOffice/User/Account/forget-pwd/forget-pwd.component";
import {Test99Component} from "./FrontOffice/User/Account/VerifyAccount/test99.component";
import { ListJobComponent } from './FrontOffice/offer-job/list-job/list-job.component';
import { AddJobComponent } from './FrontOffice/offer-job/add-job/add-job.component';
import { UpdateJobComponent } from './FrontOffice/offer-job/update-job/update-job.component';
import { SingleJobComponent } from './FrontOffice/offer-job/single-job/single-job.component';
import { AddAnimalBackComponent } from './BackOffice/AnimalsbBack/add-animal-back/add-animal-back.component';
import { ViewAnimalBackComponent } from './BackOffice/AnimalsbBack/view-animal-back/view-animal-back.component';
import { UpdateAnimalBackComponent } from './BackOffice/AnimalsbBack/update-animal-back/update-animal-back.component';
import { ListRdvComponent } from './BackOffice/rdvBack/list-rdv/list-rdv.component';
import { ListEventsComponent } from './FrontOffice/Events/list-events/list-events.component';
import { DetailEventComponent } from './FrontOffice/Events/detail-event/detail-event.component';
import { AppComponent } from './app.component';
const routes: Routes = [

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path:'', component:HomeComponent, pathMatch:'full'},


  { path: '', component: HomeComponent },
  { path: 'unauthorized', component: UnauthorizedComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  //{ path: 'verifyAccountLink', component: RegisterComponent },
  {path :'forgetPWD' ,component: ForgetPWDComponent},

  { path: 'verifyAccountLink', component: Test99Component, pathMatch: 'full' },


  {path:'navbar', component:NavbarComponent},
  //event
  {path:'admin', component:AdminBoardComponent},
  {path: 'events', component: ListEventComponent},
  {path: 'create-event', component: CreateEventComponent},
  {path: 'update-event/:id', component: UpdateEventComponent},
  {path: 'list-events', component:ListEventsComponent},
  {path: 'detail-event/:id', component:DetailEventComponent},
  //Animal

  { path : "animals" , component : ViewAnimalsComponent },
  { path : "animals/add" , component : AddAnimalComponent },
  {path:'admin', component:AdminBoardComponent},
  {path: 'addoffre', component:CreateOffreComponent},
  {path: 'offres', component:ListOffreComponent},
  // {path: 'view-offres', component:ListOffreComponent},
  {path: 'update-offre/:id', component:UpdateOffreComponent},
  { path : "UpdateAnimale/:id" , component : UpdateAnimalComponent },
  { path : "detailsAnimal/:id" , component : DetailsComponent },

  { path : "add-jobOffre" , component : AddJobComponent },
  { path : "list-jobOffre" , component : ListJobComponent },
  { path : "update-jobOffre" , component : UpdateJobComponent },
  { path : "single-jobOffre/:id" , component : SingleJobComponent },
  { path : "animals/add-back" , component :AddAnimalBackComponent},
  { path : "animals/view-animal-back" , component : ViewAnimalBackComponent},
  { path : "update-animal-back/:id" , component : UpdateAnimalBackComponent},
  { path : "appointments/back" , component : ListRdvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
