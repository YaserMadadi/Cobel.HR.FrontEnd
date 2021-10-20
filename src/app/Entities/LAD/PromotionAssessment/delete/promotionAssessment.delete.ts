import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { PromotionAssessment } from '../promotionAssessment';
import { PromotionAssessmentService } from '../promotionAssessment.service';


@Component({
  selector: 'lad-promotionAssessment-delete',
  templateUrl: './promotionAssessment.delete.html',
  styleUrls: ['./promotionAssessment.delete.css'],
  
})
export class PromotionAssessmentDeleteUI extends DeleteModal<PromotionAssessment> {

    constructor(private promotionAssessmentService: PromotionAssessmentService){
        super(promotionAssessmentService);
    }

}