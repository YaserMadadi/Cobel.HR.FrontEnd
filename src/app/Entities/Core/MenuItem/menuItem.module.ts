
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { MenuItemService } from './menuItem.service';
import { MenuItemServiceCollection } from './menuItem.service.collection';

import { MenuItemIndexUI } from './index/menuItem.index';
import { MenuItem_ModuleFunc } from './menuItem.module.func';
import { MenuItem_ModuleMaster } from './menuItem.module.master';


import { Badge_ModuleFunc } from '../Badge/badge.module.func';
import { Badge_ModuleMaster } from '../Badge/badge.module.master';
import { RoleMenuItem_ModuleFunc } from '../RoleMenuItem/roleMenuItem.module.func';
import { RoleMenuItem_ModuleMaster } from '../RoleMenuItem/roleMenuItem.module.master';

@NgModule({
  declarations: [
    MenuItemIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    MenuItem_ModuleMaster,
		Badge_ModuleMaster,
		RoleMenuItem_ModuleMaster,
  ],
  exports: [
    MenuItemIndexUI,
		MenuItem_ModuleMaster,
  ],
  providers: [
    // MenuItemService,
    // MenuItemServiceCollection
  ]
})
export class MenuItemModule {}