import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PromotionResultService } from './promotionResult.service';
import { PromotionResultServiceCollection } from './promotionResult.service.collection';
import { PromotionResultMasterUI } from './master/promotionResult.master';
import { PromotionResult_ModuleDetail } from './promotionResult.module.detail';

@NgModule({
    declarations: [
        PromotionResultMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        PromotionResult_ModuleDetail
    ],
    exports: [
        PromotionResultMasterUI
    ],
    providers: [
        //PromotionResultService,
       // PromotionResultServiceCollection   
    ]
})

export class PromotionResult_ModuleMaster { }