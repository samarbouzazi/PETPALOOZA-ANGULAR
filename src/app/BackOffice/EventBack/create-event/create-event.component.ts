import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/Models/Event';
import { EventService } from 'src/app/services/Evenement/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event: Event = new Event();

  constructor(private EventService: EventService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  types : string[] = ['DON', 'VACCINATION','SENSIBILISATION'];

  saveEvent(){
    // this.EventService.createEvent(this.event).subscribe( data =>{
    //   console.log(data);
      
    //   this.goToEventist();
    
    // },
    // error => console.log(error));
  }

  goToEventist(){
    this.router.navigate(['/events']);
  }
  
  onSubmit(){
    console.log(this.event);
    this.saveEvent();
  }

}
