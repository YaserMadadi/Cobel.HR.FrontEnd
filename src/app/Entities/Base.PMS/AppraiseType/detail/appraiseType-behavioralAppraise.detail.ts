import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { AppraiseType } from '../appraiseType';
import { AppraiseTypeService } from '../appraiseType.service';

import { BehavioralAppraise } from '../../../PMS/BehavioralAppraise/behavioralAppraise';
import { BehavioralAppraiseMasterUI } from '../../../PMS/BehavioralAppraise/master/behavioralAppraise.master';
import { BehavioralAppraiseEditUI } from '../../../PMS/BehavioralAppraise/edit/behavioralAppraise.edit';
import { BehavioralAppraiseDeleteUI } from '../../../PMS/BehavioralAppraise/delete/behavioralAppraise.delete';



@Component({
  selector: 'appraiseType-behavioralAppraise-detail',
  templateUrl: './appraiseType-behavioralAppraise.detail.html',
  styleUrls: ['./appraiseType-behavioralAppraise.detail.css']
})
export class AppraiseType_BehavioralAppraise_DetailUI extends DetailView<AppraiseType> {

  constructor(private appraiseTypeService: AppraiseTypeService) {
    super(appraiseTypeService);
  }

  public BehavioralAppraiseList : BehavioralAppraise[] = [];
  
  public currentBehavioralAppraise : BehavioralAppraise = new BehavioralAppraise();

  private appraiseType: AppraiseType = new AppraiseType();

  @Input()
  public set AppraiseType(value: AppraiseType) {
    this.appraiseType = value;
    this.onReload();
  }

  public get AppraiseType(): AppraiseType { return this.appraiseType }

  public onReload(){
    if (AppraiseType.NotConfirm(this.appraiseType))
      return;
    this.appraiseTypeService
      .ServiceCollection
      .CollectionOfBehavioralAppraise(this.appraiseType)
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
    editUI.AppraiseType = this.appraiseType;
    editUI.ShowDialog(new BehavioralAppraise());
  }

  public onEdit(editUI: BehavioralAppraiseEditUI) {
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      return;
    editUI.ShowDialog(this.currentBehavioralAppraise);
  }

  public onDelete(deleteUI: BehavioralAppraiseDeleteUI) {
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