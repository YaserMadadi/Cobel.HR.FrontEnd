import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { UserAccount } from './userAccount';
import { UserAccountServiceCollection } from './userAccount.service.collection';

import { PersonService } from '../../HR/Person/person.service';


@Injectable({ providedIn: 'root' })
export class UserAccountService extends Service<UserAccount> implements IService<UserAccount> {

  constructor(public ServiceCollection: UserAccountServiceCollection,
		public PersonService: PersonService) {
    super(ServiceCollection.API_Operation, UserAccount.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new UserAccount();
}

  RetrieveById(id: number): Promise<UserAccount> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<UserAccount[]> {
    return super.RetrieveAll();
  }

  Save(userAccount: UserAccount): Promise<UserAccount> {
    if (!UserAccount.Validate(userAccount)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(userAccount);
    }
    return super.Save(userAccount);
  }

  SaveAttached(userAccount: UserAccount): Promise<UserAccount> {
    if (!UserAccount.Validate(userAccount)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(userAccount);
    }
    return super.SaveAttached(userAccount);
  }

  SaveCollection(userAccountList: UserAccount[]): Promise<Result> {
    return super.SaveCollection(userAccountList);
  }

  Delete(userAccount: UserAccount): Promise<boolean> {
    return super.Delete(userAccount);
  }

  Seek(userAccount: UserAccount = UserAccount.SeekInstance()): Promise<UserAccount[]> {
    return super.Seek(userAccount);
  }

  SeekLast(userAccount: UserAccount): Promise<UserAccount> {
    return super.SeekLast(userAccount);
  }

  SeekByValue(value: string = ''): Promise<UserAccount[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}