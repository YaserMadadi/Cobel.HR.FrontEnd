import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { BehavioralObjectiveService } from './behavioralObjective.service';
import { BehavioralObjectiveServiceCollection } from './behavioralObjective.service.collection';


import { BehavioralObjective_BehavioralKPI_DetailUI } from './detail/behavioralObjective-behavioralKPI.detail';
import { BehavioralKPI_ModuleMaster } from '../BehavioralKPI/behavioralKPI.module.master';

@NgModule({
  declarations: [
    BehavioralObjective_BehavioralKPI_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		BehavioralKPI_ModuleMaster,
  ],
  exports: [
    BehavioralObjective_BehavioralKPI_DetailUI
  ],
  
})
export class BehavioralObjective_ModuleDetail { }