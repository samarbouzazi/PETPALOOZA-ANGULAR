import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/models/Event';
import { map, Observable } from 'rxjs';
import { CountType } from 'src/app/models/CountType';



@Injectable({
  providedIn: 'root'
})
export class eventService {

  private baseURL = "http://localhost:8888/admin";

  

  constructor(private httpClient: HttpClient) { }

  getEventsList(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${this.baseURL}/affev`);
  }

  createEvent(fct: any): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/addev`, fct);
  }


  addEvent(fct: any, image: File): Observable<any> {
    const formData = new FormData();
    console.log(fct)
    formData.append('event', JSON.stringify(fct));
    formData.append('image', image, image.name);
    return this.httpClient.post(this.baseURL + "/addev", formData);
  }

  // createEvent(fct: Event, content: File): Observable<any> {    
  //   // Create form data to send event and image file
  //   const formData = new FormData();
  //   formData.append('event', JSON.stringify(fct));
  //   formData.append('image', content);

  //   // Make POST request to endpoint
  //   return this.httpClient.post<any>(`${this.baseURL}/addev`, formData);
  // }


  getEventById(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.baseURL}/retrieve-Event/${id}`);
  }

  updateEvent(fct: Event, id: number): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/updateev/${id}`, fct);
  }

  deleteEvent(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delev/${id}`);
  }

  exportAll(): Observable<Event> {
    return this.httpClient.get<Event>(this.baseURL + `/exportpdf`, { responseType: 'blob' as 'json' });
  }

  exportPdf(): Observable<any> {
    const url = `${this.baseURL}/exportpdf`;
    return this.httpClient.get(url, {
      responseType: 'arraybuffer',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  getEvents3(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.baseURL).pipe(
      map(events => events.sort((a, b) => new Date(b.dateDebut).getTime() - new Date(a.dateDebut).getTime()).slice(0, 3))
    );
  }


  getAll(): Observable<any> {
    return this.httpClient.get(this.baseURL + "/affev")
  }



  addInteressted(idEvent: any, idUser: any) {
    return this.httpClient.get(this.baseURL + "/interesser/" + `${idEvent}` + "/" + `${idUser}`);
  }


  searchEvents(searchQuery: any): Observable<Event[]> {
    let params: any = {};

    // Check if search query contains values
    if (searchQuery.titre) {
      params.titre = searchQuery.titre;
    }

    if (searchQuery.type) {
      params.type = searchQuery.type;
    }

    if (searchQuery.maxParticipants) {
      params.maxParticipants = searchQuery.maxParticipants;
    }

    if (searchQuery.location) {
      params.location = searchQuery.location;
    }

    if (searchQuery.dateDebut) {
      params.dateDebut = searchQuery.dateDebut;
    }

    if (searchQuery.dateFin) {
      params.dateFin = searchQuery.dateFin;
    }

    return this.httpClient.get<Event[]>(this.baseURL, { params });
  }

  public getEventCountsByType(): Observable<CountType[]> {
    return this.httpClient.get<CountType[]>(`${this.baseURL}/statistique`);
  }

}
