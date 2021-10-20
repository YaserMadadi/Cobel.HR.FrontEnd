import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { RoleMenuItemService } from './roleMenuItem.service';
import { RoleMenuItemServiceCollection } from './roleMenuItem.service.collection';
import { RoleMenuItemMasterUI } from './master/roleMenuItem.master';
import { RoleMenuItemEditUI } from './edit/roleMenuItem.edit';
import { RoleMenuItemDeleteUI } from './delete/roleMenuItem.delete';
import { RoleMenuItemSeekUI } from './seek/roleMenuItem.seek';

import { Role_ModuleFunc } from '../Role/role.module.func';
import { MenuItem_ModuleFunc } from '../MenuItem/menuItem.module.func';

@NgModule({
    declarations: [
        RoleMenuItemEditUI,
		RoleMenuItemDeleteUI,
		RoleMenuItemSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Role_ModuleFunc,
		MenuItem_ModuleFunc
    ],
    exports: [
        RoleMenuItemEditUI,
		RoleMenuItemDeleteUI,
		RoleMenuItemSeekUI
    ],
    providers: [
       //RoleMenuItemService,
       // RoleMenuItemServiceCollection,
    ]
})

export class RoleMenuItem_ModuleFunc { }
