import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { RoleService } from './role.service';
import { RoleServiceCollection } from './role.service.collection';

import { RoleIndexUI } from './index/role.index';
import { Role_ModuleFunc } from './role.module.func';
import { Role_ModuleMaster } from './role.module.master';


import { RoleMember_ModuleFunc } from '../RoleMember/roleMember.module.func';
import { RoleMember_ModuleMaster } from '../RoleMember/roleMember.module.master';
import { RolePermission_ModuleFunc } from '../RolePermission/rolePermission.module.func';
import { RolePermission_ModuleMaster } from '../RolePermission/rolePermission.module.master';

@NgModule({
  declarations: [
    RoleIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Role_ModuleMaster,
		RoleMember_ModuleMaster,
		RolePermission_ModuleMaster,
  ],
  exports: [
    RoleIndexUI,
		Role_ModuleMaster,
   ]
})
export class RoleModule {}