import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { QualitativeObjectiveService } from './qualitativeObjective.service';
import { QualitativeObjectiveServiceCollection } from './qualitativeObjective.service.collection';
import { QualitativeObjectiveMasterUI } from './master/qualitativeObjective.master';
import { QualitativeObjectiveEditUI } from './edit/qualitativeObjective.edit';
import { QualitativeObjectiveDeleteUI } from './delete/qualitativeObjective.delete';
import { QualitativeObjectiveSeekUI } from './seek/qualitativeObjective.seek';

import { TargetSetting_ModuleFunc } from '../TargetSetting/targetSetting.module.func';

@NgModule({
    declarations: [
        QualitativeObjectiveEditUI,
		QualitativeObjectiveDeleteUI,
		QualitativeObjectiveSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        TargetSetting_ModuleFunc
    ],
    exports: [
        QualitativeObjectiveEditUI,
		QualitativeObjectiveDeleteUI,
		QualitativeObjectiveSeekUI
    ]
})

export class QualitativeObjective_ModuleFunc { }