import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { FunctionalKPIComment } from './functionalKPIComment';
import { FunctionalKPICommentServiceCollection } from './functionalKPIComment.service.collection';

import { FunctionalKPIService } from '../FunctionalKPI/functionalKPI.service';
import { EmployeeService } from '../../HR/Employee/employee.service';


@Injectable({ providedIn: 'root' })
export class FunctionalKPICommentService extends Service<FunctionalKPIComment> implements IService<FunctionalKPIComment> {

  constructor(public ServiceCollection: FunctionalKPICommentServiceCollection,
		public FunctionalKPIService: FunctionalKPIService,
		public EmployeeService: EmployeeService) {
    super(ServiceCollection.API_Operation, FunctionalKPIComment.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<FunctionalKPIComment> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<FunctionalKPIComment[]> {
    return super.RetrieveAll();
  }

  Save(functionalKPIComment: FunctionalKPIComment): Promise<FunctionalKPIComment> {
    if (!FunctionalKPIComment.Validate(functionalKPIComment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(functionalKPIComment);
    }
    return super.Save(functionalKPIComment);
  }

  SaveAttached(functionalKPIComment: FunctionalKPIComment): Promise<FunctionalKPIComment> {
    if (!FunctionalKPIComment.Validate(functionalKPIComment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(functionalKPIComment);
    }
    return super.SaveAttached(functionalKPIComment);
  }

  SaveCollection(functionalKPICommentList: FunctionalKPIComment[]): Promise<Result> {
    return super.SaveCollection(functionalKPICommentList);
  }

  Delete(functionalKPIComment: FunctionalKPIComment): Promise<boolean> {
    return super.Delete(functionalKPIComment);
  }

  Seek(functionalKPIComment: FunctionalKPIComment = FunctionalKPIComment.SeekInstance()): Promise<FunctionalKPIComment[]> {
    return super.Seek(functionalKPIComment);
  }

  SeekLast(functionalKPIComment: FunctionalKPIComment): Promise<FunctionalKPIComment> {
    return super.SeekLast(functionalKPIComment);
  }

  SeekByValue(value: string = ''): Promise<FunctionalKPIComment[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}