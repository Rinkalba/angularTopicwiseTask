import { Component, OnInit } from '@angular/core';
import { ExcelHandlingService } from '../services/excel-handling.service';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-excel-handling',
  templateUrl: './excel-handling.component.html',
  styleUrls: ['./excel-handling.component.css'],
})


export class ExcelHandlingComponent implements OnInit {
  ngOnInit(): void {
  }



  mappingForm: any;
  resultsLength = 0;
  responseData='Data Will Shown Here!';
  tableData:any;

  itemsPerPage=10;
  currentPage=1;
 
  changePage(page:number){
   this.currentPage=page;
  }

  get paginatedData(){
    const start=(this.currentPage-1)*(this.itemsPerPage);
    const end=start+this.itemsPerPage;

    return this.tableData.slice(start,end);

  }
 

  onFileSelect(event: any) {
    console.log(event.target.files);
    const files = event.target.files;
    if (files.length > 0) {
      // this.mappingForm.patchValue({
      //   fileData: files[0]
      // });
      this.mappingForm.get('file').setValue(files[0]);
    }
  }

  constructor(private service:ExcelHandlingService,private fb:FormBuilder){
    this.mappingForm = this.fb.group({
      file: [null],
    });

    this.service.getAllData().subscribe({
      next: data => {
        console.log(data);
        this.tableData = data;
        this.resultsLength = this.tableData.length;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  downloadDummyFile(){
    this.service.downloadFile().subscribe({
      next:(data:Blob)=>{
        const file = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const downloadUrl=window.URL.createObjectURL(file);
        const link=document.createElement('a')
        link.href=downloadUrl;
        link.download="Dummy.xlsx";
        link.click();
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  uploadExcelFile(){
    const file=this.mappingForm.get('file').value;
    console.log(file);
    this.service.uploadFile(file).subscribe({
      next:(resp)=>{
        console.log(resp);
       this.responseData = resp;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }



}
