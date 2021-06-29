import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Conclusion } from './conclusion';
import { ConclusionServiceCollection } from './conclusion.service.collection';

import { AssessmentService } from '../Assessment/assessment.service';
import { ConclusionTypeService } from '../ConclusionType/conclusionType.service';


@Injectable({ providedIn: 'root' })
export class ConclusionService extends Service<Conclusion> implements IService<Conclusion> {

  constructor(public ServiceCollection: ConclusionServiceCollection,
		public AssessmentService: AssessmentService,
		public ConclusionTypeService: ConclusionTypeService) {
    super(ServiceCollection.API_Operation, Conclusion.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Conclusion> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Conclusion[]> {
    return super.RetrieveAll();
  }

  Save(conclusion: Conclusion): Promise<Conclusion> {
    if (!Conclusion.Validate(conclusion)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(conclusion);
    }
    return super.Save(conclusion);
  }

  SaveAttached(conclusion: Conclusion): Promise<Conclusion> {
    if (!Conclusion.Validate(conclusion)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(conclusion);
    }
    return super.SaveAttached(conclusion);
  }

  SaveCollection(conclusionList: Conclusion[]): Promise<Result> {
    return super.SaveCollection(conclusionList);
  }

  Delete(conclusion: Conclusion): Promise<boolean> {
    return super.Delete(conclusion);
  }

  Seek(conclusion: Conclusion = Conclusion.SeekInstance()): Promise<Conclusion[]> {
    return super.Seek(conclusion);
  }

  SeekLast(conclusion: Conclusion): Promise<Conclusion> {
    return super.SeekLast(conclusion);
  }

  SeekByValue(value: string = ''): Promise<Conclusion[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}