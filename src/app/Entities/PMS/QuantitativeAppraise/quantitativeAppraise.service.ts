import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { QuantitativeAppraise } from './quantitativeAppraise';
import { QuantitativeAppraiseServiceCollection } from './quantitativeAppraise.service.collection';

import { TargetSettingService } from '../TargetSetting/targetSetting.service';


@Injectable({ providedIn: 'root' })
export class QuantitativeAppraiseService extends Service<QuantitativeAppraise> implements IService<QuantitativeAppraise> {

  constructor(public ServiceCollection: QuantitativeAppraiseServiceCollection,
		public TargetSettingService: TargetSettingService) {
    super(ServiceCollection.API_Operation, QuantitativeAppraise.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<QuantitativeAppraise> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<QuantitativeAppraise[]> {
    return super.RetrieveAll();
  }

  Save(quantitativeAppraise: QuantitativeAppraise): Promise<QuantitativeAppraise> {
    if (!QuantitativeAppraise.Validate(quantitativeAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(quantitativeAppraise);
    }
    return super.Save(quantitativeAppraise);
  }

  SaveAttached(quantitativeAppraise: QuantitativeAppraise): Promise<QuantitativeAppraise> {
    if (!QuantitativeAppraise.Validate(quantitativeAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(quantitativeAppraise);
    }
    return super.SaveAttached(quantitativeAppraise);
  }

  SaveCollection(quantitativeAppraiseList: QuantitativeAppraise[]): Promise<Result> {
    return super.SaveCollection(quantitativeAppraiseList);
  }

  Delete(quantitativeAppraise: QuantitativeAppraise): Promise<boolean> {
    return super.Delete(quantitativeAppraise);
  }

  Seek(quantitativeAppraise: QuantitativeAppraise = QuantitativeAppraise.SeekInstance()): Promise<QuantitativeAppraise[]> {
    return super.Seek(quantitativeAppraise);
  }

  SeekLast(quantitativeAppraise: QuantitativeAppraise): Promise<QuantitativeAppraise> {
    return super.SeekLast(quantitativeAppraise);
  }

  SeekByValue(value: string = ''): Promise<QuantitativeAppraise[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}