import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http : HttpClient) { }

  prefix : String = "http://localhost:8888/animal"


  getAll():Observable<any>{
    return this.http.get(this.prefix+"/")
  }

  add(fd : FormData):Observable<any>{
    return this.http.post(this.prefix+"/add",fd);
  }

}
