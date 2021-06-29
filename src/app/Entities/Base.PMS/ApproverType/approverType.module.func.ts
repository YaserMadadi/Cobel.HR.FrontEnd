import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ApproverTypeService } from './approverType.service';
import { ApproverTypeServiceCollection } from './approverType.service.collection';
import { ApproverTypeMasterUI } from './master/approverType.master';
import { ApproverTypeEditUI } from './edit/approverType.edit';
import { ApproverTypeDeleteUI } from './delete/approverType.delete';
import { ApproverTypeSeekUI } from './seek/approverType.seek';


@NgModule({
    declarations: [
        ApproverTypeEditUI,
		ApproverTypeDeleteUI,
		ApproverTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        ApproverTypeEditUI,
		ApproverTypeDeleteUI,
		ApproverTypeSeekUI
    ],
    providers: [
       //ApproverTypeService,
       // ApproverTypeServiceCollection,
    ]
})

export class ApproverType_ModuleFunc { }