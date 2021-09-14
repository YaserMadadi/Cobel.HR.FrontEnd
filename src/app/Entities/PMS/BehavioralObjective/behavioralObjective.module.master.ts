import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { BehavioralObjectiveService } from './behavioralObjective.service';
import { BehavioralObjectiveServiceCollection } from './behavioralObjective.service.collection';
import { BehavioralObjectiveMasterUI } from './master/behavioralObjective.master';
import { BehavioralObjective_ModuleDetail } from './behavioralObjective.module.detail';

@NgModule({
    declarations: [
        BehavioralObjectiveMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        BehavioralObjective_ModuleDetail
    ],
    exports: [
        BehavioralObjectiveMasterUI
    ]
})

export class BehavioralObjective_ModuleMaster { }