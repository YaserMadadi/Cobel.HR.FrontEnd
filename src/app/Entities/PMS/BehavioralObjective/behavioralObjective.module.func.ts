import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { BehavioralObjectiveService } from './behavioralObjective.service';
import { BehavioralObjectiveServiceCollection } from './behavioralObjective.service.collection';
import { BehavioralObjectiveMasterUI } from './master/behavioralObjective.master';
import { BehavioralObjectiveEditUI } from './edit/behavioralObjective.edit';
import { BehavioralObjectiveDeleteUI } from './delete/behavioralObjective.delete';
import { BehavioralObjectiveSeekUI } from './seek/behavioralObjective.seek';

import { TargetSetting_ModuleFunc } from '../TargetSetting/targetSetting.module.func';
import { CompetencyItem_ModuleFunc } from '../CompetencyItem/competencyItem.module.func';
import { ExpectedLevel_ModuleFunc } from '../../Base.PMS/ExpectedLevel/expectedLevel.module.func';

@NgModule({
    declarations: [
        BehavioralObjectiveEditUI,
		BehavioralObjectiveDeleteUI,
		BehavioralObjectiveSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        TargetSetting_ModuleFunc,
		CompetencyItem_ModuleFunc,
		ExpectedLevel_ModuleFunc
    ],
    exports: [
        BehavioralObjectiveEditUI,
		BehavioralObjectiveDeleteUI,
		BehavioralObjectiveSeekUI
    ],
    providers: [
       //BehavioralObjectiveService,
       // BehavioralObjectiveServiceCollection,
    ]
})

export class BehavioralObjective_ModuleFunc { }