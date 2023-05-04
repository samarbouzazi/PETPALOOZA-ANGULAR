import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/offre';
import { OffreserviceService } from 'src/app/services/Offre/offreservice.service';

@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html',
  styleUrls: ['./create-offre.component.css']
})
export class CreateOffreComponent {

  offre: Offre = new Offre();

  constructor(private OffreService: OffreserviceService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  offretype : string[] = ['OFFRE', 'DEMANDE'];

  saveEvent(){
    this.OffreService.createOffre(this.offre).subscribe( data =>{
      console.log(data);
      this.goToOffreList();
    
    },
    error => console.log(error));
  }

  goToOffreList(){
    this.router.navigate(['/offres']);
  }
  
  onSubmit(){
    console.log(this.offre);
    this.saveEvent();
  }

}
