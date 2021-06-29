import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { BehavioralKPIService } from './behavioralKPI.service';
import { BehavioralKPIServiceCollection } from './behavioralKPI.service.collection';
import { BehavioralKPIMasterUI } from './master/behavioralKPI.master';
import { BehavioralKPI_ModuleDetail } from './behavioralKPI.module.detail';

@NgModule({
    declarations: [
        BehavioralKPIMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        BehavioralKPI_ModuleDetail
    ],
    exports: [
        BehavioralKPIMasterUI
    ],
    providers: [
        //BehavioralKPIService,
       // BehavioralKPIServiceCollection   
    ]
})

export class BehavioralKPI_ModuleMaster { }