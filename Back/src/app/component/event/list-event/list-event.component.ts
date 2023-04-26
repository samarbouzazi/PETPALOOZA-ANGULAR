import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/models/event';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent implements OnInit {

  event!: Event[];

  constructor(private eventService: EventService,
    private router: Router, private toastr: ToastrService ) { }

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
      this.toastr.error("L'evenement est supprimé avec succes");
      this.getEvents();
     
    })
  }}


