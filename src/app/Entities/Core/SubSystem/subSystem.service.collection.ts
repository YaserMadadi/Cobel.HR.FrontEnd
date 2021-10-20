import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { SubSystem } from './subSystem';

import { Menu } from '../Menu/menu';


@Injectable({ providedIn: 'root' })
export class SubSystemServiceCollection extends ServiceCollection<SubSystem> {

  constructor(public API_Operation: API_Operation<SubSystem>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfMenu(subSystem: SubSystem, menu: Menu = Menu.SeekInstance()): Promise<Menu[]> {
    return super.CollectionOf<Menu>(subSystem, menu);
  }

	//endregion
}
