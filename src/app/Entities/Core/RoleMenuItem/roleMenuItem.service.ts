import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { RoleMenuItem } from './roleMenuItem';
import { RoleMenuItemServiceCollection } from './roleMenuItem.service.collection';

import { RoleService } from '../Role/role.service';
import { MenuItemService } from '../MenuItem/menuItem.service';


@Injectable({ providedIn: 'root' })
export class RoleMenuItemService extends Service<RoleMenuItem> implements IService<RoleMenuItem> {

  constructor(public ServiceCollection: RoleMenuItemServiceCollection,
		public RoleService: RoleService,
		public MenuItemService: MenuItemService) {
    super(ServiceCollection.API_Operation, RoleMenuItem.Info);
  }

  CreateInstance() {
   return new RoleMenuItem();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<RoleMenuItem> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<RoleMenuItem[]> {
    return super.RetrieveAll();
  }

  Save(roleMenuItem: RoleMenuItem): Promise<RoleMenuItem> {
    if (!RoleMenuItem.Validate(roleMenuItem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(roleMenuItem);
    }
    return super.Save(roleMenuItem);
  }

  SaveAttached(roleMenuItem: RoleMenuItem): Promise<RoleMenuItem> {
    if (!RoleMenuItem.Validate(roleMenuItem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(roleMenuItem);
    }
    return super.SaveAttached(roleMenuItem);
  }

  SaveCollection(roleMenuItemList: RoleMenuItem[]): Promise<Result> {
    return super.SaveCollection(roleMenuItemList);
  }

  Delete(roleMenuItem: RoleMenuItem): Promise<boolean> {
    return super.Delete(roleMenuItem);
  }

  Seek(roleMenuItem: RoleMenuItem = RoleMenuItem.SeekInstance()): Promise<RoleMenuItem[]> {
    return super.Seek(roleMenuItem);
  }

  SeekLast(roleMenuItem: RoleMenuItem): Promise<RoleMenuItem> {
    return super.SeekLast(roleMenuItem);
  }

  SeekByValue(value: string = ''): Promise<RoleMenuItem[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
