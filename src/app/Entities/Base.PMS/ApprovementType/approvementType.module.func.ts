import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ApprovementTypeService } from './approvementType.service';
import { ApprovementTypeServiceCollection } from './approvementType.service.collection';
import { ApprovementTypeMasterUI } from './master/approvementType.master';
import { ApprovementTypeEditUI } from './edit/approvementType.edit';
import { ApprovementTypeDeleteUI } from './delete/approvementType.delete';
import { ApprovementTypeSeekUI } from './seek/approvementType.seek';


@NgModule({
    declarations: [
        ApprovementTypeEditUI,
		ApprovementTypeDeleteUI,
		ApprovementTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        ApprovementTypeEditUI,
		ApprovementTypeDeleteUI,
		ApprovementTypeSeekUI
    ]
})

export class ApprovementType_ModuleFunc { }