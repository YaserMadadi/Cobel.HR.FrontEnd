import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QualitativeKPIService } from './qualitativeKPI.service';
import { QualitativeKPIServiceCollection } from './qualitativeKPI.service.collection';
import { QualitativeKPIMasterUI } from './master/qualitativeKPI.master';
import { QualitativeKPI_ModuleDetail } from './qualitativeKPI.module.detail';

@NgModule({
    declarations: [
        QualitativeKPIMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        QualitativeKPI_ModuleDetail
    ],
    exports: [
        QualitativeKPIMasterUI
    ],
    providers: [
        //QualitativeKPIService,
       // QualitativeKPIServiceCollection   
    ]
})

export class QualitativeKPI_ModuleMaster { }