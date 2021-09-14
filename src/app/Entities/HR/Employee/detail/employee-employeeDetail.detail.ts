import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { EmployeeDetail } from '../../EmployeeDetail/employeeDetail';
import { EmployeeDetailMasterUI } from '../../EmployeeDetail/master/employeeDetail.master';
import { EmployeeDetailEditUI } from '../../EmployeeDetail/edit/employeeDetail.edit';
import { EmployeeDetailDeleteUI } from '../../EmployeeDetail/delete/employeeDetail.delete';



@Component({
  selector: 'employee-employeeDetail-detail',
  templateUrl: './employee-employeeDetail.detail.html',
  styleUrls: ['./employee-employeeDetail.detail.css']
})
export class Employee_EmployeeDetail_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public EmployeeDetailList : EmployeeDetail[] = [];
  
  public currentEmployeeDetail : EmployeeDetail = new EmployeeDetail();

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
      .CollectionOfEmployeeDetail(this.employee)
      .then(employeeDetailList => {
        this.EmployeeDetailList = employeeDetailList;
        this.currentEmployeeDetail = new EmployeeDetail();
      });
  }

  public onSelect(i: number) {
    this.currentEmployeeDetail = this.EmployeeDetailList[i];
    if (EmployeeDetail.NotConfirm(this.currentEmployeeDetail))
      this.currentEmployeeDetail = new EmployeeDetail();
  }

  public onDblClicked(masterUI: EmployeeDetailMasterUI) {
    if (EmployeeDetail.NotConfirm(this.currentEmployeeDetail))
      return;
    masterUI.ShowDialog(this.currentEmployeeDetail);
  }

  public onAdd(editUI: EmployeeDetailEditUI) {
    editUI.Employee = this.employee;
    editUI.ShowDialog(new EmployeeDetail());
  }

  public onEdit(editUI: EmployeeDetailEditUI) {
    if (EmployeeDetail.NotConfirm(this.currentEmployeeDetail))
      return;
    editUI.ShowDialog(this.currentEmployeeDetail);
  }

  public onDelete(deleteUI: EmployeeDetailDeleteUI) {
    if (EmployeeDetail.NotConfirm(this.currentEmployeeDetail))
      return;
    deleteUI.ShowDialog(this.currentEmployeeDetail);
  }

  public onEditModal_Closed(employeeDetail: EmployeeDetail) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}