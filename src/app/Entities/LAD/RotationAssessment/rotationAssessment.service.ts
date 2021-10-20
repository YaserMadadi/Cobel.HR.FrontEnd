import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { RotationAssessment } from './rotationAssessment';
import { RotationAssessmentServiceCollection } from './rotationAssessment.service.collection';

import { AssessmentService } from '../Assessment/assessment.service';
import { PositionService } from '../../HR/Position/position.service';


@Injectable({ providedIn: 'root' })
export class RotationAssessmentService extends Service<RotationAssessment> implements IService<RotationAssessment> {

  constructor(public ServiceCollection: RotationAssessmentServiceCollection,
		public AssessmentService: AssessmentService,
		public PositionService: PositionService) {
    super(ServiceCollection.API_Operation, RotationAssessment.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new RotationAssessment();
}

  RetrieveById(id: number): Promise<RotationAssessment> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<RotationAssessment[]> {
    return super.RetrieveAll();
  }

  Save(rotationAssessment: RotationAssessment): Promise<RotationAssessment> {
    if (!RotationAssessment.Validate(rotationAssessment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(rotationAssessment);
    }
    return super.Save(rotationAssessment);
  }

  SaveAttached(rotationAssessment: RotationAssessment): Promise<RotationAssessment> {
    if (!RotationAssessment.Validate(rotationAssessment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(rotationAssessment);
    }
    return super.SaveAttached(rotationAssessment);
  }

  SaveCollection(rotationAssessmentList: RotationAssessment[]): Promise<Result> {
    return super.SaveCollection(rotationAssessmentList);
  }

  Delete(rotationAssessment: RotationAssessment): Promise<boolean> {
    return super.Delete(rotationAssessment);
  }

  Seek(rotationAssessment: RotationAssessment = RotationAssessment.SeekInstance()): Promise<RotationAssessment[]> {
    return super.Seek(rotationAssessment);
  }

  SeekLast(rotationAssessment: RotationAssessment): Promise<RotationAssessment> {
    return super.SeekLast(rotationAssessment);
  }

  SeekByValue(value: string = ''): Promise<RotationAssessment[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}