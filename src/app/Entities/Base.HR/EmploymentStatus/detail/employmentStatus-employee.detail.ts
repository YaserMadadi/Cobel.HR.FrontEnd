import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { EmploymentStatus } from '../employmentStatus';
import { EmploymentStatusService } from '../employmentStatus.service';

import { Employee } from '../../../HR/Employee/employee';
import { EmployeeMasterUI } from '../../../HR/Employee/master/employee.master';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { EmployeeDeleteUI } from '../../../HR/Employee/delete/employee.delete';



@Component({
  selector: 'employmentStatus-employee-detail',
  templateUrl: './employmentStatus-employee.detail.html',
  styleUrls: ['./employmentStatus-employee.detail.css'],
  providers: [EmploymentStatusService]
}) 

@Injectable()
export class EmploymentStatus_Employee_DetailUI extends DetailView<EmploymentStatus> {

  constructor(private employmentStatusService: EmploymentStatusService) {
    super(employmentStatusService);
  }

  public EmployeeList : Employee[] = [];
  
  public currentEmployee : Employee = new Employee();

  private employmentStatus: EmploymentStatus = new EmploymentStatus();

  @Input()
  public set EmploymentStatus(value: EmploymentStatus) {
    this.employmentStatus = value;
    this.onReload();
  }

  public get EmploymentStatus(): EmploymentStatus { return this.employmentStatus }

  public onReload(){
    if (EmploymentStatus.NotConfirm(this.employmentStatus))
      return;
    this.employmentStatusService
      .ServiceCollection
      .CollectionOfEmployee(this.employmentStatus)
      .then(employeeList => {
        this.EmployeeList = employeeList;
        this.currentEmployee = new Employee();
      });
  }

  public onSelect(i: number) {
    this.currentEmployee = this.EmployeeList[i];
    if (Employee.NotConfirm(this.currentEmployee))
      this.currentEmployee = new Employee();
  }

  public onDblClicked(masterUI: EmployeeMasterUI) {
    if (Employee.NotConfirm(this.currentEmployee))
      return;
    masterUI.ShowDialog(this.currentEmployee);
  }

  public onAdd(editUI: EmployeeEditUI) {
    editUI.EmploymentStatus = this.employmentStatus;
    editUI.ShowDialog(new Employee());
  }

  public onEdit(editUI: EmployeeEditUI) {
    if (Employee.NotConfirm(this.currentEmployee))
      return;
    editUI.ShowDialog(this.currentEmployee);
  }

  public onDelete(deleteUI: EmployeeDeleteUI) {
    if (Employee.NotConfirm(this.currentEmployee))
      return;
    deleteUI.ShowDialog(this.currentEmployee);
  }

  public onEditModal_Closed(employee: Employee) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
