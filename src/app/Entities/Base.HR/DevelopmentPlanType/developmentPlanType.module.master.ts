import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DevelopmentPlanTypeService } from './developmentPlanType.service';
import { DevelopmentPlanTypeServiceCollection } from './developmentPlanType.service.collection';
import { DevelopmentPlanTypeMasterUI } from './master/developmentPlanType.master';
import { DevelopmentPlanType_ModuleDetail } from './developmentPlanType.module.detail';

@NgModule({
    declarations: [
        DevelopmentPlanTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        DevelopmentPlanType_ModuleDetail
    ],
    exports: [
        DevelopmentPlanTypeMasterUI
    ]
})

export class DevelopmentPlanType_ModuleMaster { }