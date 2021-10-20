
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { RoleMenuItemService } from './roleMenuItem.service';
import { RoleMenuItemServiceCollection } from './roleMenuItem.service.collection';

import { RoleMenuItemIndexUI } from './index/roleMenuItem.index';
import { RoleMenuItem_ModuleFunc } from './roleMenuItem.module.func';
import { RoleMenuItem_ModuleMaster } from './roleMenuItem.module.master';



@NgModule({
  declarations: [
    RoleMenuItemIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    RoleMenuItem_ModuleMaster,
  ],
  exports: [
    RoleMenuItemIndexUI,
		RoleMenuItem_ModuleMaster,
  ],
  providers: [
    // RoleMenuItemService,
    // RoleMenuItemServiceCollection
  ]
})
export class RoleMenuItemModule {}