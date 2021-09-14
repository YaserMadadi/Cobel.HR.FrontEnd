import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { TargetSettingService } from './targetSetting.service';
import { TargetSettingServiceCollection } from './targetSetting.service.collection';
import { TargetSettingMasterUI } from './master/targetSetting.master';
import { TargetSettingEditUI } from './edit/targetSetting.edit';
import { TargetSettingDeleteUI } from './delete/targetSetting.delete';
import { TargetSettingSeekUI } from './seek/targetSetting.seek';

import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { Position_ModuleFunc } from '../../HR/Position/position.module.func';
import { Year_ModuleFunc } from '../../Base/Year/year.module.func';

@NgModule({
    declarations: [
        TargetSettingEditUI,
		TargetSettingDeleteUI,
		TargetSettingSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc,
		Position_ModuleFunc,
		Year_ModuleFunc
    ],
    exports: [
        TargetSettingEditUI,
		TargetSettingDeleteUI,
		TargetSettingSeekUI
    ]
})

export class TargetSetting_ModuleFunc { }