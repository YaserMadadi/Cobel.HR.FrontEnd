import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { Assessment } from '../../../LAD/Assessment/assessment';
import { AssessmentMasterUI } from '../../../LAD/Assessment/master/assessment.master';
import { AssessmentEditUI } from '../../../LAD/Assessment/edit/assessment.edit';
import { AssessmentDeleteUI } from '../../../LAD/Assessment/delete/assessment.delete';



@Component({
  selector: 'employee-assessment-detail',
  templateUrl: './employee-assessment.detail.html',
  styleUrls: ['./employee-assessment.detail.css']
})
export class Employee_Assessment_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public AssessmentList : Assessment[] = [];
  
  public currentAssessment : Assessment = new Assessment();

  private employee: Employee = new Employee();

  @Input()
  public set Employee(value: Employee) {
    this.employee = value;
    this.onReload();
  }

  public get Employee(): Employee { return this.employee }

  public onReload(){
    if (Employee.NotConfirm(this.employee))
      return;
    this.employeeService
      .ServiceCollection
      .CollectionOfAssessment(this.employee)
      .then(assessmentList => {
        this.AssessmentList = assessmentList;
        this.currentAssessment = new Assessment();
      });
  }

  public onSelect(i: number) {
    this.currentAssessment = this.AssessmentList[i];
    if (Assessment.NotConfirm(this.currentAssessment))
      this.currentAssessment = new Assessment();
  }

  public onDblClicked(masterUI: AssessmentMasterUI) {
    if (Assessment.NotConfirm(this.currentAssessment))
      return;
    masterUI.ShowDialog(this.currentAssessment);
  }

  public onAdd(editUI: AssessmentEditUI) {
    editUI.Employee = this.employee;
    editUI.ShowDialog(new Assessment());
  }

  public onEdit(editUI: AssessmentEditUI) {
    if (Assessment.NotConfirm(this.currentAssessment))
      return;
    editUI.ShowDialog(this.currentAssessment);
  }

  public onDelete(deleteUI: AssessmentDeleteUI) {
    if (Assessment.NotConfirm(this.currentAssessment))
      return;
    deleteUI.ShowDialog(this.currentAssessment);
  }

  public onEditModal_Closed(assessment: Assessment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}