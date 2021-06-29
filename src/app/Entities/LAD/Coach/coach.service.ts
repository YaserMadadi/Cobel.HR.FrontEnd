import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Coach } from './coach';
import { CoachServiceCollection } from './coach.service.collection';

import { GenderService } from '../../Base/Gender/gender.service';
import { Coaching } from '../Coaching/coaching';
import { CoachConnectionLine } from '../CoachConnectionLine/coachConnectionLine';


@Injectable({ providedIn: 'root' })
export class CoachService extends Service<Coach> implements IService<Coach> {

  constructor(public ServiceCollection: CoachServiceCollection,
		public GenderService: GenderService) {
    super(ServiceCollection.API_Operation, Coach.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Coach> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Coach[]> {
    return super.RetrieveAll();
  }

  Save(coach: Coach): Promise<Coach> {
    if (!Coach.Validate(coach)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coach);
    }
    return super.Save(coach);
  }

  SaveAttached(coach: Coach): Promise<Coach> {
    if (!Coach.Validate(coach)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coach);
    }
    return super.SaveAttached(coach);
  }

  SaveCollection(coachList: Coach[]): Promise<Result> {
    return super.SaveCollection(coachList);
  }

  Delete(coach: Coach): Promise<boolean> {
    return super.Delete(coach);
  }

  Seek(coach: Coach = Coach.SeekInstance()): Promise<Coach[]> {
    return super.Seek(coach);
  }

  SeekLast(coach: Coach): Promise<Coach> {
    return super.SeekLast(coach);
  }

  SeekByValue(value: string = ''): Promise<Coach[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}