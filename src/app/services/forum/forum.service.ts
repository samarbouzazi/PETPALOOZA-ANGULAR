// forum.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionsModule } from 'src/app/models/questions/questions.module';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private apiUrl = 'http://localhost:8888/Questions';
  
  constructor(private http: HttpClient) { }
 
  getQuestions(): Observable<QuestionsModule> {
    return this.http.get<QuestionsModule>(this.apiUrl+'/getall');
  }
  /* getQuestions(): Observable<any[]> {
    console.log(this.http.get<any[]>(`${this.apiUrl+'/getall'}`));
    return this.http.get<any[]>(`${this.apiUrl}`);
    
  } */
  addData(data: any) {
    console.log(this.http.post(this.apiUrl + '/addQuestions', data));
    return this.http.post(this.apiUrl + '/addQuestions', data); 
  }
  //submitResponse(questionId: number, response: any): Observable<any[]> {
    //return this.http.post<any[]>(`${this.apiUrl}/questions/${questionId}/responses`, response);
  //}
////get all///


}




