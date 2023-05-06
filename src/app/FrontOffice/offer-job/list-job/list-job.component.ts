import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/offre';
import { OffreserviceService } from 'src/app/services/Offre/offreservice.service';
import { SearchJobInterface } from './SearchJobInterface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit{

      
  offres!: Offre[];
  ordredoffre:Offre[]=[]
  searcheditem!:any[]
  s!: string
  isAdmin!:Boolean
  totalItem!: any 
  currentPage!:any

  constructor(private offreService: OffreserviceService,
    private router: Router, private httpClient:HttpClient) { }
  
  ngOnInit(): void {
    //this.getOffres();

     this.getoredredoffre();
  }
  getoredredoffre(){
    this.offreService.findAllByOrderByPrice().subscribe(data=>{this.ordredoffre=data})
  }  

 

  private getOffres(){
    this.isAdmin=true
    if (this.router.url==="/view-offres")  this.isAdmin=false
    this.offreService.getOffreList().subscribe(data => {
      this.offres = data;
      
    });
  }
 

  
  updateOffre(id: number){
    this.router.navigate(['update-offre',id]);
  }
  // statOffre(){
  //  this.offreService.getOffreStat().subscribe(data=>console.log('data',data))
  // }
  
  deleteOffre(id: number){
    this.offreService.deleteOffre(id).subscribe( data => {
    this.getOffres();
     
    })
  }
  
  
  }
   


