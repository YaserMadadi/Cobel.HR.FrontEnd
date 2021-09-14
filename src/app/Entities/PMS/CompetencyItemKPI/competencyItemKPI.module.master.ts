import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CompetencyItemKPIService } from './competencyItemKPI.service';
import { CompetencyItemKPIServiceCollection } from './competencyItemKPI.service.collection';
import { CompetencyItemKPIMasterUI } from './master/competencyItemKPI.master';
import { CompetencyItemKPI_ModuleDetail } from './competencyItemKPI.module.detail';

@NgModule({
    declarations: [
        CompetencyItemKPIMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CompetencyItemKPI_ModuleDetail
    ],
    exports: [
        CompetencyItemKPIMasterUI
    ]
})

export class CompetencyItemKPI_ModuleMaster { }