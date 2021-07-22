import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { QualitativeObjective } from './qualitativeObjective';
import { QualitativeObjectiveServiceCollection } from './qualitativeObjective.service.collection';

import { TargetSettingService } from '../TargetSetting/targetSetting.service';
import { QualitativeKPI } from '../QualitativeKPI/qualitativeKPI';


@Injectable({ providedIn: 'root' })
export class QualitativeObjectiveService extends Service<QualitativeObjective> implements IService<QualitativeObjective> {

  constructor(public ServiceCollection: QualitativeObjectiveServiceCollection,
		public TargetSettingService: TargetSettingService) {
    super(ServiceCollection.API_Operation, QualitativeObjective.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new QualitativeObjective();
}

  RetrieveById(id: number): Promise<QualitativeObjective> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<QualitativeObjective[]> {
    return super.RetrieveAll();
  }

  Save(qualitativeObjective: QualitativeObjective): Promise<QualitativeObjective> {
    if (!QualitativeObjective.Validate(qualitativeObjective)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(qualitativeObjective);
    }
    return super.Save(qualitativeObjective);
  }

  SaveAttached(qualitativeObjective: QualitativeObjective): Promise<QualitativeObjective> {
    if (!QualitativeObjective.Validate(qualitativeObjective)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(qualitativeObjective);
    }
    return super.SaveAttached(qualitativeObjective);
  }

  SaveCollection(qualitativeObjectiveList: QualitativeObjective[]): Promise<Result> {
    return super.SaveCollection(qualitativeObjectiveList);
  }

  Delete(qualitativeObjective: QualitativeObjective): Promise<boolean> {
    return super.Delete(qualitativeObjective);
  }

  Seek(qualitativeObjective: QualitativeObjective = QualitativeObjective.SeekInstance()): Promise<QualitativeObjective[]> {
    return super.Seek(qualitativeObjective);
  }

  SeekLast(qualitativeObjective: QualitativeObjective): Promise<QualitativeObjective> {
    return super.SeekLast(qualitativeObjective);
  }

  SeekByValue(value: string = ''): Promise<QualitativeObjective[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}