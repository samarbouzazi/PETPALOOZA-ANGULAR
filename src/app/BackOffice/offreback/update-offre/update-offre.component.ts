import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/app/models/offre';
import { OffreserviceService } from 'src/app/services/Offre/offreservice.service';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent {
  id!: number;
  offre: Offre= new Offre();
  constructor(private offrService: OffreserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.offrService.getOffreById(this.id).subscribe(data => {
      this.offre = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.offrService.updateOffre(this.offre,this.id).subscribe( data =>{
      this.goToOffreList();
    }
    , error => console.log(error));
  }

  goToOffreList(){
    this.router.navigate(['/offres']);
  }
  offretype : string[] = ['OFFRE', 'DEMANDE'];



}
