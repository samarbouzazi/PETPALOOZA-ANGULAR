import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAnimalComponent } from './FrontOffice/Animals/add-animal/add-animal.component';
import { ViewAnimalsComponent } from './FrontOffice/Animals/view-animals/view-animals.component';
import { UpdateAnimalComponent } from './FrontOffice/Animals/update-animal/update-animal.component';
import { HeaderComponent } from './FrontOffice/shared/header/header.component';
import { FooterComponent } from './FrontOffice/shared/footer/footer.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { LoginComponent } from './FrontOffice/User/login/login.component';
import { RegisterComponent } from './FrontOffice/User/register/register.component';
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "./BackOffice/navbar/navbar.component";
import {FooterBackEndComponent} from "./BackOffice/footerBackEnd/footer-back-end/footer-back-end.component";
import { AdminBoardComponent } from './BackOffice/admin-board/admin-board.component';
import { AccountComponent } from './FrontOffice/User/Account/account/account.component';
import {UserListComponent} from "./FrontOffice/User/userCrud/user-list/user-list.component";
import {HttpRequestInterceptor} from "./services/User/_helpers/http.interceptor";

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
      UserListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
