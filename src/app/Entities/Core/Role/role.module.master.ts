import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { RoleService } from './role.service';
import { RoleServiceCollection } from './role.service.collection';
import { RoleMasterUI } from './master/role.master';
import { Role_ModuleDetail } from './role.module.detail';

@NgModule({
    declarations: [
        RoleMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Role_ModuleDetail
    ],
    exports: [
        RoleMasterUI
    ]
})

export class Role_ModuleMaster { }