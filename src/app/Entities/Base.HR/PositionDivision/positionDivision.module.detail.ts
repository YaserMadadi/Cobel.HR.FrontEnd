
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PositionDivisionService } from './positionDivision.service';
import { PositionDivisionServiceCollection } from './positionDivision.service.collection';


import { PositionDivision_Position_DetailUI } from './detail/positionDivision-position.detail';
import { Position_ModuleMaster } from '../../HR/Position/position.module.master';

@NgModule({
  declarations: [
    PositionDivision_Position_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Position_ModuleMaster,
  ],
  exports: [
    PositionDivision_Position_DetailUI
  ]
})
export class PositionDivision_ModuleDetail { }