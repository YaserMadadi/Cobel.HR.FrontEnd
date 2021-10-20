import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CompetencyItemKPI } from './competencyItemKPI';
import { CompetencyItemKPIServiceCollection } from './competencyItemKPI.service.collection';

import { CompetencyItemService } from '../CompetencyItem/competencyItem.service';
import { BehavioralKPI } from '../BehavioralKPI/behavioralKPI';


@Injectable({ providedIn: 'root' })
export class CompetencyItemKPIService extends Service<CompetencyItemKPI> implements IService<CompetencyItemKPI> {

  constructor(public ServiceCollection: CompetencyItemKPIServiceCollection,
		public CompetencyItemService: CompetencyItemService) {
    super(ServiceCollection.API_Operation, CompetencyItemKPI.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new CompetencyItemKPI();
}

  RetrieveById(id: number): Promise<CompetencyItemKPI> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CompetencyItemKPI[]> {
    return super.RetrieveAll();
  }

  Save(competencyItemKPI: CompetencyItemKPI): Promise<CompetencyItemKPI> {
    if (!CompetencyItemKPI.Validate(competencyItemKPI)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(competencyItemKPI);
    }
    return super.Save(competencyItemKPI);
  }

  SaveAttached(competencyItemKPI: CompetencyItemKPI): Promise<CompetencyItemKPI> {
    if (!CompetencyItemKPI.Validate(competencyItemKPI)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(competencyItemKPI);
    }
    return super.SaveAttached(competencyItemKPI);
  }

  SaveCollection(competencyItemKPIList: CompetencyItemKPI[]): Promise<Result> {
    return super.SaveCollection(competencyItemKPIList);
  }

  Delete(competencyItemKPI: CompetencyItemKPI): Promise<boolean> {
    return super.Delete(competencyItemKPI);
  }

  Seek(competencyItemKPI: CompetencyItemKPI = CompetencyItemKPI.SeekInstance()): Promise<CompetencyItemKPI[]> {
    return super.Seek(competencyItemKPI);
  }

  SeekLast(competencyItemKPI: CompetencyItemKPI): Promise<CompetencyItemKPI> {
    return super.SeekLast(competencyItemKPI);
  }

  SeekByValue(value: string = ''): Promise<CompetencyItemKPI[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}