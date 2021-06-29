import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { PersonConnection } from './personConnection';
import { PersonConnectionServiceCollection } from './personConnection.service.collection';

import { PersonService } from '../Person/person.service';
import { ConnectionTypeService } from '../../Base/ConnectionType/connectionType.service';


@Injectable({ providedIn: 'root' })
export class PersonConnectionService extends Service<PersonConnection> implements IService<PersonConnection> {

  constructor(public ServiceCollection: PersonConnectionServiceCollection,
		public PersonService: PersonService,
		public ConnectionTypeService: ConnectionTypeService) {
    super(ServiceCollection.API_Operation, PersonConnection.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<PersonConnection> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<PersonConnection[]> {
    return super.RetrieveAll();
  }

  Save(personConnection: PersonConnection): Promise<PersonConnection> {
    if (!PersonConnection.Validate(personConnection)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(personConnection);
    }
    return super.Save(personConnection);
  }

  SaveAttached(personConnection: PersonConnection): Promise<PersonConnection> {
    if (!PersonConnection.Validate(personConnection)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(personConnection);
    }
    return super.SaveAttached(personConnection);
  }

  SaveCollection(personConnectionList: PersonConnection[]): Promise<Result> {
    return super.SaveCollection(personConnectionList);
  }

  Delete(personConnection: PersonConnection): Promise<boolean> {
    return super.Delete(personConnection);
  }

  Seek(personConnection: PersonConnection = PersonConnection.SeekInstance()): Promise<PersonConnection[]> {
    return super.Seek(personConnection);
  }

  SeekLast(personConnection: PersonConnection): Promise<PersonConnection> {
    return super.SeekLast(personConnection);
  }

  SeekByValue(value: string = ''): Promise<PersonConnection[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}