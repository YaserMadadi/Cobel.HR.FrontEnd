import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { MenuItemType } from './menuItemType';

import { MenuItem } from '../MenuItem/menuItem';


@Injectable({ providedIn: 'root' })
export class MenuItemTypeServiceCollection extends ServiceCollection<MenuItemType> {

  constructor(public API_Operation: API_Operation<MenuItemType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfMenuItem(menuItemType: MenuItemType, menuItem: MenuItem = MenuItem.SeekInstance()): Promise<MenuItem[]> {
    return super.CollectionOf<MenuItem>(menuItemType, menuItem);
  }

	//endregion
}
