import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DevelopmentGoalService } from './developmentGoal.service';
import { DevelopmentGoalServiceCollection } from './developmentGoal.service.collection';
import { DevelopmentGoalMasterUI } from './master/developmentGoal.master';
import { DevelopmentGoal_ModuleDetail } from './developmentGoal.module.detail';

@NgModule({
    declarations: [
        DevelopmentGoalMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        DevelopmentGoal_ModuleDetail
    ],
    exports: [
        DevelopmentGoalMasterUI
    ],
    providers: [
        //DevelopmentGoalService,
       // DevelopmentGoalServiceCollection   
    ]
})

export class DevelopmentGoal_ModuleMaster { }