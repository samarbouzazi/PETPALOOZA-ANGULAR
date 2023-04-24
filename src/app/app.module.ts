import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAnimalComponent } from './FrontOffice/Animals/add-animal/add-animal.component';
import { ViewAnimalsComponent } from './FrontOffice/Animals/view-animals/view-animals.component';
import { UpdateAnimalComponent } from './FrontOffice/Animals/update-animal/update-animal.component';
import { HeaderComponent } from './FrontOffice/shared/header/header.component';
import { FooterComponent } from './FrontOffice/shared/footer/footer.component';
import { HomeComponent } from './FrontOffice/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnimalComponent,
    ViewAnimalsComponent,
    UpdateAnimalComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
