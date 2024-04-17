import { Component, OnInit } from '@angular/core';
import { MappingServiceService } from '../services/mapping-service.service';
import { FileHandlingService } from '../services/file-handling.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-handling',
  templateUrl: './file-handling.component.html',
  styleUrls: ['./file-handling.component.css']
})
export class FileHandlingComponent implements OnInit {
  mappingForm: any;
  responseData = "data response render here!";

  constructor(private service: FileHandlingService, private fb: FormBuilder,private route:Router) {
    this.mappingForm = this.fb.group({
      fileData: [null],
      user_name: []
    });
  }

  ngOnInit(): void {
  }

  onFileSelect(event: any) {
    console.log(event.target.files);
    const files = event.target.files;
    if (files.length > 0) {
      // this.mappingForm.patchValue({
      //   fileData: files[0]
      // });
      this.mappingForm.get('fileData').setValue(files[0]);
    }
  }

  uploadFile() {
    const fileData = this.mappingForm.get('fileData').value;
    const user_name = this.mappingForm.get('user_name').value;
    console.log(fileData);
    console.log(user_name);
    if (fileData && user_name) {
      this.service.uploadData(fileData, user_name).subscribe({
        next: (resp) => {
          this.responseData = resp;
        },
        error: (err) => {
          this.responseData = err;
        },
        complete: () => {
        }
      });
    }
  }

  id:any;
  getProfile(id:any){
    this.route.navigate(['/getProfile', id]);
  }
}
