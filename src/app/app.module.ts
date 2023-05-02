import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "./BackOffice/navbar/navbar.component";
import {FooterBackEndComponent} from "./BackOffice/footerBackEnd/footer-back-end/footer-back-end.component";
import { AdminBoardComponent } from './BackOffice/admin-board/admin-board.component';
import { AccountComponent } from './FrontOffice/User/Account/account/account.component';
import {UserListComponent} from "./FrontOffice/User/userCrud/user-list/user-list.component";
import {HttpRequestInterceptor} from "./services/User/_helpers/http.interceptor";
import { UnauthorizedComponent } from './FrontOffice/User/unauthorized/unauthorized.component';
import {AuthGuardService} from "./FrontOffice/User/auth-guard.service";
import {AuthService} from "./services/User/auth.service";
import { UsesComponentComponent } from './BackOffice/UserBackend/uses-component/uses-component.component';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {AddAnimalComponent} from "./FrontOffice/Animals/add-animal/add-animal.component";
import {HeaderComponent} from "./FrontOffice/shared/header/header.component";
import {FooterComponent} from "./FrontOffice/shared/footer/footer.component";
import {HomeComponent} from "./FrontOffice/home/home.component";
import {LoginComponent} from "./FrontOffice/User/login/login.component";
import {RegisterComponent} from "./FrontOffice/User/register/register.component";
import {CreateEventComponent} from "./BackOffice/EventBack/create-event/create-event.component";
import {ListEventComponent} from "./BackOffice/EventBack/list-event/list-event.component";
import {UpdateEventComponent} from "./BackOffice/EventBack/update-event/update-event.component";
import {ViewAnimalsComponent} from "./FrontOffice/Animals/view-animals/view-animals.component";
import {DetailsComponent} from "./FrontOffice/Animals/details/details.component";
import {UpdateAnimalComponent} from "./FrontOffice/Animals/update-animal/update-animal.component";





@NgModule({
    declarations: [
        AppComponent,
        AddAnimalComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavbarComponent,
      FooterBackEndComponent,
      AdminBoardComponent,
      AccountComponent,

      UserListComponent,
      UnauthorizedComponent,
      UsesComponentComponent,

      CreateEventComponent,
      ListEventComponent,
      UpdateEventComponent,
      ViewAnimalsComponent,
      DetailsComponent,
      UpdateAnimalComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },  AuthGuardService , AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
