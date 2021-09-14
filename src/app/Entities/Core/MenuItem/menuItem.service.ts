import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { MenuItem } from './menuItem';
import { MenuItemServiceCollection } from './menuItem.service.collection';

import { MenuService } from '../Menu/menu.service';
import { MenuItemTypeService } from '../MenuItemType/menuItemType.service';
import { RoleMenuItem } from '../RoleMenuItem/roleMenuItem';
import { Badge } from '../Badge/badge';


@Injectable({ providedIn: 'root' })
export class MenuItemService extends Service<MenuItem> implements IService<MenuItem> {

  constructor(public ServiceCollection: MenuItemServiceCollection,
		public MenuService: MenuService,
		public MenuItemTypeService: MenuItemTypeService) {
    super(ServiceCollection.API_Operation, MenuItem.Info);
  }

  CreateInstance() {
   return new MenuItem();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<MenuItem> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<MenuItem[]> {
    return super.RetrieveAll();
  }

  Save(menuItem: MenuItem): Promise<MenuItem> {
    if (!MenuItem.Validate(menuItem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(menuItem);
    }
    return super.Save(menuItem);
  }

  SaveAttached(menuItem: MenuItem): Promise<MenuItem> {
    if (!MenuItem.Validate(menuItem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(menuItem);
    }
    return super.SaveAttached(menuItem);
  }

  SaveCollection(menuItemList: MenuItem[]): Promise<Result> {
    return super.SaveCollection(menuItemList);
  }

  Delete(menuItem: MenuItem): Promise<boolean> {
    return super.Delete(menuItem);
  }

  Seek(menuItem: MenuItem = MenuItem.SeekInstance()): Promise<MenuItem[]> {
    return super.Seek(menuItem);
  }

  SeekLast(menuItem: MenuItem): Promise<MenuItem> {
    return super.SeekLast(menuItem);
  }

  SeekByValue(value: string = ''): Promise<MenuItem[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
