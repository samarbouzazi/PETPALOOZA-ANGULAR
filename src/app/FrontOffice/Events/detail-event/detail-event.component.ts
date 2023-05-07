import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { eventService } from 'src/app/services/Evenement/event.service';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {

  event!:any;
  numEvent!: any;
  titre!: string;
  type!: string;
  description!: string;
  location!: string;
  maxParticipants!: number;
  dateDebut!: Date;
  dateFin!: Date;
  owner!: any;
  interestedUsers!: any[];
  participants!: any[];
  image!:any;

  ids:any;
  constructor(private service : eventService , private router:ActivatedRoute, private route: Router){}

  ngOnInit(): void {
    this.numEvent=this.router.snapshot.paramMap.get('id');
    this.ids= localStorage.getItem("id");
    console.log('\n the id is : '+ this.ids);

    this.service.getEventById(this.numEvent).subscribe(res =>{
      console.log(res)
      this.event=res;
    })

  }
  addInteressted(){

    this.service.addInteressted(this.numEvent,this.ids).subscribe(res=>console.log(res))
    //window.location.reload()
}
  
}
