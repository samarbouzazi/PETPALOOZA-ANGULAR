import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from 'src/app/services/Animal/animal.service';

@Component({
  selector: 'app-view-animal-back',
  templateUrl: './view-animal-back.component.html',
  styleUrls: ['./view-animal-back.component.css']
})
export class ViewAnimalBackComponent {
  animal!: any;
  animals! : any[]
  nameAnimal!:any;
  race!:any;
  gender!:any;
  allrace!:any;
  //res !:Animal[];
 // animals!: any[] ;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService,
  
    private _sanitizer : DomSanitizer
  ){
  
  }

  
  ngOnInit(): void {
    this.getAnimal();
    this.animalService.getAllRace().subscribe(res=>{this.allrace=res
    console.log(res)
  });
  }
  private getAnimal(){
    this.animalService.getAll().subscribe(data => {
      this.animal = data;
    });
  }


   deleteAnimal(id:number){
    this.animalService.DeleteAnimalById(id).subscribe(data => {
    //  alert("delete succus");
    // this.router.navigateByUrl('animals') ;
  //  this.router.navigate(['/animals']);
  window.location.reload();
  });
  }

  updateAnimal(id: number){
    this.router.navigate(['update-animal-back', id]);
  }


  
 /* private getAnimalList(){
    this.animalService.getAnimalList().subscribe(data => {
      this.animals = data;
    });
  }
*/
 /* getAllAnimals(){
    this.animalService.getAnimalList().subscribe(res => {
    //  this.animals = res
      //console.log(res)
    })
  }


  convert(base64String : any){
    console.log(this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String))
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String);
  }
*/
searchAnimalByName(form:any){
  this.animalService.searchAnimalByName(this.nameAnimal).subscribe(res=> {
    this.animal=res
  })
}


filtreByRaceback(){
  this.animalService.FiltreByRace(this.race).subscribe(res=> {
    this.animals=res
  })
}

filtreByGender(){
  this.animalService.FiltreByGender(this.gender).subscribe(res=> {
    this.animal=res
  })


}


}
