import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  checkboxData:string[]=[];
 
  saveData(regData:any)
  {
    regData.value.elective=this.checkboxData
    console.log("Data->",regData.value)
  }

  getElectiveData(e:any)
  {
    console.log("value->>>",e.target.value)
    console.log("checked status->>>",e.target.checked)
 
    let value=e.target.value;
    let checkedStatus=e.target.checked;
 
    if(checkedStatus)
    {
      this.checkboxData.push(value)
    }else
    {
      let index=this.checkboxData.indexOf(value);
 
      console.log("index number-",index)
      this.checkboxData.splice(index,1)
    }
    console.log("Final Data->",this.checkboxData)
  }
}
