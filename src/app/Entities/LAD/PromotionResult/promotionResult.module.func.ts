import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PromotionResultService } from './promotionResult.service';
import { PromotionResultServiceCollection } from './promotionResult.service.collection';
import { PromotionResultMasterUI } from './master/promotionResult.master';
import { PromotionResultEditUI } from './edit/promotionResult.edit';
import { PromotionResultDeleteUI } from './delete/promotionResult.delete';
import { PromotionResultSeekUI } from './seek/promotionResult.seek';


@NgModule({
    declarations: [
        PromotionResultEditUI,
		PromotionResultDeleteUI,
		PromotionResultSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        PromotionResultEditUI,
		PromotionResultDeleteUI,
		PromotionResultSeekUI
    ]
})

export class PromotionResult_ModuleFunc { }