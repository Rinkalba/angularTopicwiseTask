import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileHandlingService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:8080/api/v1"
  uploadData(fileData:File,user_name:string){
    const formData=new FormData();
    formData.append('fileData',fileData);
    formData.append('user_name',user_name);
    return this.http.post(this.baseUrl+"/saveFile",formData,{responseType:'text'});
  }

  getData(id: any): Observable<Blob> {
    return this.http.get(this.baseUrl + "/getById/" + id, { responseType: 'blob' });
  }
}
