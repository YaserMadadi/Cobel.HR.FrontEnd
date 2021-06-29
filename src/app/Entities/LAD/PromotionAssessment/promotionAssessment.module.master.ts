import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PromotionAssessmentService } from './promotionAssessment.service';
import { PromotionAssessmentServiceCollection } from './promotionAssessment.service.collection';
import { PromotionAssessmentMasterUI } from './master/promotionAssessment.master';
import { PromotionAssessment_ModuleDetail } from './promotionAssessment.module.detail';

@NgModule({
    declarations: [
        PromotionAssessmentMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        PromotionAssessment_ModuleDetail
    ],
    exports: [
        PromotionAssessmentMasterUI
    ],
    providers: [
        //PromotionAssessmentService,
       // PromotionAssessmentServiceCollection   
    ]
})

export class PromotionAssessment_ModuleMaster { }