import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ConfigTargetSettingService } from './configTargetSetting.service';
import { ConfigTargetSettingServiceCollection } from './configTargetSetting.service.collection';
import { ConfigTargetSettingMasterUI } from './master/configTargetSetting.master';
import { ConfigTargetSettingEditUI } from './edit/configTargetSetting.edit';
import { ConfigTargetSettingDeleteUI } from './delete/configTargetSetting.delete';
import { ConfigTargetSettingSeekUI } from './seek/configTargetSetting.seek';

import { PositionCategory_ModuleFunc } from '../../Base.HR/PositionCategory/positionCategory.module.func';

@NgModule({
    declarations: [
        ConfigTargetSettingEditUI,
		ConfigTargetSettingDeleteUI,
		ConfigTargetSettingSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        PositionCategory_ModuleFunc
    ],
    exports: [
        ConfigTargetSettingEditUI,
		ConfigTargetSettingDeleteUI,
		ConfigTargetSettingSeekUI
    ]
})

export class ConfigTargetSetting_ModuleFunc { }