import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { HabitancyTypeService } from './habitancyType.service';
import { HabitancyTypeServiceCollection } from './habitancyType.service.collection';


import { HabitancyType_Habitancy_DetailUI } from './detail/habitancyType-habitancy.detail';
import { Habitancy_ModuleMaster } from '../../HR/Habitancy/habitancy.module.master';

@NgModule({
  declarations: [
    HabitancyType_Habitancy_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Habitancy_ModuleMaster,
  ],
  exports: [
    HabitancyType_Habitancy_DetailUI
  ],
  providers: [
    //HabitancyTypeService,
    //HabitancyTypeServiceCollection
  ]
})
export class HabitancyType_ModuleDetail { }