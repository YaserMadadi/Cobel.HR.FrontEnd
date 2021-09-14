import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ConfigQualitativeObjectiveService } from './configQualitativeObjective.service';
import { ConfigQualitativeObjectiveServiceCollection } from './configQualitativeObjective.service.collection';
import { ConfigQualitativeObjectiveMasterUI } from './master/configQualitativeObjective.master';
import { ConfigQualitativeObjectiveEditUI } from './edit/configQualitativeObjective.edit';
import { ConfigQualitativeObjectiveDeleteUI } from './delete/configQualitativeObjective.delete';
import { ConfigQualitativeObjectiveSeekUI } from './seek/configQualitativeObjective.seek';

import { ConfigTargetSetting_ModuleFunc } from '../ConfigTargetSetting/configTargetSetting.module.func';

@NgModule({
    declarations: [
        ConfigQualitativeObjectiveEditUI,
		ConfigQualitativeObjectiveDeleteUI,
		ConfigQualitativeObjectiveSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        ConfigTargetSetting_ModuleFunc
    ],
    exports: [
        ConfigQualitativeObjectiveEditUI,
		ConfigQualitativeObjectiveDeleteUI,
		ConfigQualitativeObjectiveSeekUI
    ]
})

export class ConfigQualitativeObjective_ModuleFunc { }