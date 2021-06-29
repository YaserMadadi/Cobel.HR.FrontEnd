import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ExpectedLevelService } from './expectedLevel.service';
import { ExpectedLevelServiceCollection } from './expectedLevel.service.collection';


import { ExpectedLevel_BehavioralObjective_DetailUI } from './detail/expectedLevel-behavioralObjective.detail';
import { BehavioralObjective_ModuleMaster } from '../../PMS/BehavioralObjective/behavioralObjective.module.master';

@NgModule({
  declarations: [
    ExpectedLevel_BehavioralObjective_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		BehavioralObjective_ModuleMaster,
  ],
  exports: [
    ExpectedLevel_BehavioralObjective_DetailUI
  ],
  providers: [
    //ExpectedLevelService,
    //ExpectedLevelServiceCollection
  ]
})
export class ExpectedLevel_ModuleDetail { }