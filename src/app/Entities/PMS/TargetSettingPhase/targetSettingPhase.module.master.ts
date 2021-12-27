import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { TargetSettingPhaseService } from './targetSettingPhase.service';
import { TargetSettingPhaseServiceCollection } from './targetSettingPhase.service.collection';
import { TargetSettingPhaseMasterUI } from './master/targetSettingPhase.master';
import { TargetSettingPhase_ModuleDetail } from './targetSettingPhase.module.detail';

@NgModule({
    declarations: [
        TargetSettingPhaseMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        TargetSettingPhase_ModuleDetail
    ],
    exports: [
        TargetSettingPhaseMasterUI
    ]
})

export class TargetSettingPhase_ModuleMaster { }