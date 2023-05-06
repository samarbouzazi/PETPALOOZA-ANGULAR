import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { Event } from 'src/app/models/Event';
import { eventService } from 'src/app/services/Evenement/event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  p!: number;
  pageSize = 10;
  key = 'titre';
  reverse = false;
 
  currentPage = 1;

  event: Event[] = [];
  totalItems = 0;
  searchQuery: any = {
    title: '',
    type: '',
    location: '',
    startDate: null,
    endDate: null
  };
  private ngUnsubscribe = new Subject();

  constructor(private eventService: eventService, private router: Router) { }

  ngOnInit(): void {
    this.search();
  }




  search() {
    this.eventService.searchEvents(this.searchQuery).subscribe(
      response => {
        this.event = response;
        this.totalItems = response.length;
        this.currentPage = 1;
      },
      error => {
        console.log(error);
      }
    );
  }

  resetSearch() {
    this.searchQuery = {
      title: '',
      type: '',
      location: '',
      startDate: null,
      endDate: null
    };
    this.eventService.getAll().subscribe(
      response => {
        this.event = response;
        this.totalItems = response.length;
        this.currentPage = 1;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateEvent(id: number){
    this.router.navigate(['update-event', id]);
  }

  deleteEvent(id: number){
    let R= confirm(" Are you Sure?!")
    if (R){

   
    this.eventService.deleteEvent(id).subscribe( data => {
      ()=>alert('delete succeed!')
      console.log(data);
      this.search();
      
    }); }

  }

  exportPdf() {
    this.eventService.exportPdf().subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url);
    });
  }
  sortColumn!: string;

  sort(sortColumn: string) {
    if (this.sortColumn === sortColumn) {
      this.reverse = !this.reverse;
    } else {
      this.sortColumn = sortColumn;
      this.reverse = false;
    }
  
    this.event = this.event.sort((a: any, b: any) => {
      if (a[sortColumn] < b[sortColumn]) {
        return this.reverse ? 1 : -1;
      } else if (a[sortColumn] > b[sortColumn]) {
        return this.reverse ? -1 : 1;
      } else {
        return 0;
      }
    });
  }


  sort2(sortColumn: string) {
    if (this.sortColumn === sortColumn) {
      this.reverse = !this.reverse;
    } else {
      this.sortColumn = sortColumn;
      this.reverse = false;
    }
  
    this.event = this.event.sort((a: any, b: any) => {
      let comparison = 0;
      if (sortColumn === 'description') {
        comparison = a.description.localeCompare(b.description);
      } else if (sortColumn === 'maxParticipants') {
        comparison = a.maxParticipants - b.maxParticipants;
      } else if (sortColumn === 'startDate') {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        comparison = dateA.getTime() - dateB.getTime();
      } else if (sortColumn === 'endDate') {
        const dateA = new Date(a.endDate);
        const dateB = new Date(b.endDate);
        comparison = dateA.getTime() - dateB.getTime();
      }
      return this.reverse ? comparison * -1 : comparison;
    });
  }
  
}
