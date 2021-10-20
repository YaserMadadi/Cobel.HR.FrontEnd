import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { MaritalInfoService } from './maritalInfo.service';
import { MaritalInfoServiceCollection } from './maritalInfo.service.collection';
import { MaritalInfoMasterUI } from './master/maritalInfo.master';
import { MaritalInfoEditUI } from './edit/maritalInfo.edit';
import { MaritalInfoDeleteUI } from './delete/maritalInfo.delete';
import { MaritalInfoSeekUI } from './seek/maritalInfo.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';

@NgModule({
    declarations: [
        MaritalInfoEditUI,
		MaritalInfoDeleteUI,
		MaritalInfoSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc
    ],
    exports: [
        MaritalInfoEditUI,
		MaritalInfoDeleteUI,
		MaritalInfoSeekUI
    ]
})

export class MaritalInfo_ModuleFunc { }