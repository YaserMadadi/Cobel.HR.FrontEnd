import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { RolePermissionService } from './rolePermission.service';
import { RolePermissionServiceCollection } from './rolePermission.service.collection';
import { RolePermissionMasterUI } from './master/rolePermission.master';
import { RolePermissionEditUI } from './edit/rolePermission.edit';
import { RolePermissionDeleteUI } from './delete/rolePermission.delete';
import { RolePermissionSeekUI } from './seek/rolePermission.seek';

import { Role_ModuleFunc } from '../Role/role.module.func';
import { Entity_ModuleFunc } from '../Entity/entity.module.func';

@NgModule({
    declarations: [
        RolePermissionEditUI,
		RolePermissionDeleteUI,
		RolePermissionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Role_ModuleFunc,
		Entity_ModuleFunc
    ],
    exports: [
        RolePermissionEditUI,
		RolePermissionDeleteUI,
		RolePermissionSeekUI
    ],
    providers: [
       //RolePermissionService,
       // RolePermissionServiceCollection,
    ]
})

export class RolePermission_ModuleFunc { }