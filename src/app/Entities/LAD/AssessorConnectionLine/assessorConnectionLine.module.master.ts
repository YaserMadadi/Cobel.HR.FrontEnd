import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessorConnectionLineService } from './assessorConnectionLine.service';
import { AssessorConnectionLineServiceCollection } from './assessorConnectionLine.service.collection';
import { AssessorConnectionLineMasterUI } from './master/assessorConnectionLine.master';
import { AssessorConnectionLine_ModuleDetail } from './assessorConnectionLine.module.detail';

@NgModule({
    declarations: [
        AssessorConnectionLineMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        AssessorConnectionLine_ModuleDetail
    ],
    exports: [
        AssessorConnectionLineMasterUI
    ],
    providers: [
        //AssessorConnectionLineService,
       // AssessorConnectionLineServiceCollection   
    ]
})

export class AssessorConnectionLine_ModuleMaster { }