import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { RolePermissionService } from './rolePermission.service';
import { RolePermissionServiceCollection } from './rolePermission.service.collection';

import { RolePermissionIndexUI } from './index/rolePermission.index';
import { RolePermission_ModuleFunc } from './rolePermission.module.func';
import { RolePermission_ModuleMaster } from './rolePermission.module.master';



@NgModule({
  declarations: [
    RolePermissionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    RolePermission_ModuleMaster,
  ],
  exports: [
    RolePermissionIndexUI,
		RolePermission_ModuleMaster,
   ]
})
export class RolePermissionModule {}