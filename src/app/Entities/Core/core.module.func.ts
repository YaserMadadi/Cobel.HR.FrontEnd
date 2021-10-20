
import { NgModule } from '@angular/core';

import { Badge_ModuleFunc } from './Badge/badge.module.func';
import { BadgeType_ModuleFunc } from './BadgeType/badgeType.module.func';
import { CommandParameter_ModuleFunc } from './CommandParameter/commandParameter.module.func';
import { Entity_ModuleFunc } from './Entity/entity.module.func';
import { ExceptionLog_ModuleFunc } from './ExceptionLog/exceptionLog.module.func';
import { Impersonate_ModuleFunc } from './Impersonate/impersonate.module.func';
import { Log_ModuleFunc } from './Log/log.module.func';
import { Menu_ModuleFunc } from './Menu/menu.module.func';
import { MenuItem_ModuleFunc } from './MenuItem/menuItem.module.func';
import { MenuItemType_ModuleFunc } from './MenuItemType/menuItemType.module.func';
import { Property_ModuleFunc } from './Property/property.module.func';
import { PropertyOption_ModuleFunc } from './PropertyOption/propertyOption.module.func';
import { Role_ModuleFunc } from './Role/role.module.func';
import { RoleMember_ModuleFunc } from './RoleMember/roleMember.module.func';
import { RoleMenuItem_ModuleFunc } from './RoleMenuItem/roleMenuItem.module.func';
import { RolePermission_ModuleFunc } from './RolePermission/rolePermission.module.func';
import { SubSystem_ModuleFunc } from './SubSystem/subSystem.module.func';
import { UserAccount_ModuleFunc } from './UserAccount/userAccount.module.func';


@NgModule({
	declarations: [],
	imports: [
		Badge_ModuleFunc,
		BadgeType_ModuleFunc,
		CommandParameter_ModuleFunc,
		Entity_ModuleFunc,
		ExceptionLog_ModuleFunc,
		Impersonate_ModuleFunc,
		Log_ModuleFunc,
		Menu_ModuleFunc,
		MenuItem_ModuleFunc,
		MenuItemType_ModuleFunc,
		Property_ModuleFunc,
		PropertyOption_ModuleFunc,
		Role_ModuleFunc,
		RoleMember_ModuleFunc,
		RoleMenuItem_ModuleFunc,
		RolePermission_ModuleFunc,
		SubSystem_ModuleFunc,
		UserAccount_ModuleFunc
	],
	exports: [
		Badge_ModuleFunc,
		BadgeType_ModuleFunc,
		CommandParameter_ModuleFunc,
		Entity_ModuleFunc,
		ExceptionLog_ModuleFunc,
		Impersonate_ModuleFunc,
		Log_ModuleFunc,
		Menu_ModuleFunc,
		MenuItem_ModuleFunc,
		MenuItemType_ModuleFunc,
		Property_ModuleFunc,
		PropertyOption_ModuleFunc,
		Role_ModuleFunc,
		RoleMember_ModuleFunc,
		RoleMenuItem_ModuleFunc,
		RolePermission_ModuleFunc,
		SubSystem_ModuleFunc,
		UserAccount_ModuleFunc,

	]
})
export class Core_ModuleFunc { }