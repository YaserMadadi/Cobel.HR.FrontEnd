
import { NgModule } from '@angular/core';

import { BadgeModule } from './Badge/badge.module';
import { BadgeTypeModule } from './BadgeType/badgeType.module';
import { CommandParameterModule } from './CommandParameter/commandParameter.module';
import { EntityModule } from './Entity/entity.module';
import { ExceptionLogModule } from './ExceptionLog/exceptionLog.module';
import { ImpersonateModule } from './Impersonate/impersonate.module';
import { LogModule } from './Log/log.module';
import { MenuModule } from './Menu/menu.module';
import { MenuItemModule } from './MenuItem/menuItem.module';
import { MenuItemTypeModule } from './MenuItemType/menuItemType.module';
import { PropertyModule } from './Property/property.module';
import { PropertyOptionModule } from './PropertyOption/propertyOption.module';
import { RoleModule } from './Role/role.module';
import { RoleMemberModule } from './RoleMember/roleMember.module';
import { RoleMenuItemModule } from './RoleMenuItem/roleMenuItem.module';
import { RolePermissionModule } from './RolePermission/rolePermission.module';
import { SubSystemModule } from './SubSystem/subSystem.module';
import { UserAccountModule } from './UserAccount/userAccount.module';
import { Core_RouteModule } from './core.route.module';

@NgModule({
	declarations: [],
	imports: [
		BadgeModule,
		BadgeTypeModule,
		CommandParameterModule,
		EntityModule,
		ExceptionLogModule,
		ImpersonateModule,
		LogModule,
		MenuModule,
		MenuItemModule,
		MenuItemTypeModule,
		PropertyModule,
		PropertyOptionModule,
		RoleModule,
		RoleMemberModule,
		RoleMenuItemModule,
		RolePermissionModule,
		SubSystemModule,
		UserAccountModule,
		Core_RouteModule
	],
	exports: [
		BadgeModule,
		BadgeTypeModule,
		CommandParameterModule,
		EntityModule,
		ExceptionLogModule,
		ImpersonateModule,
		LogModule,
		MenuModule,
		MenuItemModule,
		MenuItemTypeModule,
		PropertyModule,
		PropertyOptionModule,
		RoleModule,
		RoleMemberModule,
		RoleMenuItemModule,
		RolePermissionModule,
		SubSystemModule,
		UserAccountModule,
		Core_RouteModule
	]
})
export class Core_Module { }