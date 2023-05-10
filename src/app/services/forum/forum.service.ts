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

  addquestion(data: any) {
    console.log(this.http.post(this.apiUrl + '/addQuestions', data));
    return this.http.post(this.apiUrl + '/addQuestions', data); 
  }
updatequestion(data: Event, id: number): Observable<Object> {
  return this.http.put(this.apiUrl + '/updatequestion/{id}', data);
}

 deleteEvent(id: number): Observable<Object> {
  return this.http.delete(this.apiUrl + '/deletequestion/{id}');
} 


addanswer(data: any) {
  console.log(this.http.post(this.apiUrl + '/addanswers', data));
  return this.http.post(this.apiUrl + '/addanswers', data); 
}

search(searchQuery: any): Observable<QuestionsModule> {
  let params: any = {};

  // Check if search query contains values
  if (searchQuery.description) {
    params.description = searchQuery.description;
  }
  return this.http.get<QuestionsModule>(this.apiUrl + '/search/', { params });
}







}





