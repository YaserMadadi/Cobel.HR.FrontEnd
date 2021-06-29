import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { FunctionalKPICommentService } from './functionalKPIComment.service';
import { FunctionalKPICommentServiceCollection } from './functionalKPIComment.service.collection';
import { FunctionalKPICommentMasterUI } from './master/functionalKPIComment.master';
import { FunctionalKPICommentEditUI } from './edit/functionalKPIComment.edit';
import { FunctionalKPICommentDeleteUI } from './delete/functionalKPIComment.delete';
import { FunctionalKPICommentSeekUI } from './seek/functionalKPIComment.seek';

import { FunctionalKPI_ModuleFunc } from '../FunctionalKPI/functionalKPI.module.func';
import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';

@NgModule({
    declarations: [
        FunctionalKPICommentEditUI,
		FunctionalKPICommentDeleteUI,
		FunctionalKPICommentSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        FunctionalKPI_ModuleFunc,
		Employee_ModuleFunc
    ],
    exports: [
        FunctionalKPICommentEditUI,
		FunctionalKPICommentDeleteUI,
		FunctionalKPICommentSeekUI
    ],
    providers: [
       //FunctionalKPICommentService,
       // FunctionalKPICommentServiceCollection,
    ]
})

export class FunctionalKPIComment_ModuleFunc { }