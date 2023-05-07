import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from 'src/app/services/Animal/animal.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit{
  name!:String;
  birthDate!:any;
  race!:String;
  description!:String;
  gender!:any;
  idAnimal:any
  image!:any;
  previewImage:any

  constructor(private service : AnimalService , private router:ActivatedRoute, private route: Router){}



  ngOnInit(): void {

}

onFileSelected(event:any) {
  if (event.target.files.length > 0) {
    this.previewImage = event.target.files[0];
    console.log(this.previewImage)
  }
}
Sumbit(form:any){

  const image = this.previewImage;

  this.service.add(form.value,image).subscribe(res=>console.log(res))
  this.route.navigate(['/animals']).then(() => {
  //  location.reload();
  });


}
}
