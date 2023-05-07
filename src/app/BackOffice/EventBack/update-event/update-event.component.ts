import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/Event';
import { eventService } from 'src/app/services/Evenement/event.service';
@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  id!: number;
  event: Event= new Event();
  constructor(private eventService: eventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.eventService.getEventById(this.id).subscribe(data => {
      this.event = data;
    }, error => console.log(error));
  }

  onSubmit(){
    
    this.eventService.updateEvent(this.event,this.id).subscribe( data =>{
      let R=confirm("Are you sure?!?")
      if(R){
        this.goToEventList();
      }
      
      
    }
    , error => console.log(error));
  }

  goToEventList(){
    this.router.navigate(['/events']);
    
  }
  types : string[] = ['DON', 'VACCINATION','SENSIBILISATION'];
}