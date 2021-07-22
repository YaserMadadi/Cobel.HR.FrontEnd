import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Role } from './role';
import { RoleServiceCollection } from './role.service.collection';

import { RolePermission } from '../RolePermission/rolePermission';
import { RoleMember } from '../RoleMember/roleMember';


@Injectable({ providedIn: 'root' })
export class RoleService extends Service<Role> implements IService<Role> {

  constructor(public ServiceCollection: RoleServiceCollection) {
    super(ServiceCollection.API_Operation, Role.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Role();
}

  RetrieveById(id: number): Promise<Role> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Role[]> {
    return super.RetrieveAll();
  }

  Save(role: Role): Promise<Role> {
    if (!Role.Validate(role)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(role);
    }
    return super.Save(role);
  }

  SaveAttached(role: Role): Promise<Role> {
    if (!Role.Validate(role)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(role);
    }
    return super.SaveAttached(role);
  }

  SaveCollection(roleList: Role[]): Promise<Result> {
    return super.SaveCollection(roleList);
  }

  Delete(role: Role): Promise<boolean> {
    return super.Delete(role);
  }

  Seek(role: Role = Role.SeekInstance()): Promise<Role[]> {
    return super.Seek(role);
  }

  SeekLast(role: Role): Promise<Role> {
    return super.SeekLast(role);
  }

  SeekByValue(value: string = ''): Promise<Role[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}