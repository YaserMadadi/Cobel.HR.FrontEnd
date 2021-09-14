import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UniversityDegreeService } from './universityDegree.service';
import { UniversityDegreeServiceCollection } from './universityDegree.service.collection';
import { UniversityDegreeMasterUI } from './master/universityDegree.master';
import { UniversityDegree_ModuleDetail } from './universityDegree.module.detail';

@NgModule({
    declarations: [
        UniversityDegreeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        UniversityDegree_ModuleDetail
    ],
    exports: [
        UniversityDegreeMasterUI
    ]
})

export class UniversityDegree_ModuleMaster { }