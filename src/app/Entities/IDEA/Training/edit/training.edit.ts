import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Training } from '../training';
import { TrainingService } from '../training.service';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { Course } from '../../Course/course';
import { CourseEditUI } from '../../Course/edit/course.edit';



@Component({
  selector: 'idea-training-edit',
  templateUrl: './training.edit.html',
  styleUrls: ['./training.edit.css']
})
export class TrainingEditUI extends EditModal<Training> implements IEditModal<Training>  {
  
  constructor(private trainingService: TrainingService) {
    super(trainingService); 
    this.currentInstance = new Training();
  }

  //#region Foreign Entities
	
	//#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.trainingService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --
	//#region -- Course --

  courseComponent : ForeignComponent<Course> = new ForeignComponent<Course>(this.trainingService.CourseService);

  @Input()
  public set Course(value: Course) {
    this.currentInstance.course = this.courseComponent.instance = value;
  }  


  //#endregion -- Course --
	//#endregion

  @ViewChild('trainingEditUI')
  private trainingEditUI: NgForm;

  Init(training: Training = new Training()) {
    if (training.isNew)
      this.trainingEditUI.reset();
    this.InitTraining(training);
    this.loadLists();
  }

  private loadLists() {
    
    this.courseComponent.LoadList();
  }
  
  InitTraining(training: Training){
    this.currentInstance = this.service.CreateInstance();
    if (!training.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = training.employee;
			this.courseComponent.instance = training.course;
    } else {
      training.employee = this.employeeComponent.instance;
			training.course = this.courseComponent.instance;
    }
    this.currentInstance = training;
  }

  ResetForm() {
    this.Employee = new Employee();
		this.Course = new Course();
  }
}