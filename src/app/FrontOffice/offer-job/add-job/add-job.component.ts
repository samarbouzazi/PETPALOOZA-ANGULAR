import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/offre';
import { OffreserviceService } from 'src/app/services/Offre/offreservice.service';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {


  offre: Offre = new Offre();
  imagePath!: File;
  previewImage:any;

  
  ngOnInit(): void {
  }


  constructor(private OffreService: OffreserviceService,
    private router: Router ) { }
      
    offretype : string[] = ['OFFRE', 'DEMANDE'];
 
  onFileInput(jobOffre:any) {
    if (jobOffre.target.files.length > 0) {
      this.previewImage = jobOffre.target.files[0];
      console.log(this.previewImage)
    }
  }
  onSubmit(form:any){
  
    const image = this.previewImage;
  
    this.OffreService.createOffreimage(form.value,image).
    subscribe(res=>console.log(res))
    this.router.navigate(['/list-jobOffre']).then(() => {
    //  location.reload();
    });
  
  }
  
}