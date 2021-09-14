import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MenuItemService } from './menuItem.service';
import { MenuItemServiceCollection } from './menuItem.service.collection';
import { MenuItemMasterUI } from './master/menuItem.master';
import { MenuItem_ModuleDetail } from './menuItem.module.detail';

@NgModule({
    declarations: [
        MenuItemMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        MenuItem_ModuleDetail
    ],
    exports: [
        MenuItemMasterUI
    ],
    providers: [
        //MenuItemService,
       // MenuItemServiceCollection   
    ]
})

export class MenuItem_ModuleMaster { }