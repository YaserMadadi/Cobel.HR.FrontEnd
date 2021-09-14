import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Menu } from './menu';

import { MenuItem } from '../MenuItem/menuItem';


@Injectable({ providedIn: 'root' })
export class MenuServiceCollection extends ServiceCollection<Menu> {

  constructor(public API_Operation: API_Operation<Menu>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfMenuItem(menu: Menu, menuItem: MenuItem = MenuItem.SeekInstance()): Promise<MenuItem[]> {
    return super.CollectionOf<MenuItem>(menu, menuItem);
  }

	//endregion
}
