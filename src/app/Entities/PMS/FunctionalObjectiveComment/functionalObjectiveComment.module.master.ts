import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FunctionalObjectiveCommentService } from './functionalObjectiveComment.service';
import { FunctionalObjectiveCommentServiceCollection } from './functionalObjectiveComment.service.collection';
import { FunctionalObjectiveCommentMasterUI } from './master/functionalObjectiveComment.master';
import { FunctionalObjectiveComment_ModuleDetail } from './functionalObjectiveComment.module.detail';

@NgModule({
    declarations: [
        FunctionalObjectiveCommentMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        FunctionalObjectiveComment_ModuleDetail
    ],
    exports: [
        FunctionalObjectiveCommentMasterUI
    ]
})

export class FunctionalObjectiveComment_ModuleMaster { }