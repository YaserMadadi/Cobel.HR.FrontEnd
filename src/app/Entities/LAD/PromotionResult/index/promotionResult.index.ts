import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { PromotionResult } from '../promotionResult';
import { PromotionResultService } from '../promotionResult.service';
import { PromotionResultMasterUI } from '../master/promotionResult.master';
import { PromotionResultEditUI } from '../edit/promotionResult.edit';
import { PromotionResultDeleteUI } from '../delete/promotionResult.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PromotionAssessmentEditUI } from '../../PromotionAssessment/edit/promotionAssessment.edit';
import { PromotionAssessment } from '../../PromotionAssessment/promotionAssessment';



@Component({
  selector: 'lad-promotionResult-index',
  templateUrl: './promotionResult.index.html',
  styleUrls: ['./promotionResult.index.css']
})
export class PromotionResultIndexUI extends IndexView<PromotionResult> implements AfterViewInit, IIndexView<PromotionResult> {

  constructor(private promotionResultService: PromotionResultService) {
    super(promotionResultService);
    this.filterInstance = PromotionResult.SeekInstance();
    this.currentInstance = new PromotionResult();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region PromotionAssessment

  public promotionAssessment_Clicked(promotionAssessmentEditUI: PromotionAssessmentEditUI) {
    promotionAssessmentEditUI.PromotionResult = this.currentInstance;
    promotionAssessmentEditUI.ShowDialog(new PromotionAssessment());
  }
                    
  public promotionAssessmentEditUI_Closed(promotionAssessment: PromotionAssessment) {
    if (!promotionAssessment)
      return;
    this.onRefresh();
  }
  
  //#endregion PromotionAssessment


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(promotionResultEditUI: PromotionResultEditUI){
    promotionResultEditUI.ShowDialog(new PromotionResult());
  }

  resetFilter() {
    this.filterInstance = PromotionResult.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(promotionResult: PromotionResult) {
    this.onRefresh();
    this.currentInstance = new PromotionResult();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}