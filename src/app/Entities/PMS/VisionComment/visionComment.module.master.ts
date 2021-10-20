import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { VisionCommentService } from './visionComment.service';
import { VisionCommentServiceCollection } from './visionComment.service.collection';
import { VisionCommentMasterUI } from './master/visionComment.master';
import { VisionComment_ModuleDetail } from './visionComment.module.detail';

@NgModule({
    declarations: [
        VisionCommentMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        VisionComment_ModuleDetail
    ],
    exports: [
        VisionCommentMasterUI
    ]
})

export class VisionComment_ModuleMaster { }