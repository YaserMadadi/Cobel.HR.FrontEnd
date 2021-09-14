
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MenuService } from './menu.service';
import { MenuServiceCollection } from './menu.service.collection';


import { Menu_MenuItem_DetailUI } from './detail/menu-menuItem.detail';
import { MenuItem_ModuleMaster } from '../MenuItem/menuItem.module.master';

@NgModule({
  declarations: [
    Menu_MenuItem_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		MenuItem_ModuleMaster,
  ],
  exports: [
    Menu_MenuItem_DetailUI
  ],
  providers: [
    //MenuService,
    //MenuServiceCollection
  ]
})
export class Menu_ModuleDetail { }