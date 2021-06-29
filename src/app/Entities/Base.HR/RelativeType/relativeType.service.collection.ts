import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { RelativeType } from './relativeType';

import { Relative } from '../../HR/Relative/relative';


@Injectable({ providedIn: 'root' })
export class RelativeTypeServiceCollection extends ServiceCollection<RelativeType> {

  constructor(public API_Operation: API_Operation<RelativeType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfRelative_RelationType(relationType: RelativeType, relative: Relative = Relative.SeekInstance()): Promise<Relative[]> {
    return super.CollectionOf<Relative>(relationType, relative, 'RelationType');
  }

	//endregion
}