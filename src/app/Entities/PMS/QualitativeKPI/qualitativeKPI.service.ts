import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { QualitativeKPI } from './qualitativeKPI';
import { QualitativeKPIServiceCollection } from './qualitativeKPI.service.collection';

import { QualitativeObjectiveService } from '../QualitativeObjective/qualitativeObjective.service';
import { QualitativeAppraise } from '../QualitativeAppraise/qualitativeAppraise';


@Injectable({ providedIn: 'root' })
export class QualitativeKPIService extends Service<QualitativeKPI> implements IService<QualitativeKPI> {

  constructor(public ServiceCollection: QualitativeKPIServiceCollection,
		public QualitativeObjectiveService: QualitativeObjectiveService) {
    super(ServiceCollection.API_Operation, QualitativeKPI.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<QualitativeKPI> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<QualitativeKPI[]> {
    return super.RetrieveAll();
  }

  Save(qualitativeKPI: QualitativeKPI): Promise<QualitativeKPI> {
    if (!QualitativeKPI.Validate(qualitativeKPI)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(qualitativeKPI);
    }
    return super.Save(qualitativeKPI);
  }

  SaveAttached(qualitativeKPI: QualitativeKPI): Promise<QualitativeKPI> {
    if (!QualitativeKPI.Validate(qualitativeKPI)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(qualitativeKPI);
    }
    return super.SaveAttached(qualitativeKPI);
  }

  SaveCollection(qualitativeKPIList: QualitativeKPI[]): Promise<Result> {
    return super.SaveCollection(qualitativeKPIList);
  }

  Delete(qualitativeKPI: QualitativeKPI): Promise<boolean> {
    return super.Delete(qualitativeKPI);
  }

  Seek(qualitativeKPI: QualitativeKPI = QualitativeKPI.SeekInstance()): Promise<QualitativeKPI[]> {
    return super.Seek(qualitativeKPI);
  }

  SeekLast(qualitativeKPI: QualitativeKPI): Promise<QualitativeKPI> {
    return super.SeekLast(qualitativeKPI);
  }

  SeekByValue(value: string = ''): Promise<QualitativeKPI[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}