import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AnimalService } from 'src/app/services/Animal/animal.service';

@Component({
  selector: 'app-view-animals',
  templateUrl: './view-animals.component.html',
  styleUrls: ['./view-animals.component.css']
})
export class ViewAnimalsComponent implements OnInit {
  

  animals! : any[]

  constructor(private service : AnimalService , private _sanitizer : DomSanitizer){}
  
  ngOnInit(): void {
    this.getAllAnimals();
  }

  getAllAnimals(){
    this.service.getAll().subscribe(res => {
      this.animals = res
      console.log(res)
    })
  }


  convert(base64String : any){
    console.log(this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String))
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String);
  }





}
