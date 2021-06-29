import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CellActionService } from './cellAction.service';
import { CellActionServiceCollection } from './cellAction.service.collection';

import { CellActionIndexUI } from './index/cellAction.index';
import { CellAction_ModuleFunc } from './cellAction.module.func';
import { CellAction_ModuleMaster } from './cellAction.module.master';



@NgModule({
  declarations: [
    CellActionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CellAction_ModuleMaster,
  ],
  exports: [
    CellActionIndexUI,
		CellAction_ModuleMaster,
  ],
  providers: [
    // CellActionService,
    // CellActionServiceCollection
  ]
})
export class CellActionModule {}