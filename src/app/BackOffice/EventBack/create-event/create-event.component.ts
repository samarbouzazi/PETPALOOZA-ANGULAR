import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/Event';
import { eventService } from 'src/app/services/Evenement/event.service';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event: Event = new Event();
  imagePath!: File;
  previewImage:any;

  constructor(private EventService: eventService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  types : string[] = ['DON', 'VACCINATION','SENSIBILISATION'];

  // saveEvent(){
  //   this.EventService.createEvent(this.event)
  //   .subscribe( data =>{console
  //     .log(data);
      
  //     this.goToEventist();
    
  //   },
  //   error => console.log(error));
  // }

  saveEvent() {
    const formData = new FormData();
    formData.append('event', JSON.stringify(this.event));
    formData.append('image', this.imagePath);
  
    this.EventService.createEvent(formData)
      .subscribe(
        data => {
          console.log(data);
          this.goToEventist();
        },
        error => console.log(error)
      );
  }
  


  onFileSelected(event: any) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      this.imagePath = fileList[0];
    }
  }
  goToEventist(){
    this.router.navigateByUrl('/events');
    
  }
  
  Submit(){
    console.log(this.event);
    this.saveEvent();
  }



  onFileInput(event:any) {
    if (event.target.files.length > 0) {
      this.previewImage = event.target.files[0];
      console.log(this.previewImage)
      
    }
  }
  onSubmit(form:any){
  
    const image = this.previewImage;
  
    this.EventService.addEvent(form.value,image).subscribe(res=>console.log(res))
    this.router.navigate(['/events']).then(() => {
      window.location.reload()
    });
  
  
  }

}
