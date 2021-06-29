import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PromotionAssessmentService } from './promotionAssessment.service';
import { PromotionAssessmentServiceCollection } from './promotionAssessment.service.collection';
import { PromotionAssessmentMasterUI } from './master/promotionAssessment.master';
import { PromotionAssessmentEditUI } from './edit/promotionAssessment.edit';
import { PromotionAssessmentDeleteUI } from './delete/promotionAssessment.delete';
import { PromotionAssessmentSeekUI } from './seek/promotionAssessment.seek';

import { Assessment_ModuleFunc } from '../Assessment/assessment.module.func';
import { Position_ModuleFunc } from '../../HR/Position/position.module.func';
import { PromotionResult_ModuleFunc } from '../PromotionResult/promotionResult.module.func';

@NgModule({
    declarations: [
        PromotionAssessmentEditUI,
		PromotionAssessmentDeleteUI,
		PromotionAssessmentSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Assessment_ModuleFunc,
		Position_ModuleFunc,
		Position_ModuleFunc,
		PromotionResult_ModuleFunc
    ],
    exports: [
        PromotionAssessmentEditUI,
		PromotionAssessmentDeleteUI,
		PromotionAssessmentSeekUI
    ],
    providers: [
       //PromotionAssessmentService,
       // PromotionAssessmentServiceCollection,
    ]
})

export class PromotionAssessment_ModuleFunc { }