import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { AbilityLevel } from './abilityLevel';

import { LanguageAbility } from '../LanguageAbility/languageAbility';


@Injectable({ providedIn: 'root' })
export class AbilityLevelServiceCollection extends ServiceCollection<AbilityLevel> {

  constructor(public API_Operation: API_Operation<AbilityLevel>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfLanguageAbility_ListeningLevel(listeningLevel: AbilityLevel, languageAbility: LanguageAbility = LanguageAbility.SeekInstance()): Promise<LanguageAbility[]> {
    return super.CollectionOf<LanguageAbility>(listeningLevel, languageAbility, 'ListeningLevel');
  }

  CollectionOfLanguageAbility_ReadingLevel(readingLevel: AbilityLevel, languageAbility: LanguageAbility = LanguageAbility.SeekInstance()): Promise<LanguageAbility[]> {
    return super.CollectionOf<LanguageAbility>(readingLevel, languageAbility, 'ReadingLevel');
  }

  CollectionOfLanguageAbility_SpeackingLevel(speackingLevel: AbilityLevel, languageAbility: LanguageAbility = LanguageAbility.SeekInstance()): Promise<LanguageAbility[]> {
    return super.CollectionOf<LanguageAbility>(speackingLevel, languageAbility, 'SpeackingLevel');
  }

  CollectionOfLanguageAbility_WritingLevel(writingLevel: AbilityLevel, languageAbility: LanguageAbility = LanguageAbility.SeekInstance()): Promise<LanguageAbility[]> {
    return super.CollectionOf<LanguageAbility>(writingLevel, languageAbility, 'WritingLevel');
  }

	//endregion
}