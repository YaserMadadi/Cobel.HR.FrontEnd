import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { FunctionalObjectiveCommentService } from './functionalObjectiveComment.service';
import { FunctionalObjectiveCommentServiceCollection } from './functionalObjectiveComment.service.collection';
import { FunctionalObjectiveCommentMasterUI } from './master/functionalObjectiveComment.master';
import { FunctionalObjectiveCommentEditUI } from './edit/functionalObjectiveComment.edit';
import { FunctionalObjectiveCommentDeleteUI } from './delete/functionalObjectiveComment.delete';
import { FunctionalObjectiveCommentSeekUI } from './seek/functionalObjectiveComment.seek';

import { FunctionalObjective_ModuleFunc } from '../FunctionalObjective/functionalObjective.module.func';
import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';

@NgModule({
    declarations: [
        FunctionalObjectiveCommentEditUI,
		FunctionalObjectiveCommentDeleteUI,
		FunctionalObjectiveCommentSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        FunctionalObjective_ModuleFunc,
		Employee_ModuleFunc
    ],
    exports: [
        FunctionalObjectiveCommentEditUI,
		FunctionalObjectiveCommentDeleteUI,
		FunctionalObjectiveCommentSeekUI
    ]
})

export class FunctionalObjectiveComment_ModuleFunc { }