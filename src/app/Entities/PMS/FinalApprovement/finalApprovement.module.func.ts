import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { FinalApprovementService } from './finalApprovement.service';
import { FinalApprovementServiceCollection } from './finalApprovement.service.collection';
import { FinalApprovementMasterUI } from './master/finalApprovement.master';
import { FinalApprovementEditUI } from './edit/finalApprovement.edit';
import { FinalApprovementDeleteUI } from './delete/finalApprovement.delete';
import { FinalApprovementSeekUI } from './seek/finalApprovement.seek';

import { TargetSetting_ModuleFunc } from '../TargetSetting/targetSetting.module.func';
import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';

@NgModule({
    declarations: [
        FinalApprovementEditUI,
		FinalApprovementDeleteUI,
		FinalApprovementSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        TargetSetting_ModuleFunc,
		Employee_ModuleFunc
    ],
    exports: [
        FinalApprovementEditUI,
		FinalApprovementDeleteUI,
		FinalApprovementSeekUI
    ]
})

export class FinalApprovement_ModuleFunc { }