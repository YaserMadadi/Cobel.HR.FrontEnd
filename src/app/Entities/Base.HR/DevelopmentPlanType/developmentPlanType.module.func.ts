import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { DevelopmentPlanTypeService } from './developmentPlanType.service';
import { DevelopmentPlanTypeServiceCollection } from './developmentPlanType.service.collection';
import { DevelopmentPlanTypeMasterUI } from './master/developmentPlanType.master';
import { DevelopmentPlanTypeEditUI } from './edit/developmentPlanType.edit';
import { DevelopmentPlanTypeDeleteUI } from './delete/developmentPlanType.delete';
import { DevelopmentPlanTypeSeekUI } from './seek/developmentPlanType.seek';


@NgModule({
    declarations: [
        DevelopmentPlanTypeEditUI,
		DevelopmentPlanTypeDeleteUI,
		DevelopmentPlanTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        DevelopmentPlanTypeEditUI,
		DevelopmentPlanTypeDeleteUI,
		DevelopmentPlanTypeSeekUI
    ]
})

export class DevelopmentPlanType_ModuleFunc { }
