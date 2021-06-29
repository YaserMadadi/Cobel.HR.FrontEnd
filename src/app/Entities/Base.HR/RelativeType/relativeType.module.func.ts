import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { RelativeTypeService } from './relativeType.service';
import { RelativeTypeServiceCollection } from './relativeType.service.collection';
import { RelativeTypeMasterUI } from './master/relativeType.master';
import { RelativeTypeEditUI } from './edit/relativeType.edit';
import { RelativeTypeDeleteUI } from './delete/relativeType.delete';
import { RelativeTypeSeekUI } from './seek/relativeType.seek';


@NgModule({
    declarations: [
        RelativeTypeEditUI,
		RelativeTypeDeleteUI,
		RelativeTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        RelativeTypeEditUI,
		RelativeTypeDeleteUI,
		RelativeTypeSeekUI
    ],
    providers: [
       //RelativeTypeService,
       // RelativeTypeServiceCollection,
    ]
})

export class RelativeType_ModuleFunc { }