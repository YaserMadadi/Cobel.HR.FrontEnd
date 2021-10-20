import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { MenuItemType } from './menuItemType';
import { MenuItemTypeServiceCollection } from './menuItemType.service.collection';

import { MenuItem } from '../MenuItem/menuItem';


@Injectable({ providedIn: 'root' })
export class MenuItemTypeService extends Service<MenuItemType> implements IService<MenuItemType> {

  constructor(public ServiceCollection: MenuItemTypeServiceCollection) {
    super(ServiceCollection.API_Operation, MenuItemType.Info);
  }

  CreateInstance() {
   return new MenuItemType();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<MenuItemType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<MenuItemType[]> {
    return super.RetrieveAll();
  }

  Save(menuItemType: MenuItemType): Promise<MenuItemType> {
    if (!MenuItemType.Validate(menuItemType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(menuItemType);
    }
    return super.Save(menuItemType);
  }

  SaveAttached(menuItemType: MenuItemType): Promise<MenuItemType> {
    if (!MenuItemType.Validate(menuItemType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(menuItemType);
    }
    return super.SaveAttached(menuItemType);
  }

  SaveCollection(menuItemTypeList: MenuItemType[]): Promise<Result> {
    return super.SaveCollection(menuItemTypeList);
  }

  Delete(menuItemType: MenuItemType): Promise<boolean> {
    return super.Delete(menuItemType);
  }

  Seek(menuItemType: MenuItemType = MenuItemType.SeekInstance()): Promise<MenuItemType[]> {
    return super.Seek(menuItemType);
  }

  SeekLast(menuItemType: MenuItemType): Promise<MenuItemType> {
    return super.SeekLast(menuItemType);
  }

  SeekByValue(value: string = ''): Promise<MenuItemType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
