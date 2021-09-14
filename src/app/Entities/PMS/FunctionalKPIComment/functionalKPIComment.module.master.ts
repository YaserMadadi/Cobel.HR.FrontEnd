import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FunctionalKPICommentService } from './functionalKPIComment.service';
import { FunctionalKPICommentServiceCollection } from './functionalKPIComment.service.collection';
import { FunctionalKPICommentMasterUI } from './master/functionalKPIComment.master';
import { FunctionalKPIComment_ModuleDetail } from './functionalKPIComment.module.detail';

@NgModule({
    declarations: [
        FunctionalKPICommentMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        FunctionalKPIComment_ModuleDetail
    ],
    exports: [
        FunctionalKPICommentMasterUI
    ]
})

export class FunctionalKPIComment_ModuleMaster { }