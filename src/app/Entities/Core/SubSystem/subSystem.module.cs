
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { SubSystemService } from './subSystem.service';
import { SubSystemServiceCollection } from './subSystem.service.collection';

import { SubSystemIndexUI } from './index/subSystem.index';
import { SubSystem_ModuleFunc } from './subSystem.module.func';
import { SubSystem_ModuleMaster } from './subSystem.module.master';


import { Menu_ModuleFunc } from '../Menu/menu.module.func';
import { Menu_ModuleMaster } from '../Menu/menu.module.master';

@NgModule({
  declarations: [
    SubSystemIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    SubSystem_ModuleMaster,
		Menu_ModuleMaster,
  ],
  exports: [
    SubSystemIndexUI,
		SubSystem_ModuleMaster,
  ],
  providers: [
    // SubSystemService,
    // SubSystemServiceCollection
  ]
})
export class SubSystemModule {}