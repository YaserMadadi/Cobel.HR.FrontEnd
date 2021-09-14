import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { TargetSettingService } from './targetSetting.service';
import { TargetSettingServiceCollection } from './targetSetting.service.collection';
import { TargetSettingMasterUI } from './master/targetSetting.master';
import { TargetSetting_ModuleDetail } from './targetSetting.module.detail';

@NgModule({
    declarations: [
        TargetSettingMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        TargetSetting_ModuleDetail
    ],
    exports: [
        TargetSettingMasterUI
    ]
})

export class TargetSetting_ModuleMaster { }