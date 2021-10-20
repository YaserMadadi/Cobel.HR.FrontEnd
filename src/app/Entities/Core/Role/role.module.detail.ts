import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { RoleService } from './role.service';
import { RoleServiceCollection } from './role.service.collection';


import { Role_RoleMember_DetailUI } from './detail/role-roleMember.detail';
import { RoleMember_ModuleMaster } from '../RoleMember/roleMember.module.master';
import { Role_RolePermission_DetailUI } from './detail/role-rolePermission.detail';
import { RolePermission_ModuleMaster } from '../RolePermission/rolePermission.module.master';

@NgModule({
  declarations: [
    Role_RoleMember_DetailUI,
		Role_RolePermission_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		RoleMember_ModuleMaster,
		RolePermission_ModuleMaster,
  ],
  exports: [
    Role_RoleMember_DetailUI,
		Role_RolePermission_DetailUI
  ],
  
})
export class Role_ModuleDetail { }