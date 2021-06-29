import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { PromotionAssessment } from '../promotionAssessment';
import { PromotionAssessmentService } from '../promotionAssessment.service';
import { PromotionAssessmentDeleteUI } from '../delete/promotionAssessment.delete';
import { PromotionAssessmentEditUI } from '../edit/promotionAssessment.edit';



@Component({
  selector: 'lad-promotionAssessment-master',
  templateUrl: './promotionAssessment.master.html',
  styleUrls: ['./promotionAssessment.master.css'],
  providers: [
    PromotionAssessmentService,
    
  ]
})
export class PromotionAssessmentMasterUI extends MasterModal<PromotionAssessment> {

  constructor(private promotionAssessmentService: PromotionAssessmentService) {
    super(promotionAssessmentService);
  }
}