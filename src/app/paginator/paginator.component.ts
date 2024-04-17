import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  
  @Input() totalItems:any;
  @Input() currentPage:any;
  @Input() itemsPerPage:any;
  @Output() onClick:EventEmitter<number> = new EventEmitter();
  totalPages=0;
  pages:number[]=[];
  
  ngOnInit(): void {
    if(this.totalItems){
      this.totalPages=Math.ceil(this.totalItems/this.itemsPerPage);
      this.pages=Array.from({length:this.totalPages},(_,i)=>i+1);
    
    }
  }
 constructor() { 
 }

 pageClick(page:number){
  if(page>this.totalPages){
    return;
  }
  this.onClick.emit(page)
 }

}
