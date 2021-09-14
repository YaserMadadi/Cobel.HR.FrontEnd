import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ConclusionTypeService } from './conclusionType.service';
import { ConclusionTypeServiceCollection } from './conclusionType.service.collection';
import { ConclusionTypeMasterUI } from './master/conclusionType.master';
import { ConclusionTypeEditUI } from './edit/conclusionType.edit';
import { ConclusionTypeDeleteUI } from './delete/conclusionType.delete';
import { ConclusionTypeSeekUI } from './seek/conclusionType.seek';


@NgModule({
    declarations: [
        ConclusionTypeEditUI,
		ConclusionTypeDeleteUI,
		ConclusionTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        ConclusionTypeEditUI,
		ConclusionTypeDeleteUI,
		ConclusionTypeSeekUI
    ]
})

export class ConclusionType_ModuleFunc { }