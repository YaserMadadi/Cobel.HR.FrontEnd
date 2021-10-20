import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { BadgeType } from './badgeType';
import { BadgeTypeServiceCollection } from './badgeType.service.collection';

import { Badge } from '../Badge/badge';


@Injectable({ providedIn: 'root' })
export class BadgeTypeService extends Service<BadgeType> implements IService<BadgeType> {

  constructor(public ServiceCollection: BadgeTypeServiceCollection) {
    super(ServiceCollection.API_Operation, BadgeType.Info);
  }

  CreateInstance() {
   return new BadgeType();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<BadgeType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<BadgeType[]> {
    return super.RetrieveAll();
  }

  Save(badgeType: BadgeType): Promise<BadgeType> {
    if (!BadgeType.Validate(badgeType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(badgeType);
    }
    return super.Save(badgeType);
  }

  SaveAttached(badgeType: BadgeType): Promise<BadgeType> {
    if (!BadgeType.Validate(badgeType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(badgeType);
    }
    return super.SaveAttached(badgeType);
  }

  SaveCollection(badgeTypeList: BadgeType[]): Promise<Result> {
    return super.SaveCollection(badgeTypeList);
  }

  Delete(badgeType: BadgeType): Promise<boolean> {
    return super.Delete(badgeType);
  }

  Seek(badgeType: BadgeType = BadgeType.SeekInstance()): Promise<BadgeType[]> {
    return super.Seek(badgeType);
  }

  SeekLast(badgeType: BadgeType): Promise<BadgeType> {
    return super.SeekLast(badgeType);
  }

  SeekByValue(value: string = ''): Promise<BadgeType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
