import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { AppraiseType } from '../appraiseType';
import { AppraiseTypeService } from '../appraiseType.service';

import { FunctionalAppraise } from '../../../PMS/FunctionalAppraise/functionalAppraise';
import { FunctionalAppraiseMasterUI } from '../../../PMS/FunctionalAppraise/master/functionalAppraise.master';
import { FunctionalAppraiseEditUI } from '../../../PMS/FunctionalAppraise/edit/functionalAppraise.edit';
import { FunctionalAppraiseDeleteUI } from '../../../PMS/FunctionalAppraise/delete/functionalAppraise.delete';



@Component({
  selector: 'appraiseType-functionalAppraise-detail',
  templateUrl: './appraiseType-functionalAppraise.detail.html',
  styleUrls: ['./appraiseType-functionalAppraise.detail.css'],
  providers: [AppraiseTypeService]
}) 

@Injectable()
export class AppraiseType_FunctionalAppraise_DetailUI extends DetailView<AppraiseType> {

  constructor(private appraiseTypeService: AppraiseTypeService) {
    super(appraiseTypeService);
  }

  public FunctionalAppraiseList : FunctionalAppraise[] = [];
  
  public currentFunctionalAppraise : FunctionalAppraise = new FunctionalAppraise();

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
      .CollectionOfFunctionalAppraise(this.appraiseType)
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
    editUI.AppraiseType = this.appraiseType;
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