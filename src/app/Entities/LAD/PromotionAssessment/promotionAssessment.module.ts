import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PromotionAssessmentService } from './promotionAssessment.service';
import { PromotionAssessmentServiceCollection } from './promotionAssessment.service.collection';

import { PromotionAssessmentIndexUI } from './index/promotionAssessment.index';
import { PromotionAssessment_ModuleFunc } from './promotionAssessment.module.func';
import { PromotionAssessment_ModuleMaster } from './promotionAssessment.module.master';



@NgModule({
  declarations: [
    PromotionAssessmentIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    PromotionAssessment_ModuleMaster,
  ],
  exports: [
    PromotionAssessmentIndexUI,
		PromotionAssessment_ModuleMaster,
  ],
  providers: [
    // PromotionAssessmentService,
    // PromotionAssessmentServiceCollection
  ]
})
export class PromotionAssessmentModule {}