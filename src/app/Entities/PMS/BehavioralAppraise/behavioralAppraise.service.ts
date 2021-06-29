import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { BehavioralAppraise } from './behavioralAppraise';
import { BehavioralAppraiseServiceCollection } from './behavioralAppraise.service.collection';

import { BehavioralKPIService } from '../BehavioralKPI/behavioralKPI.service';
import { AppraiseTypeService } from '../../Base.PMS/AppraiseType/appraiseType.service';
import { AppraiseTimeService } from '../../Base.PMS/AppraiseTime/appraiseTime.service';
import { EmployeeService } from '../../HR/Employee/employee.service';


@Injectable({ providedIn: 'root' })
export class BehavioralAppraiseService extends Service<BehavioralAppraise> implements IService<BehavioralAppraise> {

  constructor(public ServiceCollection: BehavioralAppraiseServiceCollection,
		public BehavioralKPIService: BehavioralKPIService,
		public AppraiseTypeService: AppraiseTypeService,
		public AppraiseTimeService: AppraiseTimeService,
		public EmployeeService: EmployeeService) {
    super(ServiceCollection.API_Operation, BehavioralAppraise.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<BehavioralAppraise> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<BehavioralAppraise[]> {
    return super.RetrieveAll();
  }

  Save(behavioralAppraise: BehavioralAppraise): Promise<BehavioralAppraise> {
    if (!BehavioralAppraise.Validate(behavioralAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(behavioralAppraise);
    }
    return super.Save(behavioralAppraise);
  }

  SaveAttached(behavioralAppraise: BehavioralAppraise): Promise<BehavioralAppraise> {
    if (!BehavioralAppraise.Validate(behavioralAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(behavioralAppraise);
    }
    return super.SaveAttached(behavioralAppraise);
  }

  SaveCollection(behavioralAppraiseList: BehavioralAppraise[]): Promise<Result> {
    return super.SaveCollection(behavioralAppraiseList);
  }

  Delete(behavioralAppraise: BehavioralAppraise): Promise<boolean> {
    return super.Delete(behavioralAppraise);
  }

  Seek(behavioralAppraise: BehavioralAppraise = BehavioralAppraise.SeekInstance()): Promise<BehavioralAppraise[]> {
    return super.Seek(behavioralAppraise);
  }

  SeekLast(behavioralAppraise: BehavioralAppraise): Promise<BehavioralAppraise> {
    return super.SeekLast(behavioralAppraise);
  }

  SeekByValue(value: string = ''): Promise<BehavioralAppraise[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}