import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { LevelService } from './level.service';
import { LevelServiceCollection } from './level.service.collection';


import { Level_ObjectiveWeightNonOperational_DetailUI } from './detail/level-objectiveWeightNonOperational.detail';
import { ObjectiveWeightNonOperational_ModuleMaster } from '../../PMS/ObjectiveWeightNonOperational/objectiveWeightNonOperational.module.master';
import { Level_Position_DetailUI } from './detail/level-position.detail';
import { Position_ModuleMaster } from '../Position/position.module.master';

@NgModule({
  declarations: [
    Level_ObjectiveWeightNonOperational_DetailUI,
		Level_Position_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		ObjectiveWeightNonOperational_ModuleMaster,
		Position_ModuleMaster,
  ],
  exports: [
    Level_ObjectiveWeightNonOperational_DetailUI,
		Level_Position_DetailUI
  ],
  providers: [
    //LevelService,
    //LevelServiceCollection
  ]
})
export class Level_ModuleDetail { }