import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { SubjectService } from './subject.service';
import { SubjectServiceCollection } from './subject.service.collection';
import { SubjectMasterUI } from './master/subject.master';
import { Subject_ModuleDetail } from './subject.module.detail';

@NgModule({
    declarations: [
        SubjectMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Subject_ModuleDetail
    ],
    exports: [
        SubjectMasterUI
    ],
    providers: [
        //SubjectService,
       // SubjectServiceCollection   
    ]
})

export class Subject_ModuleMaster { }