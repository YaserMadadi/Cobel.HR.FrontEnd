import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { FunctionalAppraiseService } from './functionalAppraise.service';
import { FunctionalAppraiseServiceCollection } from './functionalAppraise.service.collection';
import { FunctionalAppraiseMasterUI } from './master/functionalAppraise.master';
import { FunctionalAppraiseEditUI } from './edit/functionalAppraise.edit';
import { FunctionalAppraiseDeleteUI } from './delete/functionalAppraise.delete';
import { FunctionalAppraiseSeekUI } from './seek/functionalAppraise.seek';

import { FunctionalKPI_ModuleFunc } from '../FunctionalKPI/functionalKPI.module.func';
import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { AppraiseType_ModuleFunc } from '../../Base.PMS/AppraiseType/appraiseType.module.func';

@NgModule({
    declarations: [
        FunctionalAppraiseEditUI,
		FunctionalAppraiseDeleteUI,
		FunctionalAppraiseSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        FunctionalKPI_ModuleFunc,
		Employee_ModuleFunc,
		AppraiseType_ModuleFunc
    ],
    exports: [
        FunctionalAppraiseEditUI,
		FunctionalAppraiseDeleteUI,
		FunctionalAppraiseSeekUI
    ]
})

export class FunctionalAppraise_ModuleFunc { }