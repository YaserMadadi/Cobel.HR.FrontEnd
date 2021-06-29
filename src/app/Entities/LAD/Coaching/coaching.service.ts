import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Coaching } from './coaching';
import { CoachingServiceCollection } from './coaching.service.collection';

import { EmployeeService } from '../../HR/Employee/employee.service';
import { CoachService } from '../Coach/coach.service';
import { CoachingSession } from '../CoachingSession/coachingSession';
import { AssessmentCoaching } from '../AssessmentCoaching/assessmentCoaching';


@Injectable({ providedIn: 'root' })
export class CoachingService extends Service<Coaching> implements IService<Coaching> {

  constructor(public ServiceCollection: CoachingServiceCollection,
		public EmployeeService: EmployeeService,
		public CoachService: CoachService) {
    super(ServiceCollection.API_Operation, Coaching.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Coaching> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Coaching[]> {
    return super.RetrieveAll();
  }

  Save(coaching: Coaching): Promise<Coaching> {
    if (!Coaching.Validate(coaching)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coaching);
    }
    return super.Save(coaching);
  }

  SaveAttached(coaching: Coaching): Promise<Coaching> {
    if (!Coaching.Validate(coaching)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coaching);
    }
    return super.SaveAttached(coaching);
  }

  SaveCollection(coachingList: Coaching[]): Promise<Result> {
    return super.SaveCollection(coachingList);
  }

  Delete(coaching: Coaching): Promise<boolean> {
    return super.Delete(coaching);
  }

  Seek(coaching: Coaching = Coaching.SeekInstance()): Promise<Coaching[]> {
    return super.Seek(coaching);
  }

  SeekLast(coaching: Coaching): Promise<Coaching> {
    return super.SeekLast(coaching);
  }

  SeekByValue(value: string = ''): Promise<Coaching[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}