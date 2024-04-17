import { Component, OnInit } from '@angular/core';
import { MappingServiceService } from '../services/mapping-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  mappingForm:any;
  responseData="data response render here!";
  id:any;
  ngOnInit(): void {

  }

  constructor(private router: Router,private route:ActivatedRoute, private mappingService:MappingServiceService,private fb:FormBuilder){
    this.mappingForm=this.fb.group({
      id:['',[]],
      title:['',[]],
      genre:['',[]],
     // Stuid:['',[]],
      stuName:['',[]],
      standard:['',[]]
    });

    this.id=this.route.snapshot.paramMap.get('id');
    
    this.mappingService.getBookById(this.id).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.mappingForm.setValue({
            id:data.id,
            title:data.title,
            genre:data.genre,
            stuName:data.student.stuName,
            standard:data.student.standard
          })
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  gotoBookList(){
    this.router.navigate(['/getAll']);
  }

  onSubmit(){
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
    this.mappingService.updateBook(Number(this.id),payLoad).subscribe(
      {
        next:(resp)=>{
        
          console.log(resp);
          this.gotoBookList();
        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }




}
