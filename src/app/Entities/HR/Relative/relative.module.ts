import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { RelativeService } from './relative.service';
import { RelativeServiceCollection } from './relative.service.collection';

import { RelativeIndexUI } from './index/relative.index';
import { Relative_ModuleFunc } from './relative.module.func';
import { Relative_ModuleMaster } from './relative.module.master';



@NgModule({
  declarations: [
    RelativeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Relative_ModuleMaster,
  ],
  exports: [
    RelativeIndexUI,
		Relative_ModuleMaster,
   ]
})
export class RelativeModule {}