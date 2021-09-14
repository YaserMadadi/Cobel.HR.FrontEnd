import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { TargetSettingTypeService } from './targetSettingType.service';
import { TargetSettingTypeServiceCollection } from './targetSettingType.service.collection';
import { TargetSettingTypeMasterUI } from './master/targetSettingType.master';
import { TargetSettingType_ModuleDetail } from './targetSettingType.module.detail';

@NgModule({
    declarations: [
        TargetSettingTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        TargetSettingType_ModuleDetail
    ],
    exports: [
        TargetSettingTypeMasterUI
    ]
})

export class TargetSettingType_ModuleMaster { }