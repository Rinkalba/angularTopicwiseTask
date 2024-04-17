import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExcelHandlingService {

  
  private baseUrl="http://localhost:8080/api/v1"
  constructor(private http:HttpClient) { }

  downloadFile(){
    return this.http.get(this.baseUrl+"/exportToFile",{responseType:'blob'});
  }

  uploadFile(file:File){
    const formData=new FormData();
    formData.append('file',file);
    return this.http.post(this.baseUrl+"/saveExcel",formData,{responseType:'text'});

  }

  getAllData(){
    return this.http.get(this.baseUrl+"/getAllJsonData");
  }
}
