import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChildHomeComponent } from './child-home/child-home.component';
import { TemplateFormComponent } from './TemplateDrivenForm/template-form/template-form.component';
import { MappingComponent } from './mapping/mapping.component';
import { GetAllBookComponent } from './get-all-book/get-all-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { FileHandlingComponent } from './file-handling/file-handling.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { ExcelHandlingComponent } from './excel-handling/excel-handling.component';
import { AngularPaginationComponent } from './angular-pagination/angular-pagination.component';

const routes: Routes = [{
  path:'',
  redirectTo: '/home',
  pathMatch:'full'
},
{
  path:'home',
  component:HomeComponent,
 
},
{
  path:'students/:id',
  component:StudentDetailComponent
},
{
  path:'students/:id/:name',
  component:StudentDetailComponent
},
{
  path:'templateForm',
  component:TemplateFormComponent
},
{
  path:'mapping',
  component:MappingComponent
},
{
  path:'getAll',
  component:GetAllBookComponent
},
{
  path:'update/:id',
  component:UpdateBookComponent
},
{
  path:'fileHandling',
  component:FileHandlingComponent
},
{
  path:'getProfile/:id',
  component:GetProfileComponent
},{
  path:"excelHandling",
  component:ExcelHandlingComponent
},
{
  path:"pagination",
  component:AngularPaginationComponent
},
{
  path:'**',
  component:NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
