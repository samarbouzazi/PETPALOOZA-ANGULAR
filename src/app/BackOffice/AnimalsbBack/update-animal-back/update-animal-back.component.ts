import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from 'src/app/services/Animal/animal.service';

@Component({
  selector: 'app-update-animal-back',
  templateUrl: './update-animal-back.component.html',
  styleUrls: ['./update-animal-back.component.css']
})
export class UpdateAnimalBackComponent {
  name!:String;
  birthDate!:any;
  race!:String;
  description!:String;
  gender!:any;
  idAnimal:any
  
  constructor(private service : AnimalService , private router:ActivatedRoute, private route: Router){}


  ngOnInit(): void {
    this.idAnimal=this.router.snapshot.paramMap.get('id');
    
  }

  Sumbit(form :any){
    let body={
      idAnimal :this.idAnimal,
      nameAnimal:form.value.nameAnimal,
      birthDate:form.value.birthDate,
      race:form.value.race,
      description:form.value.description,
      gender:this.gender
    }

    this.service.ModifyAnimalById(this.idAnimal,body).subscribe(res=>console.log(res))
    this.route.navigate(['/animals/view-animal-back']).then(() => {
      location.reload();
    
    
  });
  }}