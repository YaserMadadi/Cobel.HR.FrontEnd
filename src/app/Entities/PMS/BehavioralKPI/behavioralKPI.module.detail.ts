import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { BehavioralKPIService } from './behavioralKPI.service';
import { BehavioralKPIServiceCollection } from './behavioralKPI.service.collection';


import { BehavioralKPI_BehavioralAppraise_DetailUI } from './detail/behavioralKPI-behavioralAppraise.detail';
import { BehavioralAppraise_ModuleMaster } from '../BehavioralAppraise/behavioralAppraise.module.master';

@NgModule({
  declarations: [
    BehavioralKPI_BehavioralAppraise_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		BehavioralAppraise_ModuleMaster,
  ],
  exports: [
    BehavioralKPI_BehavioralAppraise_DetailUI
  ],
  
})
export class BehavioralKPI_ModuleDetail { }