import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { MenuItemService } from './menuItem.service';
import { MenuItemServiceCollection } from './menuItem.service.collection';
import { MenuItemMasterUI } from './master/menuItem.master';
import { MenuItemEditUI } from './edit/menuItem.edit';
import { MenuItemDeleteUI } from './delete/menuItem.delete';
import { MenuItemSeekUI } from './seek/menuItem.seek';

import { Menu_ModuleFunc } from '../Menu/menu.module.func';
import { MenuItemType_ModuleFunc } from '../MenuItemType/menuItemType.module.func';

@NgModule({
    declarations: [
        MenuItemEditUI,
		MenuItemDeleteUI,
		MenuItemSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Menu_ModuleFunc,
		MenuItemType_ModuleFunc
    ],
    exports: [
        MenuItemEditUI,
		MenuItemDeleteUI,
		MenuItemSeekUI
    ],
    providers: [
       //MenuItemService,
       // MenuItemServiceCollection,
    ]
})

export class MenuItem_ModuleFunc { }
