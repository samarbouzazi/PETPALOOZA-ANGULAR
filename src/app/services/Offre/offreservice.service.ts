import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/models/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreserviceService {

 
  private baseURL = "http://localhost:8888/JobOffre";

  constructor(private httpClient: HttpClient) { }

  
  getOffreList(): Observable<Offre[]>{
    return this.httpClient.get<Offre[]>(`${this.baseURL}/listeoffre`);
  }
  findAllByOrderByPrice(): Observable<Offre[]>{
    return this.httpClient.get<Offre[]>(`${this.baseURL}/tri`);
  }

  createOffre(fct: Offre): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addoffre`, fct);
  }
  
  getOffreStat(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/statjoboffre`);
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
  
  interestedoffre(idJob: any, idUser: any) {
    return this.httpClient.get(this.baseURL + "/interested/" + `${idJob}` + "/" + `${idUser}`);
  }




  createOffreimage(offre: Offre, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('offre', JSON.stringify(offre));
    formData.append('image', image, image.name);
    return this.httpClient.post<any>(`${this.baseURL}/addoffre`, formData);
  }
  searchJoboffre(searchQuery: any): Observable<Offre[]> {
    let params: any = {};

    // Check if search query contains values
    if (searchQuery.title) {
      params.title = searchQuery.title;
    }

    if (searchQuery.offertype) {
      params.offertype = searchQuery.offertype;
    }

    

    if (searchQuery.localisation) {
      params.localisation = searchQuery.localisation;
    }

    

    
    return this.httpClient.get<Offre[]>(this.baseURL, { params });
  }


  addInteressted(idEvent: any, idUser: any) {
    return this.httpClient.get(this.baseURL + "/interesser/" + `${idEvent}` + "/" + `${idUser}`);
  }


}

  


