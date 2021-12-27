import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { TargetSettingModeService } from './targetSettingMode.service';
import { TargetSettingModeServiceCollection } from './targetSettingMode.service.collection';
import { TargetSettingModeMasterUI } from './master/targetSettingMode.master';
import { TargetSettingModeEditUI } from './edit/targetSettingMode.edit';
import { TargetSettingModeDeleteUI } from './delete/targetSettingMode.delete';
import { TargetSettingModeSeekUI } from './seek/targetSettingMode.seek';


@NgModule({
    declarations: [
        TargetSettingModeEditUI,
		TargetSettingModeDeleteUI,
		TargetSettingModeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        TargetSettingModeEditUI,
		TargetSettingModeDeleteUI,
		TargetSettingModeSeekUI
    ]
})

export class TargetSettingMode_ModuleFunc { }
