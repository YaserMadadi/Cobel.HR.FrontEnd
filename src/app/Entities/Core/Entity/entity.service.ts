import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Entity } from './entity';
import { EntityServiceCollection } from './entity.service.collection';

import { RolePermission } from '../RolePermission/rolePermission';
import { Property } from '../Property/property';


@Injectable({ providedIn: 'root' })
export class EntityService extends Service<Entity> implements IService<Entity> {

  constructor(public ServiceCollection: EntityServiceCollection) {
    super(ServiceCollection.API_Operation, Entity.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Entity> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Entity[]> {
    return super.RetrieveAll();
  }

  Save(entity: Entity): Promise<Entity> {
    if (!Entity.Validate(entity)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(entity);
    }
    return super.Save(entity);
  }

  SaveAttached(entity: Entity): Promise<Entity> {
    if (!Entity.Validate(entity)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(entity);
    }
    return super.SaveAttached(entity);
  }

  SaveCollection(entityList: Entity[]): Promise<Result> {
    return super.SaveCollection(entityList);
  }

  Delete(entity: Entity): Promise<boolean> {
    return super.Delete(entity);
  }

  Seek(entity: Entity = Entity.SeekInstance()): Promise<Entity[]> {
    return super.Seek(entity);
  }

  SeekLast(entity: Entity): Promise<Entity> {
    return super.SeekLast(entity);
  }

  SeekByValue(value: string = ''): Promise<Entity[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}