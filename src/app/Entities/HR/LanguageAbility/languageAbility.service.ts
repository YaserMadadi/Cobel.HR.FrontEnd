import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { LanguageAbility } from './languageAbility';
import { LanguageAbilityServiceCollection } from './languageAbility.service.collection';

import { PersonService } from '../Person/person.service';
import { LanguageService } from '../../Base/Language/language.service';
import { AbilityLevelService } from '../AbilityLevel/abilityLevel.service';


@Injectable({ providedIn: 'root' })
export class LanguageAbilityService extends Service<LanguageAbility> implements IService<LanguageAbility> {

  constructor(public ServiceCollection: LanguageAbilityServiceCollection,
		public PersonService: PersonService,
		public LanguageService: LanguageService,
		public AbilityLevelService: AbilityLevelService) {
    super(ServiceCollection.API_Operation, LanguageAbility.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new LanguageAbility();
}

  RetrieveById(id: number): Promise<LanguageAbility> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<LanguageAbility[]> {
    return super.RetrieveAll();
  }

  Save(languageAbility: LanguageAbility): Promise<LanguageAbility> {
    if (!LanguageAbility.Validate(languageAbility)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(languageAbility);
    }
    return super.Save(languageAbility);
  }

  SaveAttached(languageAbility: LanguageAbility): Promise<LanguageAbility> {
    if (!LanguageAbility.Validate(languageAbility)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(languageAbility);
    }
    return super.SaveAttached(languageAbility);
  }

  SaveCollection(languageAbilityList: LanguageAbility[]): Promise<Result> {
    return super.SaveCollection(languageAbilityList);
  }

  Delete(languageAbility: LanguageAbility): Promise<boolean> {
    return super.Delete(languageAbility);
  }

  Seek(languageAbility: LanguageAbility = LanguageAbility.SeekInstance()): Promise<LanguageAbility[]> {
    return super.Seek(languageAbility);
  }

  SeekLast(languageAbility: LanguageAbility): Promise<LanguageAbility> {
    return super.SeekLast(languageAbility);
  }

  SeekByValue(value: string = ''): Promise<LanguageAbility[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}