import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { DevelopmentPlanPriorityService } from './developmentPlanPriority.service';
import { DevelopmentPlanPriorityServiceCollection } from './developmentPlanPriority.service.collection';
import { DevelopmentPlanPriorityMasterUI } from './master/developmentPlanPriority.master';
import { DevelopmentPlanPriorityEditUI } from './edit/developmentPlanPriority.edit';
import { DevelopmentPlanPriorityDeleteUI } from './delete/developmentPlanPriority.delete';
import { DevelopmentPlanPrioritySeekUI } from './seek/developmentPlanPriority.seek';


@NgModule({
    declarations: [
        DevelopmentPlanPriorityEditUI,
		DevelopmentPlanPriorityDeleteUI,
		DevelopmentPlanPrioritySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        DevelopmentPlanPriorityEditUI,
		DevelopmentPlanPriorityDeleteUI,
		DevelopmentPlanPrioritySeekUI
    ],
    providers: [
       //DevelopmentPlanPriorityService,
       // DevelopmentPlanPriorityServiceCollection,
    ]
})

export class DevelopmentPlanPriority_ModuleFunc { }