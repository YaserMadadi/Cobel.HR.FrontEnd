import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { NonOperationalAppraiseService } from './nonOperationalAppraise.service';
import { NonOperationalAppraiseServiceCollection } from './nonOperationalAppraise.service.collection';
import { NonOperationalAppraiseMasterUI } from './master/nonOperationalAppraise.master';
import { NonOperationalAppraiseEditUI } from './edit/nonOperationalAppraise.edit';
import { NonOperationalAppraiseDeleteUI } from './delete/nonOperationalAppraise.delete';
import { NonOperationalAppraiseSeekUI } from './seek/nonOperationalAppraise.seek';

import { TargetSetting_ModuleFunc } from '../TargetSetting/targetSetting.module.func';
import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { ScoreCell_ModuleFunc } from '../ScoreCell/scoreCell.module.func';

@NgModule({
    declarations: [
        NonOperationalAppraiseEditUI,
		NonOperationalAppraiseDeleteUI,
		NonOperationalAppraiseSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        TargetSetting_ModuleFunc,
		Employee_ModuleFunc,
		ScoreCell_ModuleFunc
    ],
    exports: [
        NonOperationalAppraiseEditUI,
		NonOperationalAppraiseDeleteUI,
		NonOperationalAppraiseSeekUI
    ],
    providers: [
       //NonOperationalAppraiseService,
       // NonOperationalAppraiseServiceCollection,
    ]
})

export class NonOperationalAppraise_ModuleFunc { }