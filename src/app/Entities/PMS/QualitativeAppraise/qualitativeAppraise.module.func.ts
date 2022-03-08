import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { QualitativeAppraiseService } from './qualitativeAppraise.service';
import { QualitativeAppraiseServiceCollection } from './qualitativeAppraise.service.collection';
import { QualitativeAppraiseMasterUI } from './master/qualitativeAppraise.master';
import { QualitativeAppraiseEditUI } from './edit/qualitativeAppraise.edit';
import { QualitativeAppraiseDeleteUI } from './delete/qualitativeAppraise.delete';
import { QualitativeAppraiseSeekUI } from './seek/qualitativeAppraise.seek';

import { QualitativeKPI_ModuleFunc } from '../QualitativeKPI/qualitativeKPI.module.func';
import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { AppraiseType_ModuleFunc } from '../../Base.PMS/AppraiseType/appraiseType.module.func';

@NgModule({
    declarations: [
        QualitativeAppraiseEditUI,
		QualitativeAppraiseDeleteUI,
		QualitativeAppraiseSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        QualitativeKPI_ModuleFunc,
		Employee_ModuleFunc,
		AppraiseType_ModuleFunc
    ],
    exports: [
        QualitativeAppraiseEditUI,
		QualitativeAppraiseDeleteUI,
		QualitativeAppraiseSeekUI
    ]
})

export class QualitativeAppraise_ModuleFunc { }