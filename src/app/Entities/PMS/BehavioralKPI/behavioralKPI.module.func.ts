import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { BehavioralKPIService } from './behavioralKPI.service';
import { BehavioralKPIServiceCollection } from './behavioralKPI.service.collection';
import { BehavioralKPIMasterUI } from './master/behavioralKPI.master';
import { BehavioralKPIEditUI } from './edit/behavioralKPI.edit';
import { BehavioralKPIDeleteUI } from './delete/behavioralKPI.delete';
import { BehavioralKPISeekUI } from './seek/behavioralKPI.seek';

import { BehavioralObjective_ModuleFunc } from '../BehavioralObjective/behavioralObjective.module.func';
import { CompetencyItemKPI_ModuleFunc } from '../CompetencyItemKPI/competencyItemKPI.module.func';

@NgModule({
    declarations: [
        BehavioralKPIEditUI,
		BehavioralKPIDeleteUI,
		BehavioralKPISeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        BehavioralObjective_ModuleFunc,
		CompetencyItemKPI_ModuleFunc
    ],
    exports: [
        BehavioralKPIEditUI,
		BehavioralKPIDeleteUI,
		BehavioralKPISeekUI
    ]
})

export class BehavioralKPI_ModuleFunc { }