import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ObjectiveWeightNonOperational } from './objectiveWeightNonOperational';
import { ObjectiveWeightNonOperationalServiceCollection } from './objectiveWeightNonOperational.service.collection';

import { LevelService } from '../../HR/Level/level.service';


@Injectable({ providedIn: 'root' })
export class ObjectiveWeightNonOperationalService extends Service<ObjectiveWeightNonOperational> implements IService<ObjectiveWeightNonOperational> {

  constructor(public ServiceCollection: ObjectiveWeightNonOperationalServiceCollection,
		public LevelService: LevelService) {
    super(ServiceCollection.API_Operation, ObjectiveWeightNonOperational.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new ObjectiveWeightNonOperational();
}

  RetrieveById(id: number): Promise<ObjectiveWeightNonOperational> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ObjectiveWeightNonOperational[]> {
    return super.RetrieveAll();
  }

  Save(objectiveWeightNonOperational: ObjectiveWeightNonOperational): Promise<ObjectiveWeightNonOperational> {
    if (!ObjectiveWeightNonOperational.Validate(objectiveWeightNonOperational)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(objectiveWeightNonOperational);
    }
    return super.Save(objectiveWeightNonOperational);
  }

  SaveAttached(objectiveWeightNonOperational: ObjectiveWeightNonOperational): Promise<ObjectiveWeightNonOperational> {
    if (!ObjectiveWeightNonOperational.Validate(objectiveWeightNonOperational)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(objectiveWeightNonOperational);
    }
    return super.SaveAttached(objectiveWeightNonOperational);
  }

  SaveCollection(objectiveWeightNonOperationalList: ObjectiveWeightNonOperational[]): Promise<Result> {
    return super.SaveCollection(objectiveWeightNonOperationalList);
  }

  Delete(objectiveWeightNonOperational: ObjectiveWeightNonOperational): Promise<boolean> {
    return super.Delete(objectiveWeightNonOperational);
  }

  Seek(objectiveWeightNonOperational: ObjectiveWeightNonOperational = ObjectiveWeightNonOperational.SeekInstance()): Promise<ObjectiveWeightNonOperational[]> {
    return super.Seek(objectiveWeightNonOperational);
  }

  SeekLast(objectiveWeightNonOperational: ObjectiveWeightNonOperational): Promise<ObjectiveWeightNonOperational> {
    return super.SeekLast(objectiveWeightNonOperational);
  }

  SeekByValue(value: string = ''): Promise<ObjectiveWeightNonOperational[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}