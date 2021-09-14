import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { TargetSetting } from '../../../PMS/TargetSetting/targetSetting';
import { TargetSettingMasterUI } from '../../../PMS/TargetSetting/master/targetSetting.master';
import { TargetSettingEditUI } from '../../../PMS/TargetSetting/edit/targetSetting.edit';
import { TargetSettingDeleteUI } from '../../../PMS/TargetSetting/delete/targetSetting.delete';



@Component({
  selector: 'employee-targetSetting-detail',
  templateUrl: './employee-targetSetting.detail.html',
  styleUrls: ['./employee-targetSetting.detail.css']
})
export class Employee_TargetSetting_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public TargetSettingList : TargetSetting[] = [];
  
  public currentTargetSetting : TargetSetting = new TargetSetting();

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
      .CollectionOfTargetSetting(this.employee)
      .then(targetSettingList => {
        this.TargetSettingList = targetSettingList;
        this.currentTargetSetting = new TargetSetting();
      });
  }

  public onSelect(i: number) {
    this.currentTargetSetting = this.TargetSettingList[i];
    if (TargetSetting.NotConfirm(this.currentTargetSetting))
      this.currentTargetSetting = new TargetSetting();
  }

  public onDblClicked(masterUI: TargetSettingMasterUI) {
    if (TargetSetting.NotConfirm(this.currentTargetSetting))
      return;
    masterUI.ShowDialog(this.currentTargetSetting);
  }

  public onAdd(editUI: TargetSettingEditUI) {
    editUI.Employee = this.employee;
    editUI.ShowDialog(new TargetSetting());
  }

  public onEdit(editUI: TargetSettingEditUI) {
    if (TargetSetting.NotConfirm(this.currentTargetSetting))
      return;
    editUI.ShowDialog(this.currentTargetSetting);
  }

  public onDelete(deleteUI: TargetSettingDeleteUI) {
    if (TargetSetting.NotConfirm(this.currentTargetSetting))
      return;
    deleteUI.ShowDialog(this.currentTargetSetting);
  }

  public onEditModal_Closed(targetSetting: TargetSetting) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}