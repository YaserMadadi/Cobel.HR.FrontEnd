import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { FunctionalObjectiveComment } from './functionalObjectiveComment';
import { FunctionalObjectiveCommentServiceCollection } from './functionalObjectiveComment.service.collection';

import { FunctionalObjectiveService } from '../FunctionalObjective/functionalObjective.service';
import { EmployeeService } from '../../HR/Employee/employee.service';


@Injectable({ providedIn: 'root' })
export class FunctionalObjectiveCommentService extends Service<FunctionalObjectiveComment> implements IService<FunctionalObjectiveComment> {

  constructor(public ServiceCollection: FunctionalObjectiveCommentServiceCollection,
		public FunctionalObjectiveService: FunctionalObjectiveService,
		public EmployeeService: EmployeeService) {
    super(ServiceCollection.API_Operation, FunctionalObjectiveComment.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new FunctionalObjectiveComment();
}

  RetrieveById(id: number): Promise<FunctionalObjectiveComment> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<FunctionalObjectiveComment[]> {
    return super.RetrieveAll();
  }

  Save(functionalObjectiveComment: FunctionalObjectiveComment): Promise<FunctionalObjectiveComment> {
    if (!FunctionalObjectiveComment.Validate(functionalObjectiveComment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(functionalObjectiveComment);
    }
    return super.Save(functionalObjectiveComment);
  }

  SaveAttached(functionalObjectiveComment: FunctionalObjectiveComment): Promise<FunctionalObjectiveComment> {
    if (!FunctionalObjectiveComment.Validate(functionalObjectiveComment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(functionalObjectiveComment);
    }
    return super.SaveAttached(functionalObjectiveComment);
  }

  SaveCollection(functionalObjectiveCommentList: FunctionalObjectiveComment[]): Promise<Result> {
    return super.SaveCollection(functionalObjectiveCommentList);
  }

  Delete(functionalObjectiveComment: FunctionalObjectiveComment): Promise<boolean> {
    return super.Delete(functionalObjectiveComment);
  }

  Seek(functionalObjectiveComment: FunctionalObjectiveComment = FunctionalObjectiveComment.SeekInstance()): Promise<FunctionalObjectiveComment[]> {
    return super.Seek(functionalObjectiveComment);
  }

  SeekLast(functionalObjectiveComment: FunctionalObjectiveComment): Promise<FunctionalObjectiveComment> {
    return super.SeekLast(functionalObjectiveComment);
  }

  SeekByValue(value: string = ''): Promise<FunctionalObjectiveComment[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}