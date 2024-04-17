import { Component, OnInit } from '@angular/core';
import { MappingServiceService } from '../services/mapping-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.css']
})
export class GetAllBookComponent implements OnInit {
  ngOnInit(): void {
  }
  books:any[] =[];
  faEdit=faEdit;
  constructor(private router: Router, private mappingService:MappingServiceService) {
    this.getAllBooks(); 
  }
  getAllBooks(){
    this.mappingService.getAllBook().subscribe({
      next:(resp)=>{
        this.books = resp;
      },
      error:(err)=>{
        console.log(err);
      }
    }
    )
  }

  updateBook(id:any){
    this.router.navigate(["/update",id]);
  }

}
