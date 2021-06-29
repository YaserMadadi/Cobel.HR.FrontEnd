import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CompetencyItemKPIService } from './competencyItemKPI.service';
import { CompetencyItemKPIServiceCollection } from './competencyItemKPI.service.collection';
import { CompetencyItemKPIMasterUI } from './master/competencyItemKPI.master';
import { CompetencyItemKPIEditUI } from './edit/competencyItemKPI.edit';
import { CompetencyItemKPIDeleteUI } from './delete/competencyItemKPI.delete';
import { CompetencyItemKPISeekUI } from './seek/competencyItemKPI.seek';

import { CompetencyItem_ModuleFunc } from '../CompetencyItem/competencyItem.module.func';

@NgModule({
    declarations: [
        CompetencyItemKPIEditUI,
		CompetencyItemKPIDeleteUI,
		CompetencyItemKPISeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        CompetencyItem_ModuleFunc
    ],
    exports: [
        CompetencyItemKPIEditUI,
		CompetencyItemKPIDeleteUI,
		CompetencyItemKPISeekUI
    ],
    providers: [
       //CompetencyItemKPIService,
       // CompetencyItemKPIServiceCollection,
    ]
})

export class CompetencyItemKPI_ModuleFunc { }