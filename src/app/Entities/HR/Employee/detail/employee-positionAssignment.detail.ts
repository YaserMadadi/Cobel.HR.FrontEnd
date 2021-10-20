import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { PositionAssignment } from '../../PositionAssignment/positionAssignment';
import { PositionAssignmentMasterUI } from '../../PositionAssignment/master/positionAssignment.master';
import { PositionAssignmentEditUI } from '../../PositionAssignment/edit/positionAssignment.edit';
import { PositionAssignmentDeleteUI } from '../../PositionAssignment/delete/positionAssignment.delete';



@Component({
  selector: 'employee-positionAssignment-detail',
  templateUrl: './employee-positionAssignment.detail.html',
  styleUrls: ['./employee-positionAssignment.detail.css']
})
export class Employee_PositionAssignment_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public PositionAssignmentList : PositionAssignment[] = [];
  
  public currentPositionAssignment : PositionAssignment = new PositionAssignment();

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
      .CollectionOfPositionAssignment(this.employee)
      .then(positionAssignmentList => {
        this.PositionAssignmentList = positionAssignmentList;
        this.currentPositionAssignment = new PositionAssignment();
      });
  }

  public onSelect(i: number) {
    this.currentPositionAssignment = this.PositionAssignmentList[i];
    if (PositionAssignment.NotConfirm(this.currentPositionAssignment))
      this.currentPositionAssignment = new PositionAssignment();
  }

  public onDblClicked(masterUI: PositionAssignmentMasterUI) {
    if (PositionAssignment.NotConfirm(this.currentPositionAssignment))
      return;
    masterUI.ShowDialog(this.currentPositionAssignment);
  }

  public onAdd(editUI: PositionAssignmentEditUI) {
    editUI.Employee = this.employee;
    editUI.ShowDialog(new PositionAssignment());
  }

  public onEdit(editUI: PositionAssignmentEditUI) {
    if (PositionAssignment.NotConfirm(this.currentPositionAssignment))
      return;
    editUI.ShowDialog(this.currentPositionAssignment);
  }

  public onDelete(deleteUI: PositionAssignmentDeleteUI) {
    if (PositionAssignment.NotConfirm(this.currentPositionAssignment))
      return;
    deleteUI.ShowDialog(this.currentPositionAssignment);
  }

  public onEditModal_Closed(positionAssignment: PositionAssignment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}