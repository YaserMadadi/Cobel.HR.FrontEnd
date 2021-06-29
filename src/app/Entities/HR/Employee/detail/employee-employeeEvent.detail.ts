import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { EmployeeEvent } from '../../EmployeeEvent/employeeEvent';
import { EmployeeEventMasterUI } from '../../EmployeeEvent/master/employeeEvent.master';
import { EmployeeEventEditUI } from '../../EmployeeEvent/edit/employeeEvent.edit';
import { EmployeeEventDeleteUI } from '../../EmployeeEvent/delete/employeeEvent.delete';



@Component({
  selector: 'employee-employeeEvent-detail',
  templateUrl: './employee-employeeEvent.detail.html',
  styleUrls: ['./employee-employeeEvent.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Employee_EmployeeEvent_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public EmployeeEventList : EmployeeEvent[] = [];
  
  public currentEmployeeEvent : EmployeeEvent = new EmployeeEvent();

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
      .CollectionOfEmployeeEvent(this.employee)
      .then(employeeEventList => {
        this.EmployeeEventList = employeeEventList;
        this.currentEmployeeEvent = new EmployeeEvent();
      });
  }

  public onSelect(i: number) {
    this.currentEmployeeEvent = this.EmployeeEventList[i];
    if (EmployeeEvent.NotConfirm(this.currentEmployeeEvent))
      this.currentEmployeeEvent = new EmployeeEvent();
  }

  public onDblClicked(masterUI: EmployeeEventMasterUI) {
    if (EmployeeEvent.NotConfirm(this.currentEmployeeEvent))
      return;
    masterUI.ShowDialog(this.currentEmployeeEvent);
  }

  public onAdd(editUI: EmployeeEventEditUI) {
    editUI.Employee = this.employee;
    editUI.ShowDialog(new EmployeeEvent());
  }

  public onEdit(editUI: EmployeeEventEditUI) {
    if (EmployeeEvent.NotConfirm(this.currentEmployeeEvent))
      return;
    editUI.ShowDialog(this.currentEmployeeEvent);
  }

  public onDelete(deleteUI: EmployeeEventDeleteUI) {
    if (EmployeeEvent.NotConfirm(this.currentEmployeeEvent))
      return;
    deleteUI.ShowDialog(this.currentEmployeeEvent);
  }

  public onEditModal_Closed(employeeEvent: EmployeeEvent) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}