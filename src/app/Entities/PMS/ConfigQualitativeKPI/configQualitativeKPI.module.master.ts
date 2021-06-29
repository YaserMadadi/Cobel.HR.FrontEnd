import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ConfigQualitativeKPIService } from './configQualitativeKPI.service';
import { ConfigQualitativeKPIServiceCollection } from './configQualitativeKPI.service.collection';
import { ConfigQualitativeKPIMasterUI } from './master/configQualitativeKPI.master';
import { ConfigQualitativeKPI_ModuleDetail } from './configQualitativeKPI.module.detail';

@NgModule({
    declarations: [
        ConfigQualitativeKPIMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ConfigQualitativeKPI_ModuleDetail
    ],
    exports: [
        ConfigQualitativeKPIMasterUI
    ],
    providers: [
        //ConfigQualitativeKPIService,
       // ConfigQualitativeKPIServiceCollection   
    ]
})

export class ConfigQualitativeKPI_ModuleMaster { }