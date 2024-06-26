import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MappingServiceService {
  private baseURL="http://localhost:8080/api/v1";
  constructor(private http:HttpClient) { }

  saveBook(reqData:any){
    return this.http.post(this.baseURL+"/saveData",reqData,{responseType:'text'});
  }

  updateBook(id:any,reqData:any){
    return this.http.post(this.baseURL+"/updateById/"+id,reqData,{responseType:'text'});
  }

  getAllBook():Observable<any>{
    return this.http.get<any[]>(this.baseURL+"/getAllDtoData");
  }

  getBookById(id:any):Observable<any>{
    return this.http.get<any>(this.baseURL+"/getBookById/"+id);
  }
}
