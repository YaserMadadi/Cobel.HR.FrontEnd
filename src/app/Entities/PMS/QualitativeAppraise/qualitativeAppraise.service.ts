import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { QualitativeAppraise } from './qualitativeAppraise';
import { QualitativeAppraiseServiceCollection } from './qualitativeAppraise.service.collection';

import { QualitativeKPIService } from '../QualitativeKPI/qualitativeKPI.service';
import { EmployeeService } from '../../HR/Employee/employee.service';
import { AppraiseTypeService } from '../../Base.PMS/AppraiseType/appraiseType.service';
import { AppraiseTimeService } from '../../Base.PMS/AppraiseTime/appraiseTime.service';


@Injectable({ providedIn: 'root' })
export class QualitativeAppraiseService extends Service<QualitativeAppraise> implements IService<QualitativeAppraise> {

  constructor(public ServiceCollection: QualitativeAppraiseServiceCollection,
		public QualitativeKPIService: QualitativeKPIService,
		public EmployeeService: EmployeeService,
		public AppraiseTypeService: AppraiseTypeService,
		public AppraiseTimeService: AppraiseTimeService) {
    super(ServiceCollection.API_Operation, QualitativeAppraise.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<QualitativeAppraise> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<QualitativeAppraise[]> {
    return super.RetrieveAll();
  }

  Save(qualitativeAppraise: QualitativeAppraise): Promise<QualitativeAppraise> {
    if (!QualitativeAppraise.Validate(qualitativeAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(qualitativeAppraise);
    }
    return super.Save(qualitativeAppraise);
  }

  SaveAttached(qualitativeAppraise: QualitativeAppraise): Promise<QualitativeAppraise> {
    if (!QualitativeAppraise.Validate(qualitativeAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(qualitativeAppraise);
    }
    return super.SaveAttached(qualitativeAppraise);
  }

  SaveCollection(qualitativeAppraiseList: QualitativeAppraise[]): Promise<Result> {
    return super.SaveCollection(qualitativeAppraiseList);
  }

  Delete(qualitativeAppraise: QualitativeAppraise): Promise<boolean> {
    return super.Delete(qualitativeAppraise);
  }

  Seek(qualitativeAppraise: QualitativeAppraise = QualitativeAppraise.SeekInstance()): Promise<QualitativeAppraise[]> {
    return super.Seek(qualitativeAppraise);
  }

  SeekLast(qualitativeAppraise: QualitativeAppraise): Promise<QualitativeAppraise> {
    return super.SeekLast(qualitativeAppraise);
  }

  SeekByValue(value: string = ''): Promise<QualitativeAppraise[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}