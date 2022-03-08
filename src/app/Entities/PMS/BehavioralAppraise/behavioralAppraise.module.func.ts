import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { BehavioralAppraiseService } from './behavioralAppraise.service';
import { BehavioralAppraiseServiceCollection } from './behavioralAppraise.service.collection';
import { BehavioralAppraiseMasterUI } from './master/behavioralAppraise.master';
import { BehavioralAppraiseEditUI } from './edit/behavioralAppraise.edit';
import { BehavioralAppraiseDeleteUI } from './delete/behavioralAppraise.delete';
import { BehavioralAppraiseSeekUI } from './seek/behavioralAppraise.seek';

import { BehavioralKPI_ModuleFunc } from '../BehavioralKPI/behavioralKPI.module.func';
import { AppraiseType_ModuleFunc } from '../../Base.PMS/AppraiseType/appraiseType.module.func';
import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';

@NgModule({
    declarations: [
        BehavioralAppraiseEditUI,
		BehavioralAppraiseDeleteUI,
		BehavioralAppraiseSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        BehavioralKPI_ModuleFunc,
		AppraiseType_ModuleFunc,
		Employee_ModuleFunc
    ],
    exports: [
        BehavioralAppraiseEditUI,
		BehavioralAppraiseDeleteUI,
		BehavioralAppraiseSeekUI
    ]
})

export class BehavioralAppraise_ModuleFunc { }