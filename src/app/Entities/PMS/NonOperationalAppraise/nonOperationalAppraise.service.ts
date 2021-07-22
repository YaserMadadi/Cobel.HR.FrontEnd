import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { NonOperationalAppraise } from './nonOperationalAppraise';
import { NonOperationalAppraiseServiceCollection } from './nonOperationalAppraise.service.collection';

import { TargetSettingService } from '../TargetSetting/targetSetting.service';
import { EmployeeService } from '../../HR/Employee/employee.service';
import { ScoreCellService } from '../ScoreCell/scoreCell.service';


@Injectable({ providedIn: 'root' })
export class NonOperationalAppraiseService extends Service<NonOperationalAppraise> implements IService<NonOperationalAppraise> {

  constructor(public ServiceCollection: NonOperationalAppraiseServiceCollection,
		public TargetSettingService: TargetSettingService,
		public EmployeeService: EmployeeService,
		public ScoreCellService: ScoreCellService) {
    super(ServiceCollection.API_Operation, NonOperationalAppraise.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new NonOperationalAppraise();
}

  RetrieveById(id: number): Promise<NonOperationalAppraise> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<NonOperationalAppraise[]> {
    return super.RetrieveAll();
  }

  Save(nonOperationalAppraise: NonOperationalAppraise): Promise<NonOperationalAppraise> {
    if (!NonOperationalAppraise.Validate(nonOperationalAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(nonOperationalAppraise);
    }
    return super.Save(nonOperationalAppraise);
  }

  SaveAttached(nonOperationalAppraise: NonOperationalAppraise): Promise<NonOperationalAppraise> {
    if (!NonOperationalAppraise.Validate(nonOperationalAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(nonOperationalAppraise);
    }
    return super.SaveAttached(nonOperationalAppraise);
  }

  SaveCollection(nonOperationalAppraiseList: NonOperationalAppraise[]): Promise<Result> {
    return super.SaveCollection(nonOperationalAppraiseList);
  }

  Delete(nonOperationalAppraise: NonOperationalAppraise): Promise<boolean> {
    return super.Delete(nonOperationalAppraise);
  }

  Seek(nonOperationalAppraise: NonOperationalAppraise = NonOperationalAppraise.SeekInstance()): Promise<NonOperationalAppraise[]> {
    return super.Seek(nonOperationalAppraise);
  }

  SeekLast(nonOperationalAppraise: NonOperationalAppraise): Promise<NonOperationalAppraise> {
    return super.SeekLast(nonOperationalAppraise);
  }

  SeekByValue(value: string = ''): Promise<NonOperationalAppraise[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}