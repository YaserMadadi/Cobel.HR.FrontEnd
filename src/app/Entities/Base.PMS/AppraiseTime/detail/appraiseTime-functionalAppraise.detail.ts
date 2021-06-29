import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { AppraiseTime } from '../appraiseTime';
import { AppraiseTimeService } from '../appraiseTime.service';

import { FunctionalAppraise } from '../../../PMS/FunctionalAppraise/functionalAppraise';
import { FunctionalAppraiseMasterUI } from '../../../PMS/FunctionalAppraise/master/functionalAppraise.master';
import { FunctionalAppraiseEditUI } from '../../../PMS/FunctionalAppraise/edit/functionalAppraise.edit';
import { FunctionalAppraiseDeleteUI } from '../../../PMS/FunctionalAppraise/delete/functionalAppraise.delete';



@Component({
  selector: 'appraiseTime-functionalAppraise-detail',
  templateUrl: './appraiseTime-functionalAppraise.detail.html',
  styleUrls: ['./appraiseTime-functionalAppraise.detail.css'],
  providers: [AppraiseTimeService]
}) 

@Injectable()
export class AppraiseTime_FunctionalAppraise_DetailUI extends DetailView<AppraiseTime> {

  constructor(private appraiseTimeService: AppraiseTimeService) {
    super(appraiseTimeService);
  }

  public FunctionalAppraiseList : FunctionalAppraise[] = [];
  
  public currentFunctionalAppraise : FunctionalAppraise = new FunctionalAppraise();

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
      .CollectionOfFunctionalAppraise(this.appraiseTime)
      .then(functionalAppraiseList => {
        this.FunctionalAppraiseList = functionalAppraiseList;
        this.currentFunctionalAppraise = new FunctionalAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentFunctionalAppraise = this.FunctionalAppraiseList[i];
    if (FunctionalAppraise.NotConfirm(this.currentFunctionalAppraise))
      this.currentFunctionalAppraise = new FunctionalAppraise();
  }

  public onDblClicked(masterUI: FunctionalAppraiseMasterUI) {
    if (FunctionalAppraise.NotConfirm(this.currentFunctionalAppraise))
      return;
    masterUI.ShowDialog(this.currentFunctionalAppraise);
  }

  public onAdd(editUI: FunctionalAppraiseEditUI) {
    editUI.AppraiseTime = this.appraiseTime;
    editUI.ShowDialog(new FunctionalAppraise());
  }

  public onEdit(editUI: FunctionalAppraiseEditUI) {
    if (FunctionalAppraise.NotConfirm(this.currentFunctionalAppraise))
      return;
    editUI.ShowDialog(this.currentFunctionalAppraise);
  }

  public onDelete(deleteUI: FunctionalAppraiseDeleteUI) {
    if (FunctionalAppraise.NotConfirm(this.currentFunctionalAppraise))
      return;
    deleteUI.ShowDialog(this.currentFunctionalAppraise);
  }

  public onEditModal_Closed(functionalAppraise: FunctionalAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}