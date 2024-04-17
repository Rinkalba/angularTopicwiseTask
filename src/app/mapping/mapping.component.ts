import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { MappingServiceService } from '../services/mapping-service.service';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {
  mappingForm: any;
  responseData="data response render here!";
  ngOnInit(): void {
    
  }
  constructor(private fb:FormBuilder,private mappingService:MappingServiceService){
    this.mappingForm=this.fb.group({
      id:['',[]],
      title:['',[]],
      genre:['',[]],
     // Stuid:['',[]],
      stuName:['',[]],
      standard:['',[]]
    })
  }

  onSubmit(){
    console.log(this.mappingForm.value);
    let payLoad = {
      id:this.mappingForm.value.id,
      title:this.mappingForm.value.title,
      genre:this.mappingForm.value.genre,
      student:{
        // Stuid:this.mappingForm.value.Stuid,
        stuName:this.mappingForm.value.stuName,
        standard:this.mappingForm.value.standard
      }
    }
    console.log(payLoad)
    this.mappingService.saveBook(payLoad).subscribe({
      next:(resp)=>{
        this.responseData = resp;
      },                                
      error:(err)=>{
        this.responseData=err;
      },
      complete:()=>{
      }
    })
  }

}
