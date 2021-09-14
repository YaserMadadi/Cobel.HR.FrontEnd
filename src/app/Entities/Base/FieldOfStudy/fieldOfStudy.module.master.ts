import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FieldOfStudyService } from './fieldOfStudy.service';
import { FieldOfStudyServiceCollection } from './fieldOfStudy.service.collection';
import { FieldOfStudyMasterUI } from './master/fieldOfStudy.master';
import { FieldOfStudy_ModuleDetail } from './fieldOfStudy.module.detail';

@NgModule({
    declarations: [
        FieldOfStudyMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        FieldOfStudy_ModuleDetail
    ],
    exports: [
        FieldOfStudyMasterUI
    ]
})

export class FieldOfStudy_ModuleMaster { }