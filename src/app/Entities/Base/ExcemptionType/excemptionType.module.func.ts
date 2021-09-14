import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ExcemptionTypeService } from './excemptionType.service';
import { ExcemptionTypeServiceCollection } from './excemptionType.service.collection';
import { ExcemptionTypeMasterUI } from './master/excemptionType.master';
import { ExcemptionTypeEditUI } from './edit/excemptionType.edit';
import { ExcemptionTypeDeleteUI } from './delete/excemptionType.delete';
import { ExcemptionTypeSeekUI } from './seek/excemptionType.seek';


@NgModule({
    declarations: [
        ExcemptionTypeEditUI,
		ExcemptionTypeDeleteUI,
		ExcemptionTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        ExcemptionTypeEditUI,
		ExcemptionTypeDeleteUI,
		ExcemptionTypeSeekUI
    ]
})

export class ExcemptionType_ModuleFunc { }