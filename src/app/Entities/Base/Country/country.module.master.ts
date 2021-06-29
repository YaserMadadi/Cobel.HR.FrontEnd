import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CountryService } from './country.service';
import { CountryServiceCollection } from './country.service.collection';
import { CountryMasterUI } from './master/country.master';
import { Country_ModuleDetail } from './country.module.detail';

@NgModule({
    declarations: [
        CountryMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Country_ModuleDetail
    ],
    exports: [
        CountryMasterUI
    ],
    providers: [
        //CountryService,
       // CountryServiceCollection   
    ]
})

export class Country_ModuleMaster { }