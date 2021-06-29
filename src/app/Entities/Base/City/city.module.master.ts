import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CityService } from './city.service';
import { CityServiceCollection } from './city.service.collection';
import { CityMasterUI } from './master/city.master';
import { City_ModuleDetail } from './city.module.detail';

@NgModule({
    declarations: [
        CityMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        City_ModuleDetail
    ],
    exports: [
        CityMasterUI
    ],
    providers: [
        //CityService,
       // CityServiceCollection   
    ]
})

export class City_ModuleMaster { }