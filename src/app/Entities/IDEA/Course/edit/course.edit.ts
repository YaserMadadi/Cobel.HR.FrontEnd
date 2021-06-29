import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Course } from '../course';
import { CourseService } from '../course.service';



@Component({
  selector: 'idea-course-edit',
  templateUrl: './course.edit.html',
  styleUrls: ['./course.edit.css']
})
export class CourseEditUI extends EditModal<Course> implements IEditModal<Course>  {
  
  constructor(private courseService: CourseService) {
    super(courseService); 
    this.currentInstance = new Course();
  }

  

  @ViewChild('courseEditUI')
  private courseEditUI: NgForm;

  Init(course: Course = new Course()) {
    if (course.isNew)
      this.courseEditUI.reset();
    this.InitCourse(course);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCourse(course: Course) {
    if (!course.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = course;
  }

  ResetForm() {
    
  }
}