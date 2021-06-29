import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { UniversityDegreeService } from './universityDegree.service';
import { UniversityDegreeServiceCollection } from './universityDegree.service.collection';
import { UniversityDegreeMasterUI } from './master/universityDegree.master';
import { UniversityDegreeEditUI } from './edit/universityDegree.edit';
import { UniversityDegreeDeleteUI } from './delete/universityDegree.delete';
import { UniversityDegreeSeekUI } from './seek/universityDegree.seek';


@NgModule({
    declarations: [
        UniversityDegreeEditUI,
		UniversityDegreeDeleteUI,
		UniversityDegreeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        UniversityDegreeEditUI,
		UniversityDegreeDeleteUI,
		UniversityDegreeSeekUI
    ],
    providers: [
       //UniversityDegreeService,
       // UniversityDegreeServiceCollection,
    ]
})

export class UniversityDegree_ModuleFunc { }