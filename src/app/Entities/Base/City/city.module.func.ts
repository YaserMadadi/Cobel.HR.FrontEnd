import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CityService } from './city.service';
import { CityServiceCollection } from './city.service.collection';
import { CityMasterUI } from './master/city.master';
import { CityEditUI } from './edit/city.edit';
import { CityDeleteUI } from './delete/city.delete';
import { CitySeekUI } from './seek/city.seek';

import { Province_ModuleFunc } from '../Province/province.module.func';

@NgModule({
    declarations: [
        CityEditUI,
		CityDeleteUI,
		CitySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Province_ModuleFunc
    ],
    exports: [
        CityEditUI,
		CityDeleteUI,
		CitySeekUI
    ],
    providers: [
       //CityService,
       // CityServiceCollection,
    ]
})

export class City_ModuleFunc { }