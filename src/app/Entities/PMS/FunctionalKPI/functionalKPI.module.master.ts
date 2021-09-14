import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FunctionalKPIService } from './functionalKPI.service';
import { FunctionalKPIServiceCollection } from './functionalKPI.service.collection';
import { FunctionalKPIMasterUI } from './master/functionalKPI.master';
import { FunctionalKPI_ModuleDetail } from './functionalKPI.module.detail';

@NgModule({
    declarations: [
        FunctionalKPIMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        FunctionalKPI_ModuleDetail
    ],
    exports: [
        FunctionalKPIMasterUI
    ]
})

export class FunctionalKPI_ModuleMaster { }