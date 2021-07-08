import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { FunctionalKPI } from '../functionalKPI';
import { FunctionalKPIService } from '../functionalKPI.service';

import { FunctionalAppraise } from '../../FunctionalAppraise/functionalAppraise';
import { FunctionalAppraiseMasterUI } from '../../FunctionalAppraise/master/functionalAppraise.master';
import { FunctionalAppraiseEditUI } from '../../FunctionalAppraise/edit/functionalAppraise.edit';
import { FunctionalAppraiseDeleteUI } from '../../FunctionalAppraise/delete/functionalAppraise.delete';
import { AuthService } from '../../../../../xcore/security/auth_service';
import { MessageController, toastType } from '../../../../../xcore/tools/controller.message';
import { PositionController } from '../../../../../xcore/tools/controller.positions';



@Component({
  selector: 'functionalKPI-functionalAppraise-detail',
  templateUrl: './functionalKPI-functionalAppraise.detail.html',
  styleUrls: ['./functionalKPI-functionalAppraise.detail.css'],
  providers: [FunctionalKPIService]
})

@Injectable()
export class FunctionalKPI_FunctionalAppraise_DetailUI extends DetailView<FunctionalKPI> {

  constructor(private functionalKPIService: FunctionalKPIService) {
    super(functionalKPIService);
  }

  public FunctionalAppraiseList: FunctionalAppraise[] = [];

  public currentFunctionalAppraise: FunctionalAppraise = new FunctionalAppraise();

  private functionalKPI: FunctionalKPI = new FunctionalKPI();

  @Input()
  public set FunctionalKPI(value: FunctionalKPI) {
    this.functionalKPI = value;
    this.onReload();
  }

  public get FunctionalKPI(): FunctionalKPI { return this.functionalKPI }

  public onReload() {
    if (FunctionalKPI.NotConfirm(this.functionalKPI))
      return;
    this.functionalKPIService
      .ServiceCollection
      .CollectionOfFunctionalAppraise(this.functionalKPI)
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
    editUI.FunctionalKPI = this.functionalKPI;
    editUI.SetDefault();
    editUI.ShowDialog(new FunctionalAppraise());
  }

  public onEdit(editUI: FunctionalAppraiseEditUI) {
    console.log('PositionList : ', AuthService.currentPositionList);
    if (this.currentFunctionalAppraise.appraiser.id != AuthService.currentEmployee.id &&
      AuthService.currentPositionList.filter(p => p.id == PositionController.HR_PMS_Position_Id).length == 0) {
      MessageController.ShowMessage('You are not allowed to Edit this record of Appraisal!', toastType.error);
      return;
    }
    if (FunctionalAppraise.NotConfirm(this.currentFunctionalAppraise))
      return;
    editUI.ShowDialog(this.currentFunctionalAppraise);
  }

  public onDelete(deleteUI: FunctionalAppraiseDeleteUI) {
    if (this.currentFunctionalAppraise.appraiser.id != AuthService.currentEmployee.id &&
      AuthService.currentPositionList.filter(p => p.id == PositionController.HR_PMS_Position_Id).length == 0) {
      MessageController.ShowMessage('You are not allowed to Delete this record of Appraisal!', toastType.error);
      return;
    }
    if (FunctionalAppraise.NotConfirm(this.currentFunctionalAppraise))
      return;
    deleteUI.ShowDialog(this.currentFunctionalAppraise);
  }

  public onEditModal_Closed(functionalAppraise: FunctionalAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}