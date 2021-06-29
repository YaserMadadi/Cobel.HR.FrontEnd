import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { AppraiseTime } from '../appraiseTime';
import { AppraiseTimeService } from '../appraiseTime.service';

import { QualitativeAppraise } from '../../../PMS/QualitativeAppraise/qualitativeAppraise';
import { QualitativeAppraiseMasterUI } from '../../../PMS/QualitativeAppraise/master/qualitativeAppraise.master';
import { QualitativeAppraiseEditUI } from '../../../PMS/QualitativeAppraise/edit/qualitativeAppraise.edit';
import { QualitativeAppraiseDeleteUI } from '../../../PMS/QualitativeAppraise/delete/qualitativeAppraise.delete';



@Component({
  selector: 'appraiseTime-qualitativeAppraise-detail',
  templateUrl: './appraiseTime-qualitativeAppraise.detail.html',
  styleUrls: ['./appraiseTime-qualitativeAppraise.detail.css'],
  providers: [AppraiseTimeService]
}) 

@Injectable()
export class AppraiseTime_QualitativeAppraise_DetailUI extends DetailView<AppraiseTime> {

  constructor(private appraiseTimeService: AppraiseTimeService) {
    super(appraiseTimeService);
  }

  public QualitativeAppraiseList : QualitativeAppraise[] = [];
  
  public currentQualitativeAppraise : QualitativeAppraise = new QualitativeAppraise();

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
      .CollectionOfQualitativeAppraise(this.appraiseTime)
      .then(qualitativeAppraiseList => {
        this.QualitativeAppraiseList = qualitativeAppraiseList;
        this.currentQualitativeAppraise = new QualitativeAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentQualitativeAppraise = this.QualitativeAppraiseList[i];
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      this.currentQualitativeAppraise = new QualitativeAppraise();
  }

  public onDblClicked(masterUI: QualitativeAppraiseMasterUI) {
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      return;
    masterUI.ShowDialog(this.currentQualitativeAppraise);
  }

  public onAdd(editUI: QualitativeAppraiseEditUI) {
    editUI.AppraiseTime = this.appraiseTime;
    editUI.ShowDialog(new QualitativeAppraise());
  }

  public onEdit(editUI: QualitativeAppraiseEditUI) {
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      return;
    editUI.ShowDialog(this.currentQualitativeAppraise);
  }

  public onDelete(deleteUI: QualitativeAppraiseDeleteUI) {
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      return;
    deleteUI.ShowDialog(this.currentQualitativeAppraise);
  }

  public onEditModal_Closed(qualitativeAppraise: QualitativeAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}