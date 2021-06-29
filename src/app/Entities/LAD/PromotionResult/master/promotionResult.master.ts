import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { PromotionResult } from '../promotionResult';
import { PromotionResultService } from '../promotionResult.service';
import { PromotionResultDeleteUI } from '../delete/promotionResult.delete';
import { PromotionResultEditUI } from '../edit/promotionResult.edit';
import { PromotionAssessmentService } from '../../PromotionAssessment/promotionAssessment.service';



@Component({
  selector: 'lad-promotionResult-master',
  templateUrl: './promotionResult.master.html',
  styleUrls: ['./promotionResult.master.css'],
  providers: [
    PromotionResultService,
    PromotionAssessmentService,
  ]
})
export class PromotionResultMasterUI extends MasterModal<PromotionResult> {

  constructor(private promotionResultService: PromotionResultService) {
    super(promotionResultService);
  }
}