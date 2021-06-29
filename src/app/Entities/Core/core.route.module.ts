import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../xcore/security/auth_guard';

import { LogIndexUI } from './Log/index/log.index';
import { ImpersonateIndexUI } from './Impersonate/index/impersonate.index';
import { PropertyOptionIndexUI } from './PropertyOption/index/propertyOption.index';
import { RoleIndexUI } from './Role/index/role.index';
import { RoleMemberIndexUI } from './RoleMember/index/roleMember.index';
import { EntityIndexUI } from './Entity/index/entity.index';
import { PropertyIndexUI } from './Property/index/property.index';
import { RolePermissionIndexUI } from './RolePermission/index/rolePermission.index';
import { UserAccountIndexUI } from './UserAccount/index/userAccount.index';

const core_routes : Routes = [
  { path: 'Entity', redirectTo: 'Entity/0' },
	{ path: 'Entity/:id', component: EntityIndexUI, canActivate: [AuthGuard], data: { title: 'Entity' }  },
	{ path: 'Impersonate', redirectTo: 'Impersonate/0' },
	{ path: 'Impersonate/:id', component: ImpersonateIndexUI, canActivate: [AuthGuard], data: { title: 'Impersonate' }  },
	{ path: 'Log', redirectTo: 'Log/0' },
	{ path: 'Log/:id', component: LogIndexUI, canActivate: [AuthGuard], data: { title: 'Log' }  },
	{ path: 'Property', redirectTo: 'Property/0' },
	{ path: 'Property/:id', component: PropertyIndexUI, canActivate: [AuthGuard], data: { title: 'Property' }  },
	{ path: 'PropertyOption', redirectTo: 'PropertyOption/0' },
	{ path: 'PropertyOption/:id', component: PropertyOptionIndexUI, canActivate: [AuthGuard], data: { title: 'PropertyOption' }  },
	{ path: 'Role', redirectTo: 'Role/0' },
	{ path: 'Role/:id', component: RoleIndexUI, canActivate: [AuthGuard], data: { title: 'Role' }  },
	{ path: 'RoleMember', redirectTo: 'RoleMember/0' },
	{ path: 'RoleMember/:id', component: RoleMemberIndexUI, canActivate: [AuthGuard], data: { title: 'RoleMember' }  },
	{ path: 'RolePermission', redirectTo: 'RolePermission/0' },
	{ path: 'RolePermission/:id', component: RolePermissionIndexUI, canActivate: [AuthGuard], data: { title: 'RolePermission' }  },
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