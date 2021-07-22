import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Synonym } from './synonym';
import { SynonymServiceCollection } from './synonym.service.collection';



@Injectable({ providedIn: 'root' })
export class SynonymService extends Service<Synonym> implements IService<Synonym> {

  constructor(public ServiceCollection: SynonymServiceCollection) {
    super(ServiceCollection.API_Operation, Synonym.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Synonym();
}

  RetrieveById(id: number): Promise<Synonym> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Synonym[]> {
    return super.RetrieveAll();
  }

  Save(synonym: Synonym): Promise<Synonym> {
    if (!Synonym.Validate(synonym)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(synonym);
    }
    return super.Save(synonym);
  }

  SaveAttached(synonym: Synonym): Promise<Synonym> {
    if (!Synonym.Validate(synonym)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(synonym);
    }
    return super.SaveAttached(synonym);
  }

  SaveCollection(synonymList: Synonym[]): Promise<Result> {
    return super.SaveCollection(synonymList);
  }

  Delete(synonym: Synonym): Promise<boolean> {
    return super.Delete(synonym);
  }

  Seek(synonym: Synonym = Synonym.SeekInstance()): Promise<Synonym[]> {
    return super.Seek(synonym);
  }

  SeekLast(synonym: Synonym): Promise<Synonym> {
    return super.SeekLast(synonym);
  }

  SeekByValue(value: string = ''): Promise<Synonym[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}