import { Component } from '@angular/core';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

 
  ans:number|string=0;
 
  movieName:string='';

  flag:boolean=this.movieName!='';

  students=[
    {
      'name': 'Rohit',
      'age': 34,
      'addresses':['Ahmedabad','Indore','Rajkot'],
      'pincode': 457681
    },
    {
      'name': 'Anil',
      'age': 24,
      'addresses':['Rajkot','Delhi','Indore'],
      'pincode': 457001
    },
    {
      'name': 'Dinesh',
      'age': 26,
      'addresses':['Ahmedabad','Indore','Rajkot'],
      'pincode': 537479
    },
    {
      'name': 'Sachin',
      'age': 14,
      'addresses':['Ahmedabad','Indore','Rajkot'],
      'pincode': 576363
    },
  ];
 

  calc(num1:string,num2:string,flag:number){
    console.log(Number(num1)>Number(num2));
    if(Number(num1)>Number(num2) ){
      if(flag==1){
        return this.ans=((Number(num1)+Number(num2)));
      }else if(flag==2){
        return this.ans=((Number(num1)-Number(num2)));
      }else if(flag==3){
        return this.ans=((Number(num1)/Number(num2)));
      }else if(flag==4){
        return this.ans=((Number(num1)*Number(num2)));
      }

    }
    if(num1=='' || num2==''){
      return this.ans="Number should not be empty";
    }
    return this.ans="Number 1 should be greater than Number 2";
}
}