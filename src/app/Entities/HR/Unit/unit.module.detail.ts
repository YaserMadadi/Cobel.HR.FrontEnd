import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UnitService } from './unit.service';
import { UnitServiceCollection } from './unit.service.collection';


import { Unit_Position_DetailUI } from './detail/unit-position.detail';
import { Position_ModuleMaster } from '../Position/position.module.master';

@NgModule({
  declarations: [
    Unit_Position_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Position_ModuleMaster,
  ],
  exports: [
    Unit_Position_DetailUI
  ],
  
})
export class Unit_ModuleDetail { }