import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { AppraiseTime } from '../appraiseTime';
import { AppraiseTimeService } from '../appraiseTime.service';

import { BehavioralAppraise } from '../../../PMS/BehavioralAppraise/behavioralAppraise';
import { BehavioralAppraiseMasterUI } from '../../../PMS/BehavioralAppraise/master/behavioralAppraise.master';
import { BehavioralAppraiseEditUI } from '../../../PMS/BehavioralAppraise/edit/behavioralAppraise.edit';
import { BehavioralAppraiseDeleteUI } from '../../../PMS/BehavioralAppraise/delete/behavioralAppraise.delete';



@Component({
  selector: 'appraiseTime-behavioralAppraise-detail',
  templateUrl: './appraiseTime-behavioralAppraise.detail.html',
  styleUrls: ['./appraiseTime-behavioralAppraise.detail.css'],
  providers: [AppraiseTimeService]
}) 

@Injectable()
export class AppraiseTime_BehavioralAppraise_DetailUI extends DetailView<AppraiseTime> {

  constructor(private appraiseTimeService: AppraiseTimeService) {
    super(appraiseTimeService);
  }

  public BehavioralAppraiseList : BehavioralAppraise[] = [];
  
  public currentBehavioralAppraise : BehavioralAppraise = new BehavioralAppraise();

  private appraiseTime: AppraiseTime = new AppraiseTime();

  @Input()
  public set AppraiseTime(value: AppraiseTime) {
    this.appraiseTime = value;
    this.onReload();
  }

  public get AppraiseTime(): AppraiseTime { return this.appraiseTime }

  public onReload(){
    if (AppraiseTime.NotConfirm(this.appraiseTime))
      return;
    this.appraiseTimeService
      .ServiceCollection
      .CollectionOfBehavioralAppraise(this.appraiseTime)
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
    editUI.AppraiseTime = this.appraiseTime;
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