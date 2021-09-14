import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { VisionApprovedService } from './visionApproved.service';
import { VisionApprovedServiceCollection } from './visionApproved.service.collection';
import { VisionApprovedMasterUI } from './master/visionApproved.master';
import { VisionApproved_ModuleDetail } from './visionApproved.module.detail';

@NgModule({
    declarations: [
        VisionApprovedMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        VisionApproved_ModuleDetail
    ],
    exports: [
        VisionApprovedMasterUI
    ]
})

export class VisionApproved_ModuleMaster { }