import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { SubjectService } from './subject.service';
import { SubjectServiceCollection } from './subject.service.collection';
import { SubjectMasterUI } from './master/subject.master';
import { SubjectEditUI } from './edit/subject.edit';
import { SubjectDeleteUI } from './delete/subject.delete';
import { SubjectSeekUI } from './seek/subject.seek';


@NgModule({
    declarations: [
        SubjectEditUI,
		SubjectDeleteUI,
		SubjectSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        SubjectEditUI,
		SubjectDeleteUI,
		SubjectSeekUI
    ],
    providers: [
       //SubjectService,
       // SubjectServiceCollection,
    ]
})

export class Subject_ModuleFunc { }