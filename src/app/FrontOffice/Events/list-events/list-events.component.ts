import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Event } from 'src/app/models/Event';
import { eventService } from 'src/app/services/Evenement/event.service';


@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  

  events! : Event[]
  constructor(private eventService : eventService , private _sanitizer : DomSanitizer){}
  
  ngOnInit(): void {
    this.getAllAnimals();
  }

  getAllAnimals(){
    this.eventService.getEventsList().subscribe(res => {
      
      this.events= res
      console.log(res)
    })
  }
name:any;

  Search()
  {
    if(this.name=="")
    {
      this.getAllAnimals();
    }
    else 
    {
      this.events = this.events.filter(res => {
        return res.titre && res.titre.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }



  convert(base64String : any){
    console.log(this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String))
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String);
  }






}
