import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { AppraisalApproverConfig } from './appraisalApproverConfig';
import { AppraisalApproverConfigServiceCollection } from './appraisalApproverConfig.service.collection';

import { PositionCategoryService } from '../../Base.HR/PositionCategory/positionCategory.service';
import { ApproverTypeService } from '../../Base.PMS/ApproverType/approverType.service';


@Injectable({ providedIn: 'root' })
export class AppraisalApproverConfigService extends Service<AppraisalApproverConfig> implements IService<AppraisalApproverConfig> {

  constructor(public ServiceCollection: AppraisalApproverConfigServiceCollection,
		public PositionCategoryService: PositionCategoryService,
		public ApproverTypeService: ApproverTypeService) {
    super(ServiceCollection.API_Operation, AppraisalApproverConfig.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new AppraisalApproverConfig();
}

  RetrieveById(id: number): Promise<AppraisalApproverConfig> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<AppraisalApproverConfig[]> {
    return super.RetrieveAll();
  }

  Save(appraisalApproverConfig: AppraisalApproverConfig): Promise<AppraisalApproverConfig> {
    if (!AppraisalApproverConfig.Validate(appraisalApproverConfig)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(appraisalApproverConfig);
    }
    return super.Save(appraisalApproverConfig);
  }

  SaveAttached(appraisalApproverConfig: AppraisalApproverConfig): Promise<AppraisalApproverConfig> {
    if (!AppraisalApproverConfig.Validate(appraisalApproverConfig)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(appraisalApproverConfig);
    }
    return super.SaveAttached(appraisalApproverConfig);
  }

  SaveCollection(appraisalApproverConfigList: AppraisalApproverConfig[]): Promise<Result> {
    return super.SaveCollection(appraisalApproverConfigList);
  }

  Delete(appraisalApproverConfig: AppraisalApproverConfig): Promise<boolean> {
    return super.Delete(appraisalApproverConfig);
  }

  Seek(appraisalApproverConfig: AppraisalApproverConfig = AppraisalApproverConfig.SeekInstance()): Promise<AppraisalApproverConfig[]> {
    return super.Seek(appraisalApproverConfig);
  }

  SeekLast(appraisalApproverConfig: AppraisalApproverConfig): Promise<AppraisalApproverConfig> {
    return super.SeekLast(appraisalApproverConfig);
  }

  SeekByValue(value: string = ''): Promise<AppraisalApproverConfig[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}