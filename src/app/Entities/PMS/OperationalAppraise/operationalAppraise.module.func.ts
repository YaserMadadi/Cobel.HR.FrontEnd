import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { OperationalAppraiseService } from './operationalAppraise.service';
import { OperationalAppraiseServiceCollection } from './operationalAppraise.service.collection';
import { OperationalAppraiseMasterUI } from './master/operationalAppraise.master';
import { OperationalAppraiseEditUI } from './edit/operationalAppraise.edit';
import { OperationalAppraiseDeleteUI } from './delete/operationalAppraise.delete';
import { OperationalAppraiseSeekUI } from './seek/operationalAppraise.seek';

import { TargetSetting_ModuleFunc } from '../TargetSetting/targetSetting.module.func';
import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { ScoreCell_ModuleFunc } from '../ScoreCell/scoreCell.module.func';

@NgModule({
    declarations: [
        OperationalAppraiseEditUI,
		OperationalAppraiseDeleteUI,
		OperationalAppraiseSeekUI
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
        OperationalAppraiseEditUI,
		OperationalAppraiseDeleteUI,
		OperationalAppraiseSeekUI
    ]
})

export class OperationalAppraise_ModuleFunc { }