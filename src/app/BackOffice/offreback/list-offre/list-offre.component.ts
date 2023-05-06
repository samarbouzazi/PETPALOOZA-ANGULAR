import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/offre';
import { OffreserviceService } from 'src/app/services/Offre/offreservice.service';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent implements OnInit{

      
offres!: Offre[];
isAdmin!:Boolean 
constructor(private offreService: OffreserviceService,
  private router: Router) { }

ngOnInit(): void {
  this.getOffres();
}

private getOffres(){
  this.isAdmin=true
  if (this.router.url==="/view-offres")  this.isAdmin=false
  this.offreService.getOffreList().subscribe(data => {
    this.offres = data;
    
  });
}

updateOffre(id: number){
  this.router.navigate(['update-offre',id]);
}
// statOffre(){
//  this.offreService.getOffreStat().subscribe(data=>console.log('data',data))
// }

deleteOffre(id: number){
  this.offreService.deleteOffre(id).subscribe( data => {
  this.getOffres();
   
  })
}

}
