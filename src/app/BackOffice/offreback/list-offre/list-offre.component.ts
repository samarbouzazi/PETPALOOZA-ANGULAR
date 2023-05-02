import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/Models/offre';
import { OffreserviceService } from 'src/app/services/Offre/offreservice.service';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent implements OnInit{

      
offre!: Offre[];
  
constructor(private offreService: OffreserviceService,
  private router: Router) { }

ngOnInit(): void {
  this.getOffres();
}

private getOffres(){
  this.offreService.getOffreList().subscribe(data => {
    this.offre = data;
  });
}

// updateOffre(id: number){
//   this.router.navigate(['update-offre', id]);
// }


update_Offre(id: number) {
  this.router.navigateByUrl(`update-offre/${id}`);
}


deleteOffre(id: number){
  this.offreService.deleteOffre(id).subscribe( data => {
    console.log(data);
    
    this.getOffres();
   
  })
}

}
