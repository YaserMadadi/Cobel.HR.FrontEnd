import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Relative } from './relative';
import { RelativeServiceCollection } from './relative.service.collection';

import { PersonService } from '../Person/person.service';
import { RelativeTypeService } from '../../Base.HR/RelativeType/relativeType.service';


@Injectable({ providedIn: 'root' })
export class RelativeService extends Service<Relative> implements IService<Relative> {

  constructor(public ServiceCollection: RelativeServiceCollection,
		public PersonService: PersonService,
		public RelativeTypeService: RelativeTypeService) {
    super(ServiceCollection.API_Operation, Relative.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Relative> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Relative[]> {
    return super.RetrieveAll();
  }

  Save(relative: Relative): Promise<Relative> {
    if (!Relative.Validate(relative)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(relative);
    }
    return super.Save(relative);
  }

  SaveAttached(relative: Relative): Promise<Relative> {
    if (!Relative.Validate(relative)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(relative);
    }
    return super.SaveAttached(relative);
  }

  SaveCollection(relativeList: Relative[]): Promise<Result> {
    return super.SaveCollection(relativeList);
  }

  Delete(relative: Relative): Promise<boolean> {
    return super.Delete(relative);
  }

  Seek(relative: Relative = Relative.SeekInstance()): Promise<Relative[]> {
    return super.Seek(relative);
  }

  SeekLast(relative: Relative): Promise<Relative> {
    return super.SeekLast(relative);
  }

  SeekByValue(value: string = ''): Promise<Relative[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}