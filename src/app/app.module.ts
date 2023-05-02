import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAnimalComponent } from './FrontOffice/Animals/add-animal/add-animal.component';
import { ViewAnimalsComponent } from './FrontOffice/Animals/view-animals/view-animals.component';
import { UpdateAnimalComponent } from './FrontOffice/Animals/update-animal/update-animal.component';

import { FooterComponent } from './FrontOffice/shared/footer/footer.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { LoginComponent } from './FrontOffice/User/login/login.component';
import { RegisterComponent } from './FrontOffice/User/register/register.component';
import { NavbarComponent } from './BackOffice/navbar/navbar.component';
import { FooterBackEndComponent } from './BackOffice/footerBackEnd/footer-back-end/footer-back-end.component';
import { AdminBoardComponent } from './BackOffice/admin-board/admin-board.component';
import { AccountComponent } from './FrontOffice/User/Account/account/account.component';
import { HeaderComponent } from './FrontOffice/shared/header/header.component';
import { CreateEventComponent } from './BackOffice/EventBack/create-event/create-event.component';
import { ListEventComponent } from './BackOffice/EventBack/list-event/list-event.component';
import { UpdateEventComponent } from './BackOffice/EventBack/update-event/update-event.component';



@NgModule({
    declarations: [
        AppComponent,
        AddAnimalComponent,
        ViewAnimalsComponent,
        UpdateAnimalComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavbarComponent,
      FooterBackEndComponent,
      AdminBoardComponent,
      AccountComponent,
      CreateEventComponent,
      ListEventComponent,
      UpdateEventComponent,
      
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
