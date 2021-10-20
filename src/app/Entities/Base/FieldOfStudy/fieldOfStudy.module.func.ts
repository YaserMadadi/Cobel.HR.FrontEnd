import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { FieldOfStudyService } from './fieldOfStudy.service';
import { FieldOfStudyServiceCollection } from './fieldOfStudy.service.collection';
import { FieldOfStudyMasterUI } from './master/fieldOfStudy.master';
import { FieldOfStudyEditUI } from './edit/fieldOfStudy.edit';
import { FieldOfStudyDeleteUI } from './delete/fieldOfStudy.delete';
import { FieldOfStudySeekUI } from './seek/fieldOfStudy.seek';

import { UniversityFieldCategory_ModuleFunc } from '../UniversityFieldCategory/universityFieldCategory.module.func';

@NgModule({
    declarations: [
        FieldOfStudyEditUI,
		FieldOfStudyDeleteUI,
		FieldOfStudySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        UniversityFieldCategory_ModuleFunc
    ],
    exports: [
        FieldOfStudyEditUI,
		FieldOfStudyDeleteUI,
		FieldOfStudySeekUI
    ]
})

export class FieldOfStudy_ModuleFunc { }