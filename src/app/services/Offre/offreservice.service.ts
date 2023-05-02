import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/Models/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreserviceService {

 
  private baseURL = "http://localhost:8888/JobOffre";

  constructor(private httpClient: HttpClient) { }
  
  getOffreList(): Observable<Offre[]>{
    return this.httpClient.get<Offre[]>(`${this.baseURL}/listeoffre`);
  }

  createOffre(fct: Offre): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addoffre`, fct);
  }


  updateOffre(fct: Offre, id:number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateoffre/${id}`, fct);
  }
 
  deleteOffre(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteoffre/${id}`);
  }

  getOffreById(id: number): Observable<Offre>{
    return this.httpClient.get<Offre>(`${this.baseURL}/getoffre/${id}`);
  }


}
