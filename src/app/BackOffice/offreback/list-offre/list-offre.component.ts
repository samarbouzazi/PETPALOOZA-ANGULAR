import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/offre';
import { OffreserviceService } from 'src/app/services/Offre/offreservice.service';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent implements OnInit{
  currentePage= 1;
  totalitem = 0;      
offres!: Offre[];
isAdmin!:Boolean 
p!: number;
  pageSize = 10;
  key = 'title';
  reversed = false;
constructor(private offreService: OffreserviceService,
  private router: Router) { }
  searchQuery: any = {
    title: '',
    offretype: '',
    localisation: '',
    beginnigDate: null,
    endDate: null
  };

ngOnInit(): void {
  this.getOffres();
  this.search();
}

private getOffres(){
  this.isAdmin=true
  if (this.router.url==="/view-offres")  this.isAdmin=false
  this.offreService.getOffreList().subscribe(data => {
    this.offres = data;
    
  });
}

search() {
  this.offreService.searchJoboffre(this.searchQuery).subscribe(
    response => {
      this.offres = response;
      this.totalitem = response.length;
      this.currentePage = 1;
    },
    error => {
      console.log(error);
    }
  );
}
resetSearch() {
  this.searchQuery = {
    title: '',
    offretype: '',
    localisation: '',
    beginnigDate: null,
    endDate: null
  };
  this.offreService.getOffreList().subscribe(
    response => {
      this.offres = response;
      this.totalitem = response.length;
      this.currentePage = 1;
    },
    error => {
      console.log(error);
    }
  );
}
sortedColumn!: string;
sort(sortedColumn: string) {
  if (this.sortedColumn === sortedColumn) {
    this.reversed = !this.reversed;
  } else {
    this.sortedColumn = sortedColumn;
    this.reversed = false;
  }

  this.offres = this.offres.sort((a: any, b: any) => {
    if (a[sortedColumn] < b[sortedColumn]) {
      return this.reversed ? 1 : -1;
    } else if (a[sortedColumn] > b[sortedColumn]) {
      return this.reversed ? -1 : 1;
    } else {
      return 0;
    }
  });
}


updateOffre(id: number){
  this.router.navigate(['update-offre',id]);
}
// statOffre(){
//  this.offreService.getOffreStat().subscribe(data=>console.log('data',data))
// }

// deleteOffre(id: number){
//   this.offreService.deleteOffre(id).subscribe( data => {
//   this.getOffres();
   
//   });
// }
deleteOffre(id: number){
  let R= confirm(" Are you Sure?!")
  if (R){

 
  this.offreService.deleteOffre(id).subscribe( data => {
    ()=>alert('delete succeed!')
    console.log(data);
    this.search();
    
  }); }
}}
