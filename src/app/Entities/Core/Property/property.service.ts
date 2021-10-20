import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Property } from './property';
import { PropertyServiceCollection } from './property.service.collection';

import { EntityService } from '../Entity/entity.service';
import { PropertyOption } from '../PropertyOption/propertyOption';


@Injectable({ providedIn: 'root' })
export class PropertyService extends Service<Property> implements IService<Property> {

  constructor(public ServiceCollection: PropertyServiceCollection,
		public EntityService: EntityService) {
    super(ServiceCollection.API_Operation, Property.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Property();
}

  RetrieveById(id: number): Promise<Property> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Property[]> {
    return super.RetrieveAll();
  }

  Save(property: Property): Promise<Property> {
    if (!Property.Validate(property)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(property);
    }
    return super.Save(property);
  }

  SaveAttached(property: Property): Promise<Property> {
    if (!Property.Validate(property)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(property);
    }
    return super.SaveAttached(property);
  }

  SaveCollection(propertyList: Property[]): Promise<Result> {
    return super.SaveCollection(propertyList);
  }

  Delete(property: Property): Promise<boolean> {
    return super.Delete(property);
  }

  Seek(property: Property = Property.SeekInstance()): Promise<Property[]> {
    return super.Seek(property);
  }

  SeekLast(property: Property): Promise<Property> {
    return super.SeekLast(property);
  }

  SeekByValue(value: string = ''): Promise<Property[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}