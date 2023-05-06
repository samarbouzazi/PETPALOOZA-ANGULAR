import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class RdvService {
  constructor(private http : HttpClient) { }
  prefix : String = "http://localhost:8888/appointment"
  getAll():Observable<any>{
    return this.http.get(this.prefix+"/list")
  }
  add(reser: any,idVet:any,idUser:any):Observable<any>{
    
    return this.http.post(this.prefix+"/add/"+`${idVet}`+"/"+`${idUser}`,reser);
  }
  DeleteReserById(id:any){
    return this.http.delete(this.prefix+"/delete/"+`${id}`);
  }
  getReservById(id:any){
    return this.http.get(this.prefix+"/findById"+`${id}`);
  }
  exportToExcel(): Observable<any> {
    return this.http.get(this.prefix+"/list/export", { responseType: 'blob' });
  }
}