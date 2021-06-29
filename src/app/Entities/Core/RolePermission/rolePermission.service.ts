import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { RolePermission } from './rolePermission';
import { RolePermissionServiceCollection } from './rolePermission.service.collection';

import { RoleService } from '../Role/role.service';
import { EntityService } from '../Entity/entity.service';


@Injectable({ providedIn: 'root' })
export class RolePermissionService extends Service<RolePermission> implements IService<RolePermission> {

  constructor(public ServiceCollection: RolePermissionServiceCollection,
		public RoleService: RoleService,
		public EntityService: EntityService) {
    super(ServiceCollection.API_Operation, RolePermission.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<RolePermission> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<RolePermission[]> {
    return super.RetrieveAll();
  }

  Save(rolePermission: RolePermission): Promise<RolePermission> {
    if (!RolePermission.Validate(rolePermission)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(rolePermission);
    }
    return super.Save(rolePermission);
  }

  SaveAttached(rolePermission: RolePermission): Promise<RolePermission> {
    if (!RolePermission.Validate(rolePermission)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(rolePermission);
    }
    return super.SaveAttached(rolePermission);
  }

  SaveCollection(rolePermissionList: RolePermission[]): Promise<Result> {
    return super.SaveCollection(rolePermissionList);
  }

  Delete(rolePermission: RolePermission): Promise<boolean> {
    return super.Delete(rolePermission);
  }

  Seek(rolePermission: RolePermission = RolePermission.SeekInstance()): Promise<RolePermission[]> {
    return super.Seek(rolePermission);
  }

  SeekLast(rolePermission: RolePermission): Promise<RolePermission> {
    return super.SeekLast(rolePermission);
  }

  SeekByValue(value: string = ''): Promise<RolePermission[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}