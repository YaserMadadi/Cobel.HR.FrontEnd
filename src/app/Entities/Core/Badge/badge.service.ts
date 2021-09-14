import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Badge } from './badge';
import { BadgeServiceCollection } from './badge.service.collection';

import { MenuItemService } from '../MenuItem/menuItem.service';
import { BadgeTypeService } from '../BadgeType/badgeType.service';


@Injectable({ providedIn: 'root' })
export class BadgeService extends Service<Badge> implements IService<Badge> {

  constructor(public ServiceCollection: BadgeServiceCollection,
		public MenuItemService: MenuItemService,
		public BadgeTypeService: BadgeTypeService) {
    super(ServiceCollection.API_Operation, Badge.Info);
  }

  CreateInstance() {
   return new Badge();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Badge> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Badge[]> {
    return super.RetrieveAll();
  }

  Save(badge: Badge): Promise<Badge> {
    if (!Badge.Validate(badge)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(badge);
    }
    return super.Save(badge);
  }

  SaveAttached(badge: Badge): Promise<Badge> {
    if (!Badge.Validate(badge)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(badge);
    }
    return super.SaveAttached(badge);
  }

  SaveCollection(badgeList: Badge[]): Promise<Result> {
    return super.SaveCollection(badgeList);
  }

  Delete(badge: Badge): Promise<boolean> {
    return super.Delete(badge);
  }

  Seek(badge: Badge = Badge.SeekInstance()): Promise<Badge[]> {
    return super.Seek(badge);
  }

  SeekLast(badge: Badge): Promise<Badge> {
    return super.SeekLast(badge);
  }

  SeekByValue(value: string = ''): Promise<Badge[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
