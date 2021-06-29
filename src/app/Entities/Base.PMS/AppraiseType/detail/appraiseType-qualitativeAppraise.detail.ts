import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { AppraiseType } from '../appraiseType';
import { AppraiseTypeService } from '../appraiseType.service';

import { QualitativeAppraise } from '../../../PMS/QualitativeAppraise/qualitativeAppraise';
import { QualitativeAppraiseMasterUI } from '../../../PMS/QualitativeAppraise/master/qualitativeAppraise.master';
import { QualitativeAppraiseEditUI } from '../../../PMS/QualitativeAppraise/edit/qualitativeAppraise.edit';
import { QualitativeAppraiseDeleteUI } from '../../../PMS/QualitativeAppraise/delete/qualitativeAppraise.delete';



@Component({
  selector: 'appraiseType-qualitativeAppraise-detail',
  templateUrl: './appraiseType-qualitativeAppraise.detail.html',
  styleUrls: ['./appraiseType-qualitativeAppraise.detail.css'],
  providers: [AppraiseTypeService]
}) 

@Injectable()
export class AppraiseType_QualitativeAppraise_DetailUI extends DetailView<AppraiseType> {

  constructor(private appraiseTypeService: AppraiseTypeService) {
    super(appraiseTypeService);
  }

  public QualitativeAppraiseList : QualitativeAppraise[] = [];
  
  public currentQualitativeAppraise : QualitativeAppraise = new QualitativeAppraise();

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
      .CollectionOfQualitativeAppraise(this.appraiseType)
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
    editUI.AppraiseType = this.appraiseType;
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