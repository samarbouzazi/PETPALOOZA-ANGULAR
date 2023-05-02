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

import { CreateEventComponent } from './BackOffice/EventBack/create-event/create-event.component';
import { ListEventComponent } from './BackOffice/EventBack/list-event/list-event.component';
import { UpdateEventComponent } from './BackOffice/EventBack/update-event/update-event.component';
import { UpdateAnimalComponent } from './FrontOffice/Animals/update-animal/update-animal.component';
import { DetailsComponent } from './FrontOffice/Animals/details/details.component';
import { ViewAnimalsComponent } from './FrontOffice/Animals/view-animals/view-animals.component';


const routes: Routes = [

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path:'', component:HomeComponent, pathMatch:'full'},
  { path: 'unauthorized', component: UnauthorizedComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },






    {path:'admin', component:AdminBoardComponent},
    {path: 'events', component: ListEventComponent},
    {path: 'create-event', component: CreateEventComponent},
    {path: 'update-event/:id', component: UpdateEventComponent},




//{ path: 'test', loadChildren: () => import('../app/BackOffice/admin-board/admin-board.component').then(m => m.AdminBoardComponent), canLoad: [AuthGuardService] },
{path:'test', component:AdminBoardComponent},
 //  {
 //    path: 'test',
 //    loadChildren: () => import('../app/BackOffice/admin-board/admin-board.component').then(m => m.AdminBoardComponent),
 //    canActivate: [AuthGuardService]
 //  },
 //  {
 //    path: 'test',
 //    component: AdminBoardComponent,
 //    canActivate: [ AuthGuardService ]

 //  },

  { path : "animals" , component : ViewAnimalsComponent },
  { path : "animals/add" , component : AddAnimalComponent },
  { path : "UpdateAnimale/:id" , component : UpdateAnimalComponent },
  { path : "detailsAnimal/:id" , component : DetailsComponent },
];
// =======
//   { path: '', component: HomeComponent },
//   { path: 'account', component: AccountComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   {path:'navbar', component:NavbarComponent},
//   //event
//
//   //Animal
// >>>>>>> main
//   { path : "animals" , component : ViewAnimalsComponent },
//   { path : "animals/add" , component : AddAnimalComponent },
//   { path : "UpdateAnimale/:id" , component : UpdateAnimalComponent },
//   { path : "detailsAnimal/:id" , component : DetailsComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
