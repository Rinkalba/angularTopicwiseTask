import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  ngOnInit(): void {
   
  }

  studentId:any;
  studentName:any;
  constructor(private router: ActivatedRoute){
    this.studentId =this.router.snapshot.paramMap.get('id');
    this.studentName =this.router.snapshot.paramMap.get('name');
  }

}
