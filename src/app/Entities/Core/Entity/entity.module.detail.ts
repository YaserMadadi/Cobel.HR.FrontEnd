import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EntityService } from './entity.service';
import { EntityServiceCollection } from './entity.service.collection';


import { Entity_Property_DetailUI } from './detail/entity-property.detail';
import { Property_ModuleMaster } from '../Property/property.module.master';
import { Entity_RolePermission_DetailUI } from './detail/entity-rolePermission.detail';
import { RolePermission_ModuleMaster } from '../RolePermission/rolePermission.module.master';

@NgModule({
  declarations: [
    Entity_Property_DetailUI,
		Entity_RolePermission_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Property_ModuleMaster,
		RolePermission_ModuleMaster,
  ],
  exports: [
    Entity_Property_DetailUI,
		Entity_RolePermission_DetailUI
  ],
  providers: [
    //EntityService,
    //EntityServiceCollection
  ]
})
export class Entity_ModuleDetail { }