import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AppraiseResultService } from './appraiseResult.service';
import { AppraiseResultServiceCollection } from './appraiseResult.service.collection';
import { AppraiseResultMasterUI } from './master/appraiseResult.master';
import { AppraiseResultEditUI } from './edit/appraiseResult.edit';
import { AppraiseResultDeleteUI } from './delete/appraiseResult.delete';
import { AppraiseResultSeekUI } from './seek/appraiseResult.seek';

import { TargetSetting_ModuleFunc } from '../TargetSetting/targetSetting.module.func';
import { AppraiseType_ModuleFunc } from '../../Base.PMS/AppraiseType/appraiseType.module.func';

@NgModule({
    declarations: [
        AppraiseResultEditUI,
		AppraiseResultDeleteUI,
		AppraiseResultSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        TargetSetting_ModuleFunc,
		AppraiseType_ModuleFunc,
    ],
    exports: [
        AppraiseResultEditUI,
		AppraiseResultDeleteUI,
		AppraiseResultSeekUI
    ]
})

export class AppraiseResult_ModuleFunc { }