import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Level } from './level';
import { LevelServiceCollection } from './level.service.collection';

import { Position } from '../Position/position';


@Injectable({ providedIn: 'root' })
export class LevelService extends Service<Level> implements IService<Level> {

  constructor(public ServiceCollection: LevelServiceCollection) {
    super(ServiceCollection.API_Operation, Level.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Level> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Level[]> {
    return super.RetrieveAll();
  }

  Save(level: Level): Promise<Level> {
    if (!Level.Validate(level)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(level);
    }
    return super.Save(level);
  }

  SaveAttached(level: Level): Promise<Level> {
    if (!Level.Validate(level)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(level);
    }
    return super.SaveAttached(level);
  }

  SaveCollection(levelList: Level[]): Promise<Result> {
    return super.SaveCollection(levelList);
  }

  Delete(level: Level): Promise<boolean> {
    return super.Delete(level);
  }

  Seek(level: Level = Level.SeekInstance()): Promise<Level[]> {
    return super.Seek(level);
  }

  SeekLast(level: Level): Promise<Level> {
    return super.SeekLast(level);
  }

  SeekByValue(value: string = ''): Promise<Level[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}