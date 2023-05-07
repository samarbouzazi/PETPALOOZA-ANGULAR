import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Event } from 'src/app/models/Event';
import { eventService } from 'src/app/services/Evenement/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latestEvents!: Event[];


  constructor(private eventService: eventService, private _sanitizer : DomSanitizer) {}

  ngOnInit(): void {
    this.eventService.getEvents3().subscribe(
      events => {
        this.latestEvents = events;
      },
      error => {
        console.log('Error fetching events:', error);
      }
    );
  }

  convert(base64String : any){
    console.log(this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String))
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String);
  }


}
