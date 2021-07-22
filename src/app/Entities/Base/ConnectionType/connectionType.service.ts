import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ConnectionType } from './connectionType';
import { ConnectionTypeServiceCollection } from './connectionType.service.collection';

import { CoachConnectionLine } from '../../LAD/CoachConnectionLine/coachConnectionLine';
import { AssessorConnectionLine } from '../../LAD/AssessorConnectionLine/assessorConnectionLine';
import { PersonConnection } from '../../HR/PersonConnection/personConnection';


@Injectable({ providedIn: 'root' })
export class ConnectionTypeService extends Service<ConnectionType> implements IService<ConnectionType> {

  constructor(public ServiceCollection: ConnectionTypeServiceCollection) {
    super(ServiceCollection.API_Operation, ConnectionType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new ConnectionType();
}

  RetrieveById(id: number): Promise<ConnectionType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ConnectionType[]> {
    return super.RetrieveAll();
  }

  Save(connectionType: ConnectionType): Promise<ConnectionType> {
    if (!ConnectionType.Validate(connectionType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(connectionType);
    }
    return super.Save(connectionType);
  }

  SaveAttached(connectionType: ConnectionType): Promise<ConnectionType> {
    if (!ConnectionType.Validate(connectionType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(connectionType);
    }
    return super.SaveAttached(connectionType);
  }

  SaveCollection(connectionTypeList: ConnectionType[]): Promise<Result> {
    return super.SaveCollection(connectionTypeList);
  }

  Delete(connectionType: ConnectionType): Promise<boolean> {
    return super.Delete(connectionType);
  }

  Seek(connectionType: ConnectionType = ConnectionType.SeekInstance()): Promise<ConnectionType[]> {
    return super.Seek(connectionType);
  }

  SeekLast(connectionType: ConnectionType): Promise<ConnectionType> {
    return super.SeekLast(connectionType);
  }

  SeekByValue(value: string = ''): Promise<ConnectionType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}