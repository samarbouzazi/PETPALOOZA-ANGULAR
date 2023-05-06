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
constructor(private service : OffreserviceService , private router:ActivatedRoute, private route: Router){}
ngOnInit(): void {
  this.idJob=this.router.snapshot.paramMap.get('id');

    this.service.getOffreById(this.idJob).subscribe(res =>{
      console.log(res)
      this.offres=res;
    })
} 


}
