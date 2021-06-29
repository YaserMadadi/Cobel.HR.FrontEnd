import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { PromotionAssessment } from './promotionAssessment';
import { PromotionAssessmentServiceCollection } from './promotionAssessment.service.collection';

import { AssessmentService } from '../Assessment/assessment.service';
import { PositionService } from '../../HR/Position/position.service';
import { PromotionResultService } from '../PromotionResult/promotionResult.service';


@Injectable({ providedIn: 'root' })
export class PromotionAssessmentService extends Service<PromotionAssessment> implements IService<PromotionAssessment> {

  constructor(public ServiceCollection: PromotionAssessmentServiceCollection,
		public AssessmentService: AssessmentService,
		public PositionService: PositionService,
		public PromotionResultService: PromotionResultService) {
    super(ServiceCollection.API_Operation, PromotionAssessment.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<PromotionAssessment> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<PromotionAssessment[]> {
    return super.RetrieveAll();
  }

  Save(promotionAssessment: PromotionAssessment): Promise<PromotionAssessment> {
    if (!PromotionAssessment.Validate(promotionAssessment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(promotionAssessment);
    }
    return super.Save(promotionAssessment);
  }

  SaveAttached(promotionAssessment: PromotionAssessment): Promise<PromotionAssessment> {
    if (!PromotionAssessment.Validate(promotionAssessment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(promotionAssessment);
    }
    return super.SaveAttached(promotionAssessment);
  }

  SaveCollection(promotionAssessmentList: PromotionAssessment[]): Promise<Result> {
    return super.SaveCollection(promotionAssessmentList);
  }

  Delete(promotionAssessment: PromotionAssessment): Promise<boolean> {
    return super.Delete(promotionAssessment);
  }

  Seek(promotionAssessment: PromotionAssessment = PromotionAssessment.SeekInstance()): Promise<PromotionAssessment[]> {
    return super.Seek(promotionAssessment);
  }

  SeekLast(promotionAssessment: PromotionAssessment): Promise<PromotionAssessment> {
    return super.SeekLast(promotionAssessment);
  }

  SeekByValue(value: string = ''): Promise<PromotionAssessment[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}