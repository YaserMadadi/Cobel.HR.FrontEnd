import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ConfigTargetSettingService } from './configTargetSetting.service';
import { ConfigTargetSettingServiceCollection } from './configTargetSetting.service.collection';
import { ConfigTargetSettingMasterUI } from './master/configTargetSetting.master';
import { ConfigTargetSetting_ModuleDetail } from './configTargetSetting.module.detail';

@NgModule({
    declarations: [
        ConfigTargetSettingMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ConfigTargetSetting_ModuleDetail
    ],
    exports: [
        ConfigTargetSettingMasterUI
    ]
})

export class ConfigTargetSetting_ModuleMaster { }