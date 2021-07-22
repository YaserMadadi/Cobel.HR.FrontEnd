import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { StrategicObjectve } from './strategicObjectve';
import { StrategicObjectveServiceCollection } from './strategicObjectve.service.collection';



@Injectable({ providedIn: 'root' })
export class StrategicObjectveService extends Service<StrategicObjectve> implements IService<StrategicObjectve> {

  constructor(public ServiceCollection: StrategicObjectveServiceCollection) {
    super(ServiceCollection.API_Operation, StrategicObjectve.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new StrategicObjectve();
}

  RetrieveById(id: number): Promise<StrategicObjectve> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<StrategicObjectve[]> {
    return super.RetrieveAll();
  }

  Save(strategicObjectve: StrategicObjectve): Promise<StrategicObjectve> {
    if (!StrategicObjectve.Validate(strategicObjectve)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(strategicObjectve);
    }
    return super.Save(strategicObjectve);
  }

  SaveAttached(strategicObjectve: StrategicObjectve): Promise<StrategicObjectve> {
    if (!StrategicObjectve.Validate(strategicObjectve)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(strategicObjectve);
    }
    return super.SaveAttached(strategicObjectve);
  }

  SaveCollection(strategicObjectveList: StrategicObjectve[]): Promise<Result> {
    return super.SaveCollection(strategicObjectveList);
  }

  Delete(strategicObjectve: StrategicObjectve): Promise<boolean> {
    return super.Delete(strategicObjectve);
  }

  Seek(strategicObjectve: StrategicObjectve = StrategicObjectve.SeekInstance()): Promise<StrategicObjectve[]> {
    return super.Seek(strategicObjectve);
  }

  SeekLast(strategicObjectve: StrategicObjectve): Promise<StrategicObjectve> {
    return super.SeekLast(strategicObjectve);
  }

  SeekByValue(value: string = ''): Promise<StrategicObjectve[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}