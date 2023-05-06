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

  add(fd : any,image :File):Observable<any>{
    const formData = new FormData();
  console.log(fd)
  formData.append('animal', JSON.stringify(fd));
  formData.append('image', image, image.name);
    return this.http.post(this.prefix+"/add",formData);
  }

  getAnimalById(id:any){
    return this.http.get(this.prefix+"/"+`${id}`);
  }

  addLike(like:any,idAnimal:any,idUser:any){
    return this.http.post(this.prefix+"/addlike/"+`${idAnimal}`+"/"+`${idUser}`,like);
  }
  addDisLike(like:any,idAnimal:any,idUser:any){
    return this.http.post(this.prefix+"/addDislike/"+`${idAnimal}`+"/"+`${idUser}`,like);
  }

  addInteressted(idanimal:any,idUser:any){
    return this.http.get(this.prefix+"/interested/"+`${idanimal}`+"/"+`${idUser}`);
  }
  
 getLikesByIdAnimal(id:any){
    return this.http.get(this.prefix+"/nbrLikesOfAnimal/"+`${id}`);
  }

  getDisLikesByIdAnimal(id:any){
    return this.http.get(this.prefix+"/nbrDisLikesOfAnimal/"+`${id}`);
  }
  getNbrInteresstedByIdAnimal(id:any){
    return this.http.get(this.prefix+"/interestedUsers/count/"+`${id}`);
  }

  DeleteAnimalById(id:any){
    return this.http.delete(this.prefix+"/delete/"+`${id}`);
  }

  ModifyAnimalById(id:any,body:any){
    return this.http.put(this.prefix+"/update/"+`${id}`,body);
  }


  getRateAnimalUser(idAnimal:any,idUser:any){
    return this.http.get(this.prefix+"/getrate/"+`${idAnimal}`+"/"+`${idUser}`);
  }
 
  searchAnimalByName(nameAnimal:any):Observable<any>{
    return this.http.get(this.prefix+"/search/"+`${nameAnimal}`);

  }

  FiltreByRace(race:any):Observable<any>{
    return this.http.get(this.prefix+"/filter/"+`${race}`);
  }
 

  getAllRace():Observable<any>{
    return this.http.get(this.prefix+"/races")
  }

  FiltreByGender(gender:any):Observable<any>{
    return this.http.get(this.prefix+"/sexe/"+`${gender}`);

  }


  exportAnimalsToExcel(): Observable<any> {
    return this.http.get(this.prefix+"/animals/excel", { responseType: 'blob' });
  }


  // getAnimalRaceStats() {
  //   return this.http.get<any[]>('/stats/race');
  // }

  getAnimalRaceStats(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.prefix}/stats/race`);
  }

  // getAnimalGenderStats(): Observable<any[]> {
  //   return this.http.get<any[]>('/stats/gender');
  // }


}

