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

  
  

  imagePath!: File;
  previewImage:any;


  constructor(private offreService: OffreserviceService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  offretype : string[] = ['OFFRE', 'DEMANDE'];

  offre: Offre = new Offre();

  saveOffre(){
    const formData = new FormData();
    formData.append('offre', JSON.stringify(this.offre));
    formData.append('image', this.imagePath);
    
    this.offreService.createOffre(this.offre).subscribe( data =>{
    console.log(data);
    this.goToOffreList();},
    error => console.log(error));
  }

  goToOffreList(){
    this.router.navigate(['/offres']);
  }
  
  onFileInput(offre:any) {
    if (offre.target.files.length > 0) {
      this.previewImage = offre.target.files[0];
      console.log(this.previewImage)
    }
  }
onSubmit(form:any){

  const image = this.previewImage;

  this.offreService.createOffreimage(form.value,image).subscribe(res=>console.log(res))
  this.router.navigate(['/events']).then(() => {
  //  location.reload();
  });
}
}
