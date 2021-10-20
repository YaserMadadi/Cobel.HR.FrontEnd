import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { HoldingSection } from '../holdingSection';
import { HoldingSectionService } from '../holdingSection.service';

import { EmployeeDetail } from '../../../HR/EmployeeDetail/employeeDetail';
import { EmployeeDetailMasterUI } from '../../../HR/EmployeeDetail/master/employeeDetail.master';
import { EmployeeDetailEditUI } from '../../../HR/EmployeeDetail/edit/employeeDetail.edit';
import { EmployeeDetailDeleteUI } from '../../../HR/EmployeeDetail/delete/employeeDetail.delete';



@Component({
  selector: 'holdingSection-employeeDetail-detail',
  templateUrl: './holdingSection-employeeDetail.detail.html',
  styleUrls: ['./holdingSection-employeeDetail.detail.css']
})
export class HoldingSection_EmployeeDetail_DetailUI extends DetailView<HoldingSection> {

  constructor(private holdingSectionService: HoldingSectionService) {
    super(holdingSectionService);
  }

  public EmployeeDetailList : EmployeeDetail[] = [];
  
  public currentEmployeeDetail : EmployeeDetail = new EmployeeDetail();

  private holdingSection: HoldingSection = new HoldingSection();

  @Input()
  public set HoldingSection(value: HoldingSection) {
    this.holdingSection = value;
    this.onReload();
  }

  public get HoldingSection(): HoldingSection { return this.holdingSection }

  public onReload(){
    if (HoldingSection.NotConfirm(this.holdingSection))
      return;
    this.holdingSectionService
      .ServiceCollection
      .CollectionOfEmployeeDetail(this.holdingSection)
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
    editUI.HoldingSection = this.holdingSection;
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