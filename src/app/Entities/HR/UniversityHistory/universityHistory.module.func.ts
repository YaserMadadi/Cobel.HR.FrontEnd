import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { UniversityHistoryService } from './universityHistory.service';
import { UniversityHistoryServiceCollection } from './universityHistory.service.collection';
import { UniversityHistoryMasterUI } from './master/universityHistory.master';
import { UniversityHistoryEditUI } from './edit/universityHistory.edit';
import { UniversityHistoryDeleteUI } from './delete/universityHistory.delete';
import { UniversityHistorySeekUI } from './seek/universityHistory.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';
import { UniversityDegree_ModuleFunc } from '../../Base/UniversityDegree/universityDegree.module.func';
import { University_ModuleFunc } from '../../Base/University/university.module.func';
import { FieldOfStudy_ModuleFunc } from '../../Base/FieldOfStudy/fieldOfStudy.module.func';
import { EducationSystem_ModuleFunc } from '../../Base/EducationSystem/educationSystem.module.func';
import { CertificationType_ModuleFunc } from '../../Base/CertificationType/certificationType.module.func';

@NgModule({
    declarations: [
        UniversityHistoryEditUI,
		UniversityHistoryDeleteUI,
		UniversityHistorySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc,
		UniversityDegree_ModuleFunc,
		University_ModuleFunc,
		FieldOfStudy_ModuleFunc,
		EducationSystem_ModuleFunc,
		CertificationType_ModuleFunc
    ],
    exports: [
        UniversityHistoryEditUI,
		UniversityHistoryDeleteUI,
		UniversityHistorySeekUI
    ]
})

export class UniversityHistory_ModuleFunc { }