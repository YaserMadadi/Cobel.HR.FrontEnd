import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ProvinceService } from './province.service';
import { ProvinceServiceCollection } from './province.service.collection';
import { ProvinceMasterUI } from './master/province.master';
import { ProvinceEditUI } from './edit/province.edit';
import { ProvinceDeleteUI } from './delete/province.delete';
import { ProvinceSeekUI } from './seek/province.seek';


@NgModule({
    declarations: [
        ProvinceEditUI,
		ProvinceDeleteUI,
		ProvinceSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        ProvinceEditUI,
		ProvinceDeleteUI,
		ProvinceSeekUI
    ]
})

export class Province_ModuleFunc { }