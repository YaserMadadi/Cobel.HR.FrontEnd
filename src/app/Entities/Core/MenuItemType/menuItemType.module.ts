
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { MenuItemTypeService } from './menuItemType.service';
import { MenuItemTypeServiceCollection } from './menuItemType.service.collection';

import { MenuItemTypeIndexUI } from './index/menuItemType.index';
import { MenuItemType_ModuleFunc } from './menuItemType.module.func';
import { MenuItemType_ModuleMaster } from './menuItemType.module.master';


import { MenuItem_ModuleFunc } from '../MenuItem/menuItem.module.func';
import { MenuItem_ModuleMaster } from '../MenuItem/menuItem.module.master';

@NgModule({
  declarations: [
    MenuItemTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    MenuItemType_ModuleMaster,
		MenuItem_ModuleMaster,
  ],
  exports: [
    MenuItemTypeIndexUI,
		MenuItemType_ModuleMaster,
  ],
  providers: [
    // MenuItemTypeService,
    // MenuItemTypeServiceCollection
  ]
})
export class MenuItemTypeModule {}