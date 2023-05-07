import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AnimalService } from 'src/app/services/Animal/animal.service';

@Component({
  selector: 'app-view-animals',
  templateUrl: './view-animals.component.html',
  styleUrls: ['./view-animals.component.css']
})
export class ViewAnimalsComponent implements OnInit {
  p: number = 1;

  animals! : any[]

  nameAnimal!:any;
  race!:any;
  gender!:any;
  allrace!:any;


  constructor(private service : AnimalService , private _sanitizer : DomSanitizer){}
  
  ngOnInit(): void {
    this.getAllAnimals();
    this.service.getAllRace().subscribe(res=>{this.allrace=res
    console.log(res)
    })
   
  }

  getAllAnimals(){
    this.service.getAll().subscribe(res => {
      this.animals = res
    })
  }


 /* convert(base64String : any){
    console.log(this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String))
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String);
  }*/

  searchAnimalByName(form:any){
    this.service.searchAnimalByName(this.nameAnimal).subscribe(res=> {
      this.animals=res
    })
  }


  filtreByRace(){
    this.service.FiltreByRace(this.race).subscribe(res=> {
      this.animals=res
    })
  }

  filtreByGender(){
    this.service.FiltreByGender(this.gender).subscribe(res=> {
      this.animals=res
    })


  }



}
