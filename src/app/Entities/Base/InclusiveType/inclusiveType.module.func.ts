import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { InclusiveTypeService } from './inclusiveType.service';
import { InclusiveTypeServiceCollection } from './inclusiveType.service.collection';
import { InclusiveTypeMasterUI } from './master/inclusiveType.master';
import { InclusiveTypeEditUI } from './edit/inclusiveType.edit';
import { InclusiveTypeDeleteUI } from './delete/inclusiveType.delete';
import { InclusiveTypeSeekUI } from './seek/inclusiveType.seek';


@NgModule({
    declarations: [
        InclusiveTypeEditUI,
		InclusiveTypeDeleteUI,
		InclusiveTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        InclusiveTypeEditUI,
		InclusiveTypeDeleteUI,
		InclusiveTypeSeekUI
    ]
})

export class InclusiveType_ModuleFunc { }