import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PromotionResultService } from './promotionResult.service';
import { PromotionResultServiceCollection } from './promotionResult.service.collection';

import { PromotionResultIndexUI } from './index/promotionResult.index';
import { PromotionResult_ModuleFunc } from './promotionResult.module.func';
import { PromotionResult_ModuleMaster } from './promotionResult.module.master';


import { PromotionAssessment_ModuleFunc } from '../PromotionAssessment/promotionAssessment.module.func';
import { PromotionAssessment_ModuleMaster } from '../PromotionAssessment/promotionAssessment.module.master';

@NgModule({
  declarations: [
    PromotionResultIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    PromotionResult_ModuleMaster,
		PromotionAssessment_ModuleMaster,
  ],
  exports: [
    PromotionResultIndexUI,
		PromotionResult_ModuleMaster,
   ]
})
export class PromotionResultModule {}