import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { AssessmentType } from './assessmentType';
import { AssessmentTypeServiceCollection } from './assessmentType.service.collection';

import { Assessment } from '../Assessment/assessment';


@Injectable({ providedIn: 'root' })
export class AssessmentTypeService extends Service<AssessmentType> implements IService<AssessmentType> {

  constructor(public ServiceCollection: AssessmentTypeServiceCollection) {
    super(ServiceCollection.API_Operation, AssessmentType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new AssessmentType();
}

  RetrieveById(id: number): Promise<AssessmentType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<AssessmentType[]> {
    return super.RetrieveAll();
  }

  Save(assessmentType: AssessmentType): Promise<AssessmentType> {
    if (!AssessmentType.Validate(assessmentType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessmentType);
    }
    return super.Save(assessmentType);
  }

  SaveAttached(assessmentType: AssessmentType): Promise<AssessmentType> {
    if (!AssessmentType.Validate(assessmentType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessmentType);
    }
    return super.SaveAttached(assessmentType);
  }

  SaveCollection(assessmentTypeList: AssessmentType[]): Promise<Result> {
    return super.SaveCollection(assessmentTypeList);
  }

  Delete(assessmentType: AssessmentType): Promise<boolean> {
    return super.Delete(assessmentType);
  }

  Seek(assessmentType: AssessmentType = AssessmentType.SeekInstance()): Promise<AssessmentType[]> {
    return super.Seek(assessmentType);
  }

  SeekLast(assessmentType: AssessmentType): Promise<AssessmentType> {
    return super.SeekLast(assessmentType);
  }

  SeekByValue(value: string = ''): Promise<AssessmentType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}