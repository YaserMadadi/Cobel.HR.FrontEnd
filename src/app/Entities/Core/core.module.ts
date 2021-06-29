import {NgModule} from '@angular/core';

import { EntityModule } from './Entity/entity.module';
import { ImpersonateModule } from './Impersonate/impersonate.module';
import { LogModule } from './Log/log.module';
import { PropertyModule } from './Property/property.module';
import { PropertyOptionModule } from './PropertyOption/propertyOption.module';
import { RoleModule } from './Role/role.module';
import { RoleMemberModule } from './RoleMember/roleMember.module';
import { RolePermissionModule } from './RolePermission/rolePermission.module';
import { UserAccountModule } from './UserAccount/userAccount.module';
import { Core_RouteModule } from './core.route.module';

@NgModule({
  declarations: [],
  imports: [
    EntityModule,
		ImpersonateModule,
		LogModule,
		PropertyModule,
		PropertyOptionModule,
		RoleModule,
		RoleMemberModule,
		RolePermissionModule,
		UserAccountModule,
		Core_RouteModule
  ],
  exports: [
    EntityModule,
		ImpersonateModule,
		LogModule,
		PropertyModule,
		PropertyOptionModule,
		RoleModule,
		RoleMemberModule,
		RolePermissionModule,
		UserAccountModule,
		Core_RouteModule
  ]
})
export class Core_Module { }