import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ApproverTypeService } from './approverType.service';
import { ApproverTypeServiceCollection } from './approverType.service.collection';
import { ApproverTypeMasterUI } from './master/approverType.master';
import { ApproverType_ModuleDetail } from './approverType.module.detail';

@NgModule({
    declarations: [
        ApproverTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ApproverType_ModuleDetail
    ],
    exports: [
        ApproverTypeMasterUI
    ]
})

export class ApproverType_ModuleMaster { }