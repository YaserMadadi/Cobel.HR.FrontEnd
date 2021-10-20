import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { RelativeService } from './relative.service';
import { RelativeServiceCollection } from './relative.service.collection';
import { RelativeMasterUI } from './master/relative.master';
import { RelativeEditUI } from './edit/relative.edit';
import { RelativeDeleteUI } from './delete/relative.delete';
import { RelativeSeekUI } from './seek/relative.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';
import { RelativeType_ModuleFunc } from '../../Base.HR/RelativeType/relativeType.module.func';

@NgModule({
    declarations: [
        RelativeEditUI,
		RelativeDeleteUI,
		RelativeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc,
		RelativeType_ModuleFunc
    ],
    exports: [
        RelativeEditUI,
		RelativeDeleteUI,
		RelativeSeekUI
    ]
})

export class Relative_ModuleFunc { }