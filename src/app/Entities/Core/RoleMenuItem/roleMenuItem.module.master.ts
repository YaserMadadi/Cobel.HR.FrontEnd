import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { RoleMenuItemService } from './roleMenuItem.service';
import { RoleMenuItemServiceCollection } from './roleMenuItem.service.collection';
import { RoleMenuItemMasterUI } from './master/roleMenuItem.master';
import { RoleMenuItem_ModuleDetail } from './roleMenuItem.module.detail';

@NgModule({
    declarations: [
        RoleMenuItemMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        RoleMenuItem_ModuleDetail
    ],
    exports: [
        RoleMenuItemMasterUI
    ],
    providers: [
        //RoleMenuItemService,
       // RoleMenuItemServiceCollection   
    ]
})

export class RoleMenuItem_ModuleMaster { }