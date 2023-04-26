import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './component/event/create-event/create-event.component';
import { UpdateEventComponent } from './component/event/update-event/update-event.component';
import { ListEventComponent } from './component/event/list-event/list-event.component';
import { DetailEventComponent } from './component/event/detail-event/detail-event.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastNoAnimationModule } from 'ngx-toastr/public_api';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    UpdateEventComponent,
    ListEventComponent,
    DetailEventComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
     BrowserAnimationsModule,
    ToastrModule.forRoot(
      {timeOut:10000000,
        progressBar:true,
        progressAnimation: 'increasing',
        preventDuplicates: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
