import { Component, OnInit } from '@angular/core';
import { FileHandlingService } from '../services/file-handling.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent implements OnInit {
  ngOnInit(): void {
  }
  id:any;
  profile:any;
  user_name:any;
  imageData: string | ArrayBuffer | null | undefined;
  constructor(private service:FileHandlingService,private route:ActivatedRoute) {
    this.id=this.route.snapshot.paramMap.get('id');
    // this.service.getData(this.id).subscribe({
    //   next: data => {
    //     this.profile = data;
    //     console.log(this.profile);
    //   },
    //   error: error => {
    //     console.log(error);
    //   }
    // }
    // )
    this.getData();
   }

  getData() {
  this.service.getData(this.id).subscribe({
    next: (data: Blob) => {
      if (data.type.startsWith('image')) {
        // For image files
        const reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          this.imageData = reader.result as string;
        };
      } else if (data.type === 'application/pdf') {
        // For PDF files
        const file = new Blob([data], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }else if (data.type === 'application/vnd.ms-excel') {
        // For older Excel (XLS) files
        const file = new Blob([data], { type: 'application/vnd.ms-excel' });
        // const fileURL = URL.createObjectURL(file);
        // window.open(fileURL);

        const downloadUrl=window.URL.createObjectURL(file);
        const link=document.createElement('a')
        link.href=downloadUrl;
        link.download="Dummy.xlsx";
        link.click();
      } else if (data.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        // For newer Excel (XLSX) files
        const file = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        // const fileURL = URL.createObjectURL(file);
        // window.open(fileURL);

        const downloadUrl=window.URL.createObjectURL(file);
        const link=document.createElement('a')
        link.href=downloadUrl;
        link.download="Dummy.xlsx";
        link.click();
      }  else {
        // Handle other file types as needed
        console.log("Unsupported file type");
      }
    },
    error: error => {
      console.log(error);
    }
  });
}




}
