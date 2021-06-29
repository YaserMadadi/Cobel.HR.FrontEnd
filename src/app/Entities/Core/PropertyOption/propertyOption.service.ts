import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { PropertyOption } from './propertyOption';
import { PropertyOptionServiceCollection } from './propertyOption.service.collection';

import { PropertyService } from '../Property/property.service';


@Injectable({ providedIn: 'root' })
export class PropertyOptionService extends Service<PropertyOption> implements IService<PropertyOption> {

  constructor(public ServiceCollection: PropertyOptionServiceCollection,
		public PropertyService: PropertyService) {
    super(ServiceCollection.API_Operation, PropertyOption.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<PropertyOption> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<PropertyOption[]> {
    return super.RetrieveAll();
  }

  Save(propertyOption: PropertyOption): Promise<PropertyOption> {
    if (!PropertyOption.Validate(propertyOption)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(propertyOption);
    }
    return super.Save(propertyOption);
  }

  SaveAttached(propertyOption: PropertyOption): Promise<PropertyOption> {
    if (!PropertyOption.Validate(propertyOption)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(propertyOption);
    }
    return super.SaveAttached(propertyOption);
  }

  SaveCollection(propertyOptionList: PropertyOption[]): Promise<Result> {
    return super.SaveCollection(propertyOptionList);
  }

  Delete(propertyOption: PropertyOption): Promise<boolean> {
    return super.Delete(propertyOption);
  }

  Seek(propertyOption: PropertyOption = PropertyOption.SeekInstance()): Promise<PropertyOption[]> {
    return super.Seek(propertyOption);
  }

  SeekLast(propertyOption: PropertyOption): Promise<PropertyOption> {
    return super.SeekLast(propertyOption);
  }

  SeekByValue(value: string = ''): Promise<PropertyOption[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}