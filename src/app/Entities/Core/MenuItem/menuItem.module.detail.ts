
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MenuItemService } from './menuItem.service';
import { MenuItemServiceCollection } from './menuItem.service.collection';


import { MenuItem_Badge_DetailUI } from './detail/menuItem-badge.detail';
import { Badge_ModuleMaster } from '../Badge/badge.module.master';
import { MenuItem_RoleMenuItem_DetailUI } from './detail/menuItem-roleMenuItem.detail';
import { RoleMenuItem_ModuleMaster } from '../RoleMenuItem/roleMenuItem.module.master';

@NgModule({
  declarations: [
    MenuItem_Badge_DetailUI,
		MenuItem_RoleMenuItem_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Badge_ModuleMaster,
		RoleMenuItem_ModuleMaster,
  ],
  exports: [
    MenuItem_Badge_DetailUI,
		MenuItem_RoleMenuItem_DetailUI
  ],
  providers: [
    //MenuItemService,
    //MenuItemServiceCollection
  ]
})
export class MenuItem_ModuleDetail { }