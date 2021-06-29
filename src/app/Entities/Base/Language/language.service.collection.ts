import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Language } from './language';

import { LanguageAbility } from '../../HR/LanguageAbility/languageAbility';


@Injectable({ providedIn: 'root' })
export class LanguageServiceCollection extends ServiceCollection<Language> {

  constructor(public API_Operation: API_Operation<Language>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfLanguageAbility(language: Language, languageAbility: LanguageAbility = LanguageAbility.SeekInstance()): Promise<LanguageAbility[]> {
    return super.CollectionOf<LanguageAbility>(language, languageAbility);
  }

	//endregion
}