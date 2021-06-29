import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AssessorService } from './assessor.service';
import { AssessorServiceCollection } from './assessor.service.collection';
import { AssessorMasterUI } from './master/assessor.master';
import { AssessorEditUI } from './edit/assessor.edit';
import { AssessorDeleteUI } from './delete/assessor.delete';
import { AssessorSeekUI } from './seek/assessor.seek';

import { Gender_ModuleFunc } from '../../Base/Gender/gender.module.func';

@NgModule({
    declarations: [
        AssessorEditUI,
		AssessorDeleteUI,
		AssessorSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Gender_ModuleFunc
    ],
    exports: [
        AssessorEditUI,
		AssessorDeleteUI,
		AssessorSeekUI
    ],
    providers: [
       //AssessorService,
       // AssessorServiceCollection,
    ]
})

export class Assessor_ModuleFunc { }