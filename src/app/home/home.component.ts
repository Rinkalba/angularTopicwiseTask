import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  ngOnInit(): void {  
  }



  constructor(private router:Router) { }

  studentData:any=[{
    "id":101,
    "name": "Rinkal",
    "age":22
  },{
    "id":102,
    "name": "Anil",
    "age":24
  },{
     "id":103,
     "name": "Divya",
     "age":12
  },{
    "id":104,
    "name": "Riya",
    "age":23
  },{
    "id":105,
    "name": "Dinesh",
    "age":24
  }]

  getData(stu:any){
    this.router.navigate(['/students',stu.id]);
  }

  getDataWithName(stu:any){
    this.router.navigate(['/students',stu.id,stu.name]);
  }

}
