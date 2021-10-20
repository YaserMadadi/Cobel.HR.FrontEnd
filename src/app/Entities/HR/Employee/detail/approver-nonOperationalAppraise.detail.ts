import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { NonOperationalAppraise } from '../../../PMS/NonOperationalAppraise/nonOperationalAppraise';
import { NonOperationalAppraiseMasterUI } from '../../../PMS/NonOperationalAppraise/master/nonOperationalAppraise.master';
import { NonOperationalAppraiseEditUI } from '../../../PMS/NonOperationalAppraise/edit/nonOperationalAppraise.edit';
import { NonOperationalAppraiseDeleteUI } from '../../../PMS/NonOperationalAppraise/delete/nonOperationalAppraise.delete';



@Component({
  selector: 'approver-nonOperationalAppraise-detail',
  templateUrl: './approver-nonOperationalAppraise.detail.html',
  styleUrls: ['./approver-nonOperationalAppraise.detail.css']
})
export class Approver_NonOperationalAppraise_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public NonOperationalAppraiseList : NonOperationalAppraise[] = [];
  
  public currentNonOperationalAppraise : NonOperationalAppraise = new NonOperationalAppraise();

  private approver: Employee = new Employee();

  @Input()
  public set Approver(value: Employee) {
    this.approver = value;
    this.onReload();
  }

  public get Approver(): Employee { return this.approver }

  public onReload(){
    if (Employee.NotConfirm(this.approver))
      return;
    this.employeeService
      .ServiceCollection
      .CollectionOfNonOperationalAppraise_Approver(this.approver)
      .then(nonOperationalAppraiseList => {
        this.NonOperationalAppraiseList = nonOperationalAppraiseList;
        this.currentNonOperationalAppraise = new NonOperationalAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentNonOperationalAppraise = this.NonOperationalAppraiseList[i];
    if (NonOperationalAppraise.NotConfirm(this.currentNonOperationalAppraise))
      this.currentNonOperationalAppraise = new NonOperationalAppraise();
  }

  public onDblClicked(masterUI: NonOperationalAppraiseMasterUI) {
    if (NonOperationalAppraise.NotConfirm(this.currentNonOperationalAppraise))
      return;
    masterUI.ShowDialog(this.currentNonOperationalAppraise);
  }

  public onAdd(editUI: NonOperationalAppraiseEditUI) {
    editUI.Approver = this.approver;
    editUI.ShowDialog(new NonOperationalAppraise());
  }

  public onEdit(editUI: NonOperationalAppraiseEditUI) {
    if (NonOperationalAppraise.NotConfirm(this.currentNonOperationalAppraise))
      return;
    editUI.ShowDialog(this.currentNonOperationalAppraise);
  }

  public onDelete(deleteUI: NonOperationalAppraiseDeleteUI) {
    if (NonOperationalAppraise.NotConfirm(this.currentNonOperationalAppraise))
      return;
    deleteUI.ShowDialog(this.currentNonOperationalAppraise);
  }

  public onEditModal_Closed(nonOperationalAppraise: NonOperationalAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}