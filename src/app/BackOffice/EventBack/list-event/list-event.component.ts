import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/Evenement/event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  

  
    event!: Event[];
  
    constructor(private eventService: EventService,
      private router: Router) { }
  
    ngOnInit(): void {
      this.getEvents();
    }
  
    private getEvents(){
      this.eventService.getEventsList().subscribe(data => {
        this.event = data;
      });
    }
  
    // fonctionDetails(id: number){
    //   this.router.navigate(['fonction-details', id]);
    // }
  
    updateEvent(id: number){
      this.router.navigate(['update-event', id]);
    }
  
    deleteEvent(id: number){
      this.eventService.deleteEvent(id).subscribe( data => {
        console.log(data);
        
        this.getEvents();
       
      })
    }

}
