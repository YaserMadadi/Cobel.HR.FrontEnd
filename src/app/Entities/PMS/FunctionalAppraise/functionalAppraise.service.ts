import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { FunctionalAppraise } from './functionalAppraise';
import { FunctionalAppraiseServiceCollection } from './functionalAppraise.service.collection';

import { FunctionalKPIService } from '../FunctionalKPI/functionalKPI.service';
import { EmployeeService } from '../../HR/Employee/employee.service';
import { AppraiseTypeService } from '../../Base.PMS/AppraiseType/appraiseType.service';
import { AppraiseTimeService } from '../../Base.PMS/AppraiseTime/appraiseTime.service';


@Injectable({ providedIn: 'root' })
export class FunctionalAppraiseService extends Service<FunctionalAppraise> implements IService<FunctionalAppraise> {

  constructor(public ServiceCollection: FunctionalAppraiseServiceCollection,
		public FunctionalKPIService: FunctionalKPIService,
		public EmployeeService: EmployeeService,
		public AppraiseTypeService: AppraiseTypeService) {
    super(ServiceCollection.API_Operation, FunctionalAppraise.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new FunctionalAppraise();
}

  RetrieveById(id: number): Promise<FunctionalAppraise> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<FunctionalAppraise[]> {
    return super.RetrieveAll();
  }

  Save(functionalAppraise: FunctionalAppraise): Promise<FunctionalAppraise> {
    if (!FunctionalAppraise.Validate(functionalAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(functionalAppraise);
    }
    return super.Save(functionalAppraise);
  }

  SaveAttached(functionalAppraise: FunctionalAppraise): Promise<FunctionalAppraise> {
    if (!FunctionalAppraise.Validate(functionalAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(functionalAppraise);
    }
    return super.SaveAttached(functionalAppraise);
  }

  SaveCollection(functionalAppraiseList: FunctionalAppraise[]): Promise<Result> {
    return super.SaveCollection(functionalAppraiseList);
  }

  Delete(functionalAppraise: FunctionalAppraise): Promise<boolean> {
    return super.Delete(functionalAppraise);
  }

  Seek(functionalAppraise: FunctionalAppraise = FunctionalAppraise.SeekInstance()): Promise<FunctionalAppraise[]> {
    return super.Seek(functionalAppraise);
  }

  SeekLast(functionalAppraise: FunctionalAppraise): Promise<FunctionalAppraise> {
    return super.SeekLast(functionalAppraise);
  }

  SeekByValue(value: string = ''): Promise<FunctionalAppraise[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}