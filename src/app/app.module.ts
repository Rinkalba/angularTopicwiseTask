import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule, _MatTableDataSource} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChildHomeComponent } from './child-home/child-home.component';
import { TemplateFormComponent } from './TemplateDrivenForm/template-form/template-form.component';
import { MappingComponent } from './mapping/mapping.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateBookComponent } from './update-book/update-book.component';
import { GetAllBookComponent } from './get-all-book/get-all-book.component';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FileHandlingComponent } from './file-handling/file-handling.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { ExcelHandlingComponent } from './excel-handling/excel-handling.component';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {Sort, MatSortModule, SortDirection} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PaginatorComponent } from './paginator/paginator.component';
import { AngularPaginationComponent } from './angular-pagination/angular-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    HomeComponent,
    StudentDetailComponent,
    NotFoundComponent,
    ChildHomeComponent,
    TemplateFormComponent,
    MappingComponent,
    UpdateBookComponent,
    GetAllBookComponent,
    FileHandlingComponent,
    GetProfileComponent,
    ExcelHandlingComponent,
    PaginatorComponent,
    AngularPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FaIconComponent,
    MatButtonModule,
    MatTableModule, 
    MatSortModule,
    MatPaginatorModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
