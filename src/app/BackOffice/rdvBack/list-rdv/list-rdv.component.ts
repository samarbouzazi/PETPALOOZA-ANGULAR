import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RdvService } from 'src/app/services/rdv/rdv.service';

@Component({
  selector: 'app-list-rdv',
  templateUrl: './list-rdv.component.html',
  styleUrls: ['./list-rdv.component.css']
})
export class ListRdvComponent {
  p: number = 1;
 
  constructor(private service : RdvService , private router:ActivatedRoute, private route: Router){}
   
  reservations!:any[]
    ngOnInit(): void {
  
      this.service.getAll().subscribe(res=>{this.reservations=res
      console.log(res)
      })
  
  }
  
  supprimerRdv(id:any){
    this.service.DeleteReserById(id).subscribe(res=>console.log(res))
    window.location.reload()
  }

  // exportAnimalsToExcel() {
  //   this.animalService.exportAnimalsToExcel().subscribe(
  //     (data: Blob) => {
  //       const url = window.URL.createObjectURL(data);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = 'animals.xlsx';
  //       link.click();
  //       window.URL.revokeObjectURL(url);
  //     },
  //     error => console.error(error)
  //   );
  // }

  exportToExcel(){
    this.service.exportToExcel().subscribe(
      (data: Blob) => {
              const url = window.URL.createObjectURL(data);
              const link = document.createElement('a');
              link.href = url;
              link.download = 'Appointment.xlsx';
              link.click();
              window.URL.revokeObjectURL(url);
            },
            error => console.error(error)
          );
        }
}
