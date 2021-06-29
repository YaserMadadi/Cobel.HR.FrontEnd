import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Role } from './role';

import { RolePermission } from '../RolePermission/rolePermission';
import { RoleMember } from '../RoleMember/roleMember';


@Injectable({ providedIn: 'root' })
export class RoleServiceCollection extends ServiceCollection<Role> {

  constructor(public API_Operation: API_Operation<Role>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfRoleMember(role: Role, roleMember: RoleMember = RoleMember.SeekInstance()): Promise<RoleMember[]> {
    return super.CollectionOf<RoleMember>(role, roleMember);
  }

  CollectionOfRolePermission(role: Role, rolePermission: RolePermission = RolePermission.SeekInstance()): Promise<RolePermission[]> {
    return super.CollectionOf<RolePermission>(role, rolePermission);
  }

	//endregion
}