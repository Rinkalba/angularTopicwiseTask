import { Component, OnInit, ViewChild } from '@angular/core';
import { ExcelHandlingService } from '../services/excel-handling.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-angular-pagination',
  templateUrl: './angular-pagination.component.html',
  styleUrls: ['./angular-pagination.component.css']
})
export class AngularPaginationComponent implements OnInit {
  ngOnInit(): void {
  }

  tableData:any;
  dataSource:any;
  displayedData:string[]=["id", "date","title","percentage"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private service:ExcelHandlingService){
    this.service.getAllData().subscribe({
      next: data => {
        console.log(data);
        this.tableData = data;
        this.dataSource = new MatTableDataSource(this.tableData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
       
      },
      error: error => {
        console.log(error);
      }
    })
  }

  filterChange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

}
