import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { AbilityLevel } from './abilityLevel';
import { AbilityLevelServiceCollection } from './abilityLevel.service.collection';

import { LanguageAbility } from '../LanguageAbility/languageAbility';


@Injectable({ providedIn: 'root' })
export class AbilityLevelService extends Service<AbilityLevel> implements IService<AbilityLevel> {

  constructor(public ServiceCollection: AbilityLevelServiceCollection) {
    super(ServiceCollection.API_Operation, AbilityLevel.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new AbilityLevel();
}

  RetrieveById(id: number): Promise<AbilityLevel> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<AbilityLevel[]> {
    return super.RetrieveAll();
  }

  Save(abilityLevel: AbilityLevel): Promise<AbilityLevel> {
    if (!AbilityLevel.Validate(abilityLevel)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(abilityLevel);
    }
    return super.Save(abilityLevel);
  }

  SaveAttached(abilityLevel: AbilityLevel): Promise<AbilityLevel> {
    if (!AbilityLevel.Validate(abilityLevel)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(abilityLevel);
    }
    return super.SaveAttached(abilityLevel);
  }

  SaveCollection(abilityLevelList: AbilityLevel[]): Promise<Result> {
    return super.SaveCollection(abilityLevelList);
  }

  Delete(abilityLevel: AbilityLevel): Promise<boolean> {
    return super.Delete(abilityLevel);
  }

  Seek(abilityLevel: AbilityLevel = AbilityLevel.SeekInstance()): Promise<AbilityLevel[]> {
    return super.Seek(abilityLevel);
  }

  SeekLast(abilityLevel: AbilityLevel): Promise<AbilityLevel> {
    return super.SeekLast(abilityLevel);
  }

  SeekByValue(value: string = ''): Promise<AbilityLevel[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}