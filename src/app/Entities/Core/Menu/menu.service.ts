import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Menu } from './menu';
import { MenuServiceCollection } from './menu.service.collection';

import { SubSystemService } from '../SubSystem/subSystem.service';
import { MenuItem } from '../MenuItem/menuItem';


@Injectable({ providedIn: 'root' })
export class MenuService extends Service<Menu> implements IService<Menu> {

  constructor(public ServiceCollection: MenuServiceCollection,
		public SubSystemService: SubSystemService) {
    super(ServiceCollection.API_Operation, Menu.Info);
  }

  CreateInstance() {
   return new Menu();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Menu> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Menu[]> {
    return super.RetrieveAll();
  }

  Save(menu: Menu): Promise<Menu> {
    if (!Menu.Validate(menu)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(menu);
    }
    return super.Save(menu);
  }

  SaveAttached(menu: Menu): Promise<Menu> {
    if (!Menu.Validate(menu)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(menu);
    }
    return super.SaveAttached(menu);
  }

  SaveCollection(menuList: Menu[]): Promise<Result> {
    return super.SaveCollection(menuList);
  }

  Delete(menu: Menu): Promise<boolean> {
    return super.Delete(menu);
  }

  Seek(menu: Menu = Menu.SeekInstance()): Promise<Menu[]> {
    return super.Seek(menu);
  }

  SeekLast(menu: Menu): Promise<Menu> {
    return super.SeekLast(menu);
  }

  SeekByValue(value: string = ''): Promise<Menu[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
