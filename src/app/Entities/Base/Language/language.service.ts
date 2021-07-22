import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Language } from './language';
import { LanguageServiceCollection } from './language.service.collection';

import { LanguageAbility } from '../../HR/LanguageAbility/languageAbility';


@Injectable({ providedIn: 'root' })
export class LanguageService extends Service<Language> implements IService<Language> {

  constructor(public ServiceCollection: LanguageServiceCollection) {
    super(ServiceCollection.API_Operation, Language.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Language();
}

  RetrieveById(id: number): Promise<Language> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Language[]> {
    return super.RetrieveAll();
  }

  Save(language: Language): Promise<Language> {
    if (!Language.Validate(language)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(language);
    }
    return super.Save(language);
  }

  SaveAttached(language: Language): Promise<Language> {
    if (!Language.Validate(language)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(language);
    }
    return super.SaveAttached(language);
  }

  SaveCollection(languageList: Language[]): Promise<Result> {
    return super.SaveCollection(languageList);
  }

  Delete(language: Language): Promise<boolean> {
    return super.Delete(language);
  }

  Seek(language: Language = Language.SeekInstance()): Promise<Language[]> {
    return super.Seek(language);
  }

  SeekLast(language: Language): Promise<Language> {
    return super.SeekLast(language);
  }

  SeekByValue(value: string = ''): Promise<Language[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}