import { NgModule } from '@angular/core';

import { Entity_ModuleFunc } from './Entity/entity.module.func';
import { Impersonate_ModuleFunc } from './Impersonate/impersonate.module.func';
import { Log_ModuleFunc } from './Log/log.module.func';
import { Property_ModuleFunc } from './Property/property.module.func';
import { PropertyOption_ModuleFunc } from './PropertyOption/propertyOption.module.func';
import { Role_ModuleFunc } from './Role/role.module.func';
import { RoleMember_ModuleFunc } from './RoleMember/roleMember.module.func';
import { RolePermission_ModuleFunc } from './RolePermission/rolePermission.module.func';
import { UserAccount_ModuleFunc } from './UserAccount/userAccount.module.func';


@NgModule({
  declarations: [],
  imports: [
    Entity_ModuleFunc,
		Impersonate_ModuleFunc,
		Log_ModuleFunc,
		Property_ModuleFunc,
		PropertyOption_ModuleFunc,
		Role_ModuleFunc,
		RoleMember_ModuleFunc,
		RolePermission_ModuleFunc,
		UserAccount_ModuleFunc,
		
  ],
  exports: [
    Entity_ModuleFunc,
		Impersonate_ModuleFunc,
		Log_ModuleFunc,
		Property_ModuleFunc,
		PropertyOption_ModuleFunc,
		Role_ModuleFunc,
		RoleMember_ModuleFunc,
		RolePermission_ModuleFunc,
		UserAccount_ModuleFunc,
		
  ]
})
export class Core_ModuleFunc { }