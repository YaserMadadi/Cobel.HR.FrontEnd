
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../xcore/security/auth_guard';

import { LogIndexUI } from './Log/index/log.index';
import { ImpersonateIndexUI } from './Impersonate/index/impersonate.index';
import { EntityIndexUI } from './Entity/index/entity.index';
import { PropertyOptionIndexUI } from './PropertyOption/index/propertyOption.index';
import { RoleIndexUI } from './Role/index/role.index';
import { RoleMemberIndexUI } from './RoleMember/index/roleMember.index';
import { SubSystemIndexUI } from './SubSystem/index/subSystem.index';
import { MenuIndexUI } from './Menu/index/menu.index';
import { MenuItemTypeIndexUI } from './MenuItemType/index/menuItemType.index';
import { MenuItemIndexUI } from './MenuItem/index/menuItem.index';
import { BadgeTypeIndexUI } from './BadgeType/index/badgeType.index';
import { BadgeIndexUI } from './Badge/index/badge.index';
import { RoleMenuItemIndexUI } from './RoleMenuItem/index/roleMenuItem.index';
import { PropertyIndexUI } from './Property/index/property.index';
import { RolePermissionIndexUI } from './RolePermission/index/rolePermission.index';
import { ExceptionLogIndexUI } from './ExceptionLog/index/exceptionLog.index';
import { CommandParameterIndexUI } from './CommandParameter/index/commandParameter.index';
import { UserAccountIndexUI } from './UserAccount/index/userAccount.index';

const core_routes : Routes = [
  { path: 'Badge', redirectTo: 'Badge/0' },
	{ path: 'Badge/:id', component: BadgeIndexUI, canActivate: [AuthGuard], data: { title: 'Badge' }  },
	{ path: 'BadgeType', redirectTo: 'BadgeType/0' },
	{ path: 'BadgeType/:id', component: BadgeTypeIndexUI, canActivate: [AuthGuard], data: { title: 'BadgeType' }  },
	{ path: 'CommandParameter', redirectTo: 'CommandParameter/0' },
	{ path: 'CommandParameter/:id', component: CommandParameterIndexUI, canActivate: [AuthGuard], data: { title: 'CommandParameter' }  },
	{ path: 'Entity', redirectTo: 'Entity/0' },
	{ path: 'Entity/:id', component: EntityIndexUI, canActivate: [AuthGuard], data: { title: 'Entity' }  },
	{ path: 'ExceptionLog', redirectTo: 'ExceptionLog/0' },
	{ path: 'ExceptionLog/:id', component: ExceptionLogIndexUI, canActivate: [AuthGuard], data: { title: 'ExceptionLog' }  },
	{ path: 'Impersonate', redirectTo: 'Impersonate/0' },
	{ path: 'Impersonate/:id', component: ImpersonateIndexUI, canActivate: [AuthGuard], data: { title: 'Impersonate' }  },
	{ path: 'Log', redirectTo: 'Log/0' },
	{ path: 'Log/:id', component: LogIndexUI, canActivate: [AuthGuard], data: { title: 'Log' }  },
	{ path: 'Menu', redirectTo: 'Menu/0' },
	{ path: 'Menu/:id', component: MenuIndexUI, canActivate: [AuthGuard], data: { title: 'Menu' }  },
	{ path: 'MenuItem', redirectTo: 'MenuItem/0' },
	{ path: 'MenuItem/:id', component: MenuItemIndexUI, canActivate: [AuthGuard], data: { title: 'MenuItem' }  },
	{ path: 'MenuItemType', redirectTo: 'MenuItemType/0' },
	{ path: 'MenuItemType/:id', component: MenuItemTypeIndexUI, canActivate: [AuthGuard], data: { title: 'MenuItemType' }  },
	{ path: 'Property', redirectTo: 'Property/0' },
	{ path: 'Property/:id', component: PropertyIndexUI, canActivate: [AuthGuard], data: { title: 'Property' }  },
	{ path: 'PropertyOption', redirectTo: 'PropertyOption/0' },
	{ path: 'PropertyOption/:id', component: PropertyOptionIndexUI, canActivate: [AuthGuard], data: { title: 'PropertyOption' }  },
	{ path: 'Role', redirectTo: 'Role/0' },
	{ path: 'Role/:id', component: RoleIndexUI, canActivate: [AuthGuard], data: { title: 'Role' }  },
	{ path: 'RoleMember', redirectTo: 'RoleMember/0' },
	{ path: 'RoleMember/:id', component: RoleMemberIndexUI, canActivate: [AuthGuard], data: { title: 'RoleMember' }  },
	{ path: 'RoleMenuItem', redirectTo: 'RoleMenuItem/0' },
	{ path: 'RoleMenuItem/:id', component: RoleMenuItemIndexUI, canActivate: [AuthGuard], data: { title: 'RoleMenuItem' }  },
	{ path: 'RolePermission', redirectTo: 'RolePermission/0' },
	{ path: 'RolePermission/:id', component: RolePermissionIndexUI, canActivate: [AuthGuard], data: { title: 'RolePermission' }  },
	{ path: 'SubSystem', redirectTo: 'SubSystem/0' },
	{ path: 'SubSystem/:id', component: SubSystemIndexUI, canActivate: [AuthGuard], data: { title: 'SubSystem' }  },
	{ path: 'UserAccount', redirectTo: 'UserAccount/0' },
	{ path: 'UserAccount/:id', component: UserAccountIndexUI, canActivate: [AuthGuard], data: { title: 'UserAccount' }  },
	
];

@NgModule({
  imports: [
    RouterModule.forChild(core_routes)
  ],
  exports: [RouterModule]
})

export class Core_RouteModule{}

//   ****    should be add into app.routing.ts
//  { path: 'Core', loadChildren: () => import('./Entities/Core/core.module').then(x => x.Core_Module) }