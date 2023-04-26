import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  event: Event = new Event();

  constructor(private EventService: EventService,
    private router: Router, private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  types : string[] = ['DON', 'VACCINATION','SENSIBILISATION'];

  saveEvent(){
    this.EventService.createEvent(this.event).subscribe( data =>{
      console.log(data);
      this.toastr.success("L'evenement est ajouté avec succes");
      this.goToEventist();
    
    },
    error => console.log(error));
  }

  goToEventist(){
    this.router.navigate(['/events']);
  }
  
  onSubmit(){
    console.log(this.event);
    this.saveEvent();
  }
}