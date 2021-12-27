import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { TargetSettingPhaseService } from './targetSettingPhase.service';
import { TargetSettingPhaseServiceCollection } from './targetSettingPhase.service.collection';
import { TargetSettingPhaseMasterUI } from './master/targetSettingPhase.master';
import { TargetSettingPhaseEditUI } from './edit/targetSettingPhase.edit';
import { TargetSettingPhaseDeleteUI } from './delete/targetSettingPhase.delete';
import { TargetSettingPhaseSeekUI } from './seek/targetSettingPhase.seek';

import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { Position_ModuleFunc } from '../../HR/Position/position.module.func';
import { Year_ModuleFunc } from '../../Base/Year/year.module.func';
import { TargetSettingMode_ModuleFunc } from '../../Base.PMS/TargetSettingMode/targetSettingMode.module.func';
import { TargetSettingType_ModuleFunc } from '../../Base.PMS/TargetSettingType/targetSettingType.module.func';

@NgModule({
    declarations: [
        TargetSettingPhaseEditUI,
        TargetSettingPhaseDeleteUI,
        TargetSettingPhaseSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Year_ModuleFunc,
        TargetSettingType_ModuleFunc,
        TargetSettingMode_ModuleFunc,
    ],
    exports: [
        TargetSettingPhaseEditUI,
        TargetSettingPhaseDeleteUI,
        TargetSettingPhaseSeekUI
    ]
})

export class TargetSettingPhase_ModuleFunc { }