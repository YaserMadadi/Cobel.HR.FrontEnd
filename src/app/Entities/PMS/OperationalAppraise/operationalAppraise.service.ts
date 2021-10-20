import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { OperationalAppraise } from './operationalAppraise';
import { OperationalAppraiseServiceCollection } from './operationalAppraise.service.collection';

import { TargetSettingService } from '../TargetSetting/targetSetting.service';
import { EmployeeService } from '../../HR/Employee/employee.service';
import { ScoreCellService } from '../ScoreCell/scoreCell.service';


@Injectable({ providedIn: 'root' })
export class OperationalAppraiseService extends Service<OperationalAppraise> implements IService<OperationalAppraise> {

  constructor(public ServiceCollection: OperationalAppraiseServiceCollection,
		public TargetSettingService: TargetSettingService,
		public EmployeeService: EmployeeService,
		public ScoreCellService: ScoreCellService) {
    super(ServiceCollection.API_Operation, OperationalAppraise.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new OperationalAppraise();
}

  RetrieveById(id: number): Promise<OperationalAppraise> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<OperationalAppraise[]> {
    return super.RetrieveAll();
  }

  Save(operationalAppraise: OperationalAppraise): Promise<OperationalAppraise> {
    if (!OperationalAppraise.Validate(operationalAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(operationalAppraise);
    }
    return super.Save(operationalAppraise);
  }

  SaveAttached(operationalAppraise: OperationalAppraise): Promise<OperationalAppraise> {
    if (!OperationalAppraise.Validate(operationalAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(operationalAppraise);
    }
    return super.SaveAttached(operationalAppraise);
  }

  SaveCollection(operationalAppraiseList: OperationalAppraise[]): Promise<Result> {
    return super.SaveCollection(operationalAppraiseList);
  }

  Delete(operationalAppraise: OperationalAppraise): Promise<boolean> {
    return super.Delete(operationalAppraise);
  }

  Seek(operationalAppraise: OperationalAppraise = OperationalAppraise.SeekInstance()): Promise<OperationalAppraise[]> {
    return super.Seek(operationalAppraise);
  }

  SeekLast(operationalAppraise: OperationalAppraise): Promise<OperationalAppraise> {
    return super.SeekLast(operationalAppraise);
  }

  SeekByValue(value: string = ''): Promise<OperationalAppraise[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}