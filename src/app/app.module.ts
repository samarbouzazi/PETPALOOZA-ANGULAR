import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddAnimalComponent } from './FrontOffice/Animals/add-animal/add-animal.component';
import { FooterComponent } from './FrontOffice/shared/footer/footer.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { LoginComponent } from './FrontOffice/User/login/login.component';
import { RegisterComponent } from './FrontOffice/User/register/register.component';
import { NavbarComponent } from './BackOffice/navbar/navbar.component';
import { FooterBackEndComponent } from './BackOffice/footerBackEnd/footer-back-end/footer-back-end.component';
import { AdminBoardComponent } from './BackOffice/admin-board/admin-board.component';
import { AccountComponent } from './FrontOffice/User/Account/account/account.component';
import { HeaderComponent } from './FrontOffice/shared/header/header.component';

import { CreateOffreComponent } from './BackOffice/offreback/create-offre/create-offre.component';
import { ListOffreComponent } from './BackOffice/offreback/list-offre/list-offre.component';
import { UpdateOffreComponent } from './BackOffice/offreback/update-offre/update-offre.component';

import { ViewAnimalsComponent } from './FrontOffice/Animals/view-animals/view-animals.component';
import { DetailsComponent } from './FrontOffice/Animals/details/details.component';
import { UpdateAnimalComponent } from './FrontOffice/Animals/update-animal/update-animal.component';
import { AddAnimalBackComponent } from './BackOffice/AnimalsbBack/add-animal-back/add-animal-back.component';
import { ViewAnimalBackComponent } from './BackOffice/AnimalsbBack/view-animal-back/view-animal-back.component';
import { UpdateAnimalBackComponent } from './BackOffice/AnimalsbBack/update-animal-back/update-animal-back.component';

import { ListEventsComponent } from './FrontOffice/Events/list-events/list-events.component';
import { DetailEventComponent } from './FrontOffice/Events/detail-event/detail-event.component';
import { CreateEventComponent } from './BackOffice/EventBack/create-event/create-event.component';
import { ListEventComponent } from './BackOffice/EventBack/list-event/list-event.component';
import { UpdateEventComponent } from './BackOffice/EventBack/update-event/update-event.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgxPaginationModule } from 'ngx-pagination';

import { RdvListComponent } from './FrontOffice/rdv/rdv-list/rdv-list.component';
import { ListRdvComponent } from './BackOffice/rdvBack/list-rdv/list-rdv.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';






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
      CreateEventComponent,
      CreateOffreComponent,
      ListOffreComponent,
      UpdateOffreComponent,
      ListEventComponent,
      UpdateEventComponent,
      ViewAnimalsComponent,
      DetailsComponent,
      UpdateAnimalComponent,
      AddAnimalBackComponent,
      ViewAnimalBackComponent,
      RdvListComponent,
      ListRdvComponent,    
      
      UpdateAnimalBackComponent,
      ListEventsComponent,
      DetailEventComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    NgxPaginationModule

    NgxQRCodeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
