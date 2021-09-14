
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MenuItemTypeService } from './menuItemType.service';
import { MenuItemTypeServiceCollection } from './menuItemType.service.collection';


import { MenuItemType_MenuItem_DetailUI } from './detail/menuItemType-menuItem.detail';
import { MenuItem_ModuleMaster } from '../MenuItem/menuItem.module.master';

@NgModule({
  declarations: [
    MenuItemType_MenuItem_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		MenuItem_ModuleMaster,
  ],
  exports: [
    MenuItemType_MenuItem_DetailUI
  ],
  providers: [
    //MenuItemTypeService,
    //MenuItemTypeServiceCollection
  ]
})
export class MenuItemType_ModuleDetail { }