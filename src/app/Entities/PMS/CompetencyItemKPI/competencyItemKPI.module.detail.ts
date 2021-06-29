import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CompetencyItemKPIService } from './competencyItemKPI.service';
import { CompetencyItemKPIServiceCollection } from './competencyItemKPI.service.collection';


import { CompetencyItemKPI_BehavioralKPI_DetailUI } from './detail/competencyItemKPI-behavioralKPI.detail';
import { BehavioralKPI_ModuleMaster } from '../BehavioralKPI/behavioralKPI.module.master';

@NgModule({
  declarations: [
    CompetencyItemKPI_BehavioralKPI_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		BehavioralKPI_ModuleMaster,
  ],
  exports: [
    CompetencyItemKPI_BehavioralKPI_DetailUI
  ],
  providers: [
    //CompetencyItemKPIService,
    //CompetencyItemKPIServiceCollection
  ]
})
export class CompetencyItemKPI_ModuleDetail { }