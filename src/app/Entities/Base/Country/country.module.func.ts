import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CountryService } from './country.service';
import { CountryServiceCollection } from './country.service.collection';
import { CountryMasterUI } from './master/country.master';
import { CountryEditUI } from './edit/country.edit';
import { CountryDeleteUI } from './delete/country.delete';
import { CountrySeekUI } from './seek/country.seek';


@NgModule({
    declarations: [
        CountryEditUI,
		CountryDeleteUI,
		CountrySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        CountryEditUI,
		CountryDeleteUI,
		CountrySeekUI
    ]
})

export class Country_ModuleFunc { }