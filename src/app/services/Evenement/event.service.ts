import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseURL = "http://localhost:8888/admin";

  constructor(private httpClient: HttpClient) { }
  
  getEventsList(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseURL}/affev`);
  }

  createEvent(fct: Event): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addev`, fct);
  }

  getEventById(id: number): Observable<Event>{
    return this.httpClient.get<Event>(`${this.baseURL}/retrieve-Event/${id}`);
  }

  updateEvent(fct: Event, id:number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateev/${id}`, fct);
  }
 
  deleteEvent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delev/${id}`);
  }



}
