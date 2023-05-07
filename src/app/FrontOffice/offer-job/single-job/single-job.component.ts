import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreserviceService } from 'src/app/services/Offre/offreservice.service';

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.css']
})
export class SingleJobComponent implements OnInit {

  offres!:any;
idJob!:any;
price!: number;
beginnigDate!: Date;
endDate!: Date;
title!: string;
description!: string;
offretype!: string;
nbintereteds!: any;
localisation !: string;
image!:any;
ids:any;
constructor(private service : OffreserviceService , private router:ActivatedRoute, private route: Router){}
ngOnInit(): void {
  this.idJob=this.router.snapshot.paramMap.get('id');
  this.ids= localStorage.getItem("id");
    console.log('\n the id is : '+ this.ids);

    this.service.getOffreById(this.idJob).subscribe(res =>{
      console.log(res)
      this.offres=res;
    })
} 


addInteressted(){

  this.service.addInteressted(this.idJob,this.ids).subscribe(res=>console.log(res))
  //window.location.reload()
}

}
