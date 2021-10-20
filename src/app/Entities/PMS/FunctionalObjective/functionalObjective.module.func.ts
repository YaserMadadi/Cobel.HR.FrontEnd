import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { FunctionalObjectiveService } from './functionalObjective.service';
import { FunctionalObjectiveServiceCollection } from './functionalObjective.service.collection';
import { FunctionalObjectiveMasterUI } from './master/functionalObjective.master';
import { FunctionalObjectiveEditUI } from './edit/functionalObjective.edit';
import { FunctionalObjectiveDeleteUI } from './delete/functionalObjective.delete';
import { FunctionalObjectiveSeekUI } from './seek/functionalObjective.seek';

import { TargetSetting_ModuleFunc } from '../TargetSetting/targetSetting.module.func';

@NgModule({
    declarations: [
        FunctionalObjectiveEditUI,
		FunctionalObjectiveDeleteUI,
		FunctionalObjectiveSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        TargetSetting_ModuleFunc
    ],
    exports: [
        FunctionalObjectiveEditUI,
		FunctionalObjectiveDeleteUI,
		FunctionalObjectiveSeekUI
    ]
})

export class FunctionalObjective_ModuleFunc { }