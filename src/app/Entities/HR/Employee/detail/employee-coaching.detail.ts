import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { Coaching } from '../../../LAD/Coaching/coaching';
import { CoachingMasterUI } from '../../../LAD/Coaching/master/coaching.master';
import { CoachingEditUI } from '../../../LAD/Coaching/edit/coaching.edit';
import { CoachingDeleteUI } from '../../../LAD/Coaching/delete/coaching.delete';



@Component({
  selector: 'employee-coaching-detail',
  templateUrl: './employee-coaching.detail.html',
  styleUrls: ['./employee-coaching.detail.css']
})
export class Employee_Coaching_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public CoachingList : Coaching[] = [];
  
  public currentCoaching : Coaching = new Coaching();

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
      .CollectionOfCoaching(this.employee)
      .then(coachingList => {
        this.CoachingList = coachingList;
        this.currentCoaching = new Coaching();
      });
  }

  public onSelect(i: number) {
    this.currentCoaching = this.CoachingList[i];
    if (Coaching.NotConfirm(this.currentCoaching))
      this.currentCoaching = new Coaching();
  }

  public onDblClicked(masterUI: CoachingMasterUI) {
    if (Coaching.NotConfirm(this.currentCoaching))
      return;
    masterUI.ShowDialog(this.currentCoaching);
  }

  public onAdd(editUI: CoachingEditUI) {
    editUI.Employee = this.employee;
    editUI.ShowDialog(new Coaching());
  }

  public onEdit(editUI: CoachingEditUI) {
    if (Coaching.NotConfirm(this.currentCoaching))
      return;
    editUI.ShowDialog(this.currentCoaching);
  }

  public onDelete(deleteUI: CoachingDeleteUI) {
    if (Coaching.NotConfirm(this.currentCoaching))
      return;
    deleteUI.ShowDialog(this.currentCoaching);
  }

  public onEditModal_Closed(coaching: Coaching) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}