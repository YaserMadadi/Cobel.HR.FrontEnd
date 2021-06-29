import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { RolePermissionService } from './rolePermission.service';
import { RolePermissionServiceCollection } from './rolePermission.service.collection';
import { RolePermissionMasterUI } from './master/rolePermission.master';
import { RolePermission_ModuleDetail } from './rolePermission.module.detail';

@NgModule({
    declarations: [
        RolePermissionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        RolePermission_ModuleDetail
    ],
    exports: [
        RolePermissionMasterUI
    ],
    providers: [
        //RolePermissionService,
       // RolePermissionServiceCollection   
    ]
})

export class RolePermission_ModuleMaster { }