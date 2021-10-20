import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { BadgeType } from './badgeType';

import { Badge } from '../Badge/badge';


@Injectable({ providedIn: 'root' })
export class BadgeTypeServiceCollection extends ServiceCollection<BadgeType> {

  constructor(public API_Operation: API_Operation<BadgeType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfBadge(badgeType: BadgeType, badge: Badge = Badge.SeekInstance()): Promise<Badge[]> {
    return super.CollectionOf<Badge>(badgeType, badge);
  }

	//endregion
}
