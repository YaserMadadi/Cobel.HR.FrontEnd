import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { PromotionAssessment } from '../promotionAssessment';
import { PromotionAssessmentService } from '../promotionAssessment.service';
import { PromotionAssessmentMasterUI } from '../master/promotionAssessment.master';
import { PromotionAssessmentEditUI } from '../edit/promotionAssessment.edit';
import { PromotionAssessmentDeleteUI } from '../delete/promotionAssessment.delete';

import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { Position } from '../../../HR/Position/position';
import { PositionEditUI } from '../../../HR/Position/edit/position.edit';
import { PromotionResult } from '../../PromotionResult/promotionResult';




import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-promotionAssessment-index',
  templateUrl: './promotionAssessment.index.html',
  styleUrls: ['./promotionAssessment.index.css']
})
export class PromotionAssessmentIndexUI extends IndexView<PromotionAssessment> implements AfterViewInit, IIndexView<PromotionAssessment> {

  constructor(private promotionAssessmentService: PromotionAssessmentService) {
    super(promotionAssessmentService);
    this.filterInstance = PromotionAssessment.SeekInstance();
    this.currentInstance = new PromotionAssessment();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(promotionAssessmentEditUI: PromotionAssessmentEditUI){
    promotionAssessmentEditUI.ShowDialog(new PromotionAssessment());
  }

  resetFilter() {
    this.filterInstance = PromotionAssessment.SeekInstance();
    
    
  }

  public onEditModalClosed(promotionAssessment: PromotionAssessment) {
    this.onRefresh();
    this.currentInstance = new PromotionAssessment();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}