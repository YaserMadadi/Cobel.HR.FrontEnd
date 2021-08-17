
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PositionDivisionService } from './positionDivision.service';
import { PositionDivisionServiceCollection } from './positionDivision.service.collection';

import { PositionDivisionIndexUI } from './index/positionDivision.index';
import { PositionDivision_ModuleFunc } from './positionDivision.module.func';
import { PositionDivision_ModuleMaster } from './positionDivision.module.master';


import { Position_ModuleFunc } from '../../HR/Position/position.module.func';
import { Position_ModuleMaster } from '../../HR/Position/position.module.master';

@NgModule({
  declarations: [
    PositionDivisionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    PositionDivision_ModuleMaster,
		Position_ModuleMaster,
  ],
  exports: [
    PositionDivisionIndexUI,
		PositionDivision_ModuleMaster,
  ],
  providers: [
    // PositionDivisionService,
    // PositionDivisionServiceCollection
  ]
})
export class PositionDivisionModule {}