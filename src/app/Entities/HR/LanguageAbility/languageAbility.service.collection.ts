import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { LanguageAbility } from './languageAbility';



@Injectable({ providedIn: 'root' })
export class LanguageAbilityServiceCollection extends ServiceCollection<LanguageAbility> {

  constructor(public API_Operation: API_Operation<LanguageAbility>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}