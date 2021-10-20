import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { MenuItem } from './menuItem';

import { RoleMenuItem } from '../RoleMenuItem/roleMenuItem';
import { Badge } from '../Badge/badge';


@Injectable({ providedIn: 'root' })
export class MenuItemServiceCollection extends ServiceCollection<MenuItem> {

  constructor(public API_Operation: API_Operation<MenuItem>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfBadge(menuItem: MenuItem, badge: Badge = Badge.SeekInstance()): Promise<Badge[]> {
    return super.CollectionOf<Badge>(menuItem, badge);
  }

  CollectionOfRoleMenuItem(menuItem: MenuItem, roleMenuItem: RoleMenuItem = RoleMenuItem.SeekInstance()): Promise<RoleMenuItem[]> {
    return super.CollectionOf<RoleMenuItem>(menuItem, roleMenuItem);
  }

	//endregion
}
