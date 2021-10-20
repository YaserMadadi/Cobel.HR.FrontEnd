import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { TargetSettingTypeService } from './targetSettingType.service';
import { TargetSettingTypeServiceCollection } from './targetSettingType.service.collection';
import { TargetSettingTypeMasterUI } from './master/targetSettingType.master';
import { TargetSettingTypeEditUI } from './edit/targetSettingType.edit';
import { TargetSettingTypeDeleteUI } from './delete/targetSettingType.delete';
import { TargetSettingTypeSeekUI } from './seek/targetSettingType.seek';


@NgModule({
    declarations: [
        TargetSettingTypeEditUI,
		TargetSettingTypeDeleteUI,
		TargetSettingTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        TargetSettingTypeEditUI,
		TargetSettingTypeDeleteUI,
		TargetSettingTypeSeekUI
    ]
})

export class TargetSettingType_ModuleFunc { }
