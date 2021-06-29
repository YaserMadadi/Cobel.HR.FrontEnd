import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { RoleService } from './role.service';
import { RoleServiceCollection } from './role.service.collection';
import { RoleMasterUI } from './master/role.master';
import { RoleEditUI } from './edit/role.edit';
import { RoleDeleteUI } from './delete/role.delete';
import { RoleSeekUI } from './seek/role.seek';


@NgModule({
    declarations: [
        RoleEditUI,
		RoleDeleteUI,
		RoleSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        RoleEditUI,
		RoleDeleteUI,
		RoleSeekUI
    ],
    providers: [
       //RoleService,
       // RoleServiceCollection,
    ]
})

export class Role_ModuleFunc { }