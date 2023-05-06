import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RdvService } from 'src/app/services/rdv/rdv.service';
@Component({
  selector: 'app-rdv-list',
  templateUrl: './rdv-list.component.html',
  styleUrls: ['./rdv-list.component.css']
})
export class RdvListComponent implements OnInit{
 p: number = 1;
 
 constructor(private service : RdvService , private router:ActivatedRoute, private route: Router){}
  
 reservations!:any[]
   ngOnInit(): void {
 
     this.service.getAll().subscribe(res=>{this.reservations=res
     console.log(res)
     })
 
 }
 
 supprimerRdv(id:any){
   this.service.DeleteReserById(id).subscribe(res=>console.log(res))
   window.location.reload()
 }
 
}
