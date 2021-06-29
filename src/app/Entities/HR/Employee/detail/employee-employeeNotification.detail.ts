import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { EmployeeNotification } from '../../EmployeeNotification/employeeNotification';
import { EmployeeNotificationMasterUI } from '../../EmployeeNotification/master/employeeNotification.master';
import { EmployeeNotificationEditUI } from '../../EmployeeNotification/edit/employeeNotification.edit';
import { EmployeeNotificationDeleteUI } from '../../EmployeeNotification/delete/employeeNotification.delete';



@Component({
  selector: 'employee-employeeNotification-detail',
  templateUrl: './employee-employeeNotification.detail.html',
  styleUrls: ['./employee-employeeNotification.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Employee_EmployeeNotification_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public EmployeeNotificationList : EmployeeNotification[] = [];
  
  public currentEmployeeNotification : EmployeeNotification = new EmployeeNotification();

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
      .CollectionOfEmployeeNotification(this.employee)
      .then(employeeNotificationList => {
        this.EmployeeNotificationList = employeeNotificationList;
        this.currentEmployeeNotification = new EmployeeNotification();
      });
  }

  public onSelect(i: number) {
    this.currentEmployeeNotification = this.EmployeeNotificationList[i];
    if (EmployeeNotification.NotConfirm(this.currentEmployeeNotification))
      this.currentEmployeeNotification = new EmployeeNotification();
  }

  public onDblClicked(masterUI: EmployeeNotificationMasterUI) {
    if (EmployeeNotification.NotConfirm(this.currentEmployeeNotification))
      return;
    masterUI.ShowDialog(this.currentEmployeeNotification);
  }

  public onAdd(editUI: EmployeeNotificationEditUI) {
    editUI.Employee = this.employee;
    editUI.ShowDialog(new EmployeeNotification());
  }

  public onEdit(editUI: EmployeeNotificationEditUI) {
    if (EmployeeNotification.NotConfirm(this.currentEmployeeNotification))
      return;
    editUI.ShowDialog(this.currentEmployeeNotification);
  }

  public onDelete(deleteUI: EmployeeNotificationDeleteUI) {
    if (EmployeeNotification.NotConfirm(this.currentEmployeeNotification))
      return;
    deleteUI.ShowDialog(this.currentEmployeeNotification);
  }

  public onEditModal_Closed(employeeNotification: EmployeeNotification) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}