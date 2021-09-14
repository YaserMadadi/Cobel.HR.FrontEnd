
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { MenuService } from './menu.service';
import { MenuServiceCollection } from './menu.service.collection';

import { MenuIndexUI } from './index/menu.index';
import { Menu_ModuleFunc } from './menu.module.func';
import { Menu_ModuleMaster } from './menu.module.master';


import { MenuItem_ModuleFunc } from '../MenuItem/menuItem.module.func';
import { MenuItem_ModuleMaster } from '../MenuItem/menuItem.module.master';

@NgModule({
  declarations: [
    MenuIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Menu_ModuleMaster,
		MenuItem_ModuleMaster,
  ],
  exports: [
    MenuIndexUI,
		Menu_ModuleMaster,
  ],
  providers: [
    // MenuService,
    // MenuServiceCollection
  ]
})
export class MenuModule {}