﻿import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';

import { BehavioralKPI } from '../behavioralKPI';
import { BehavioralKPIService } from '../behavioralKPI.service';

import { BehavioralAppraise } from '../../BehavioralAppraise/behavioralAppraise';
import { BehavioralAppraiseMasterUI } from '../../BehavioralAppraise/master/behavioralAppraise.master';
import { BehavioralAppraiseEditUI } from '../../BehavioralAppraise/edit/behavioralAppraise.edit';
import { BehavioralAppraiseDeleteUI } from '../../BehavioralAppraise/delete/behavioralAppraise.delete';
import { AuthService } from '../../../../../xcore/security/auth_service';
import { MessageController, toastType } from '../../../../../xcore/tools/controller.message';
import { PositionController } from '../../../../../xcore/tools/controller.positions';

@Component({
  selector: 'behavioralKPI-behavioralAppraise-detail',
  templateUrl: './behavioralKPI-behavioralAppraise.detail.html',
  styleUrls: ['./behavioralKPI-behavioralAppraise.detail.css'],
  providers: [BehavioralKPIService]
}) 

@Injectable()
export class BehavioralKPI_BehavioralAppraise_DetailUI extends DetailView<BehavioralKPI> {

  constructor(private behavioralKPIService: BehavioralKPIService) {
    super(behavioralKPIService);
  }

  public BehavioralAppraiseList : BehavioralAppraise[] = [];
  
  public currentBehavioralAppraise : BehavioralAppraise = new BehavioralAppraise();

  private behavioralKPI: BehavioralKPI = new BehavioralKPI();

  @Input()
  public set BehavioralKPI(value: BehavioralKPI) {
    this.behavioralKPI = value;
    this.onReload();
  }

  public get BehavioralKPI(): BehavioralKPI { return this.behavioralKPI }

  public onReload(){
    if (BehavioralKPI.NotConfirm(this.behavioralKPI))
      return;
    this.behavioralKPIService
      .ServiceCollection
      .CollectionOfBehavioralAppraise(this.behavioralKPI)
      .then(behavioralAppraiseList => {
        this.BehavioralAppraiseList = behavioralAppraiseList;
        this.currentBehavioralAppraise = new BehavioralAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentBehavioralAppraise = this.BehavioralAppraiseList[i];
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      this.currentBehavioralAppraise = new BehavioralAppraise();
  }

  public onDblClicked(masterUI: BehavioralAppraiseMasterUI) {
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      return;
    masterUI.ShowDialog(this.currentBehavioralAppraise);
  }

  public onAdd(editUI: BehavioralAppraiseEditUI) {
    editUI.BehavioralKPI = this.behavioralKPI;
    editUI.SetDefault();
    editUI.ShowDialog(new BehavioralAppraise());
  }

  public onEdit(editUI: BehavioralAppraiseEditUI) {
    if (this.currentBehavioralAppraise.appraiser.id != AuthService.currentEmployee.id &&
      AuthService.currentPositionList.filter(p => p.id == PositionController.HR_PMS_Position_Id).length == 0) {
      MessageController.ShowMessage('You are not allowed to Edit this record of Appraisal!', toastType.error);
      return;
    }
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      return;
    editUI.ShowDialog(this.currentBehavioralAppraise);
  }

  public onDelete(deleteUI: BehavioralAppraiseDeleteUI) {
    if (this.currentBehavioralAppraise.appraiser.id != AuthService.currentEmployee.id &&
      AuthService.currentPositionList.filter(p => p.id == PositionController.HR_PMS_Position_Id).length == 0) {
      MessageController.ShowMessage('You are not allowed to Delete this record of Appraisal!', toastType.error);
      return;
    }
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      return;
    deleteUI.ShowDialog(this.currentBehavioralAppraise);
  }

  public onEditModal_Closed(behavioralAppraise: BehavioralAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}