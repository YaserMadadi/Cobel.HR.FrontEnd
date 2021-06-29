import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Entity } from './entity';

import { RolePermission } from '../RolePermission/rolePermission';
import { Property } from '../Property/property';


@Injectable({ providedIn: 'root' })
export class EntityServiceCollection extends ServiceCollection<Entity> {

  constructor(public API_Operation: API_Operation<Entity>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfProperty(entity: Entity, property: Property = Property.SeekInstance()): Promise<Property[]> {
    return super.CollectionOf<Property>(entity, property);
  }

  CollectionOfRolePermission(entity: Entity, rolePermission: RolePermission = RolePermission.SeekInstance()): Promise<RolePermission[]> {
    return super.CollectionOf<RolePermission>(entity, rolePermission);
  }

	//endregion
}