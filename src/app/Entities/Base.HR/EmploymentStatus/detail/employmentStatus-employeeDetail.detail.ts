import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { EmploymentStatus } from '../employmentStatus';
import { EmploymentStatusService } from '../employmentStatus.service';

import { EmployeeDetail } from '../../../HR/EmployeeDetail/employeeDetail';
import { EmployeeDetailMasterUI } from '../../../HR/EmployeeDetail/master/employeeDetail.master';
import { EmployeeDetailEditUI } from '../../../HR/EmployeeDetail/edit/employeeDetail.edit';
import { EmployeeDetailDeleteUI } from '../../../HR/EmployeeDetail/delete/employeeDetail.delete';



@Component({
  selector: 'employmentStatus-employeeDetail-detail',
  templateUrl: './employmentStatus-employeeDetail.detail.html',
  styleUrls: ['./employmentStatus-employeeDetail.detail.css']
})
export class EmploymentStatus_EmployeeDetail_DetailUI extends DetailView<EmploymentStatus> {

  constructor(private employmentStatusService: EmploymentStatusService) {
    super(employmentStatusService);
  }

  public EmployeeDetailList : EmployeeDetail[] = [];
  
  public currentEmployeeDetail : EmployeeDetail = new EmployeeDetail();

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
      .CollectionOfEmployeeDetail(this.employmentStatus)
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
    editUI.EmploymentStatus = this.employmentStatus;
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
