import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { LevelService } from './level.service';
import { LevelServiceCollection } from './level.service.collection';

import { LevelIndexUI } from './index/level.index';
import { Level_ModuleFunc } from './level.module.func';
import { Level_ModuleMaster } from './level.module.master';


import { Position_ModuleFunc } from '../Position/position.module.func';
import { Position_ModuleMaster } from '../Position/position.module.master';

@NgModule({
  declarations: [
    LevelIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Level_ModuleMaster,
		Position_ModuleMaster,
  ],
  exports: [
    LevelIndexUI,
		Level_ModuleMaster,
  ],
  providers: [
    // LevelService,
    // LevelServiceCollection
  ]
})
export class LevelModule {}