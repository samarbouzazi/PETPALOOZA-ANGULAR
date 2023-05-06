import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AnimalService } from 'src/app/services/Animal/animal.service';
import { StorageService } from 'src/app/services/User/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit{


  idAnimal!:any;
  animal!:any;

  nblike!:any;
  nbDislike!:any;

  nbrInteressted!:any;
  test!:any;


  animalUser!:any
//id!: number;

  //idUser=localStorage.getItem('id');
// *ngIf="animal.userAnimal == idUser"  html
  constructor(private service : AnimalService , private router:ActivatedRoute, private route: Router,private storageService: StorageService){}
   
  currentUser: any;
  id!:number;

  ngOnInit(): void {

    this.currentUser = this.storageService.getUser();

    this.id=this.currentUser.id;
    console.log("the id of the current user is "+this.id);

   const id= localStorage.getItem("id");

   console.log('\n the id is : '+ this.id);
   console.log('\n the id  2222222 is : '+ this.id);


    this.idAnimal=this.router.snapshot.paramMap.get('id');

    this.service.getAnimalById(this.idAnimal).subscribe(res =>{
      console.log(res)
      this.animal=res;
    })

    this.service.getLikesByIdAnimal(this.idAnimal).subscribe(res=>this.nblike=res)
    
    this.service.getDisLikesByIdAnimal(this.idAnimal).subscribe(res=>this.nbDislike=res)
    this.service.getNbrInteresstedByIdAnimal(this.idAnimal).subscribe(res=>this.nbrInteressted=res)
/*this.service.getRateAnimalUser(this.idAnimal,4).subscribe(res=>{
  
this.animalUser=res
this.test=this.animalUser.liked;

})*/
    
  }

  Addlike(){
    let body= {
      animal:{
        idAnimal:this.idAnimal
      },
      user:{
        idUser:this.id
      },
      liked:true
    }
    this.service.addLike(body,this.idAnimal,this.id).subscribe(res =>{
     if(res==null){
      alert("vous avez déja réagie sur ce poste")
     }
     else{
      window.location.reload()
     }
    })


    

  }

  AddDislike(){
    let body= {
      animal:{
        idAnimal:this.idAnimal
      },
      user:{
        idUser:this.id
      },
      liked:false
    }
    this.service.addDisLike(body,this.idAnimal,this.id).subscribe(res =>{
      if(res==null){
        alert("vous avez déja réagie sur ce poste")
       }
       else{
        window.location.reload()
       }
    })
   

  }
  addInteressted(){

    this.service.addInteressted(this.idAnimal,this.id).subscribe(res=>console.log(res))
    window.location.reload()
}

// DeletAnimal(){
//   this.service.DeleteAnimalById(this.idAnimal).subscribe(res=>console.log(res))
//   this.route.navigate(['/animals']).then(() => {
//     location.reload();
//   });
// }

DeletAnimal() {
  if (confirm("Are you sure you want to delete this animal?")) {
    this.service.DeleteAnimalById(this.idAnimal).subscribe(res => console.log(res));
    this.route.navigate(['/animals']).then(() => {
      location.reload();
    });
  }
}


}
