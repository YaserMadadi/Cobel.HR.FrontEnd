import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { TargetSettingModeService } from './targetSettingMode.service';
import { TargetSettingModeServiceCollection } from './targetSettingMode.service.collection';
import { TargetSettingModeMasterUI } from './master/targetSettingMode.master';
import { TargetSettingMode_ModuleDetail } from './targetSettingMode.module.detail';

@NgModule({
    declarations: [
        TargetSettingModeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        TargetSettingMode_ModuleDetail
    ],
    exports: [
        TargetSettingModeMasterUI
    ]
})

export class TargetSettingMode_ModuleMaster { }