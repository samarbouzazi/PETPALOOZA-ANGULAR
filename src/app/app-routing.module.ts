import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAnimalsComponent } from './FrontOffice/Animals/view-animals/view-animals.component';
import { AddAnimalComponent } from './FrontOffice/Animals/add-animal/add-animal.component';
import { HomeComponent } from './FrontOffice/home/home.component';

const routes: Routes = [
  { path : "home" , component : HomeComponent},
  { path : "animals" , component : ViewAnimalsComponent },
  { path : "animals/add" , component : AddAnimalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }