import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { AssessmentType } from '../../AssessmentType/assessmentType';
import { AssessmentTypeEditUI } from '../../AssessmentType/edit/assessmentType.edit';
import { Assessor } from '../../Assessor/assessor';
import { AssessorEditUI } from '../../Assessor/edit/assessor.edit';



@Component({
  selector: 'lad-assessment-edit',
  templateUrl: './assessment.edit.html',
  styleUrls: ['./assessment.edit.css']
})
export class AssessmentEditUI extends EditModal<Assessment> implements IEditModal<Assessment>  {
  
  constructor(private assessmentService: AssessmentService) {
    super(assessmentService); 
    this.currentInstance = new Assessment();
  }

  //#region Foreign Entities
	
	//#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.assessmentService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --
	//#region -- AssessmentType --

  assessmentTypeComponent : ForeignComponent<AssessmentType> = new ForeignComponent<AssessmentType>(this.assessmentService.AssessmentTypeService);

  @Input()
  public set AssessmentType(value: AssessmentType) {
    this.currentInstance.assessmentType = this.assessmentTypeComponent.instance = value;
  }  


  //#endregion -- AssessmentType --
	//#region -- Assessor --

  assessorComponent : ForeignComponent<Assessor> = new ForeignComponent<Assessor>(this.assessmentService.AssessorService);

  @Input()
  public set Assessor(value: Assessor) {
    this.currentInstance.assessor = this.assessorComponent.instance = value;
  }  


  //#endregion -- Assessor --
	//#endregion

  @ViewChild('assessmentEditUI')
  private assessmentEditUI: NgForm;

  Init(assessment: Assessment = new Assessment()) {
    if (assessment.isNew)
      this.assessmentEditUI.reset();
    this.InitAssessment(assessment);
    this.loadLists();
  }

  private loadLists() {
    
    this.assessmentTypeComponent.LoadList();
  }
  
  InitAssessment(assessment: Assessment) {
    if (!assessment.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = assessment.employee;
			this.assessmentTypeComponent.instance = assessment.assessmentType;
			this.assessorComponent.instance = assessment.assessor;
    } else {
      assessment.employee = this.employeeComponent.instance;
			assessment.assessmentType = this.assessmentTypeComponent.instance;
			assessment.assessor = this.assessorComponent.instance;
    }
    this.currentInstance = assessment;
  }

  ResetForm() {
    this.Employee = new Employee();
		this.AssessmentType = new AssessmentType();
		this.Assessor = new Assessor();
  }
}