import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { DevelopmentGoalService } from './developmentGoal.service';
import { DevelopmentGoalServiceCollection } from './developmentGoal.service.collection';
import { DevelopmentGoalMasterUI } from './master/developmentGoal.master';
import { DevelopmentGoalEditUI } from './edit/developmentGoal.edit';
import { DevelopmentGoalDeleteUI } from './delete/developmentGoal.delete';
import { DevelopmentGoalSeekUI } from './seek/developmentGoal.seek';

import { Assessment_ModuleFunc } from '../Assessment/assessment.module.func';

@NgModule({
    declarations: [
        DevelopmentGoalEditUI,
		DevelopmentGoalDeleteUI,
		DevelopmentGoalSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Assessment_ModuleFunc
    ],
    exports: [
        DevelopmentGoalEditUI,
		DevelopmentGoalDeleteUI,
		DevelopmentGoalSeekUI
    ],
    providers: [
       //DevelopmentGoalService,
       // DevelopmentGoalServiceCollection,
    ]
})

export class DevelopmentGoal_ModuleFunc { }