import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { EntityService } from './entity.service';
import { EntityServiceCollection } from './entity.service.collection';

import { EntityIndexUI } from './index/entity.index';
import { Entity_ModuleFunc } from './entity.module.func';
import { Entity_ModuleMaster } from './entity.module.master';


import { Property_ModuleFunc } from '../Property/property.module.func';
import { Property_ModuleMaster } from '../Property/property.module.master';
import { RolePermission_ModuleFunc } from '../RolePermission/rolePermission.module.func';
import { RolePermission_ModuleMaster } from '../RolePermission/rolePermission.module.master';

@NgModule({
  declarations: [
    EntityIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Entity_ModuleMaster,
		Property_ModuleMaster,
		RolePermission_ModuleMaster,
  ],
  exports: [
    EntityIndexUI,
		Entity_ModuleMaster,
   ]
})
export class EntityModule {}