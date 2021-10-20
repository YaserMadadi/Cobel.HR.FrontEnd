import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { PromotionResult } from './promotionResult';
import { PromotionResultServiceCollection } from './promotionResult.service.collection';

import { PromotionAssessment } from '../PromotionAssessment/promotionAssessment';


@Injectable({ providedIn: 'root' })
export class PromotionResultService extends Service<PromotionResult> implements IService<PromotionResult> {

  constructor(public ServiceCollection: PromotionResultServiceCollection) {
    super(ServiceCollection.API_Operation, PromotionResult.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new PromotionResult();
}

  RetrieveById(id: number): Promise<PromotionResult> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<PromotionResult[]> {
    return super.RetrieveAll();
  }

  Save(promotionResult: PromotionResult): Promise<PromotionResult> {
    if (!PromotionResult.Validate(promotionResult)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(promotionResult);
    }
    return super.Save(promotionResult);
  }

  SaveAttached(promotionResult: PromotionResult): Promise<PromotionResult> {
    if (!PromotionResult.Validate(promotionResult)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(promotionResult);
    }
    return super.SaveAttached(promotionResult);
  }

  SaveCollection(promotionResultList: PromotionResult[]): Promise<Result> {
    return super.SaveCollection(promotionResultList);
  }

  Delete(promotionResult: PromotionResult): Promise<boolean> {
    return super.Delete(promotionResult);
  }

  Seek(promotionResult: PromotionResult = PromotionResult.SeekInstance()): Promise<PromotionResult[]> {
    return super.Seek(promotionResult);
  }

  SeekLast(promotionResult: PromotionResult): Promise<PromotionResult> {
    return super.SeekLast(promotionResult);
  }

  SeekByValue(value: string = ''): Promise<PromotionResult[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}