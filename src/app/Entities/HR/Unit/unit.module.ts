import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { UnitService } from './unit.service';
import { UnitServiceCollection } from './unit.service.collection';

import { UnitIndexUI } from './index/unit.index';
import { Unit_ModuleFunc } from './unit.module.func';
import { Unit_ModuleMaster } from './unit.module.master';


import { Position_ModuleFunc } from '../Position/position.module.func';
import { Position_ModuleMaster } from '../Position/position.module.master';

@NgModule({
  declarations: [
    UnitIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Unit_ModuleMaster,
		Position_ModuleMaster,
  ],
  exports: [
    UnitIndexUI,
		Unit_ModuleMaster,
  ],
  providers: [
    // UnitService,
    // UnitServiceCollection
  ]
})
export class UnitModule {}