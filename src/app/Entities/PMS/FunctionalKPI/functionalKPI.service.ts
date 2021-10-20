import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { FunctionalKPI } from './functionalKPI';
import { FunctionalKPIServiceCollection } from './functionalKPI.service.collection';

import { FunctionalObjectiveService } from '../FunctionalObjective/functionalObjective.service';
import { MeasurementUnitService } from '../../Base.PMS/MeasurementUnit/measurementUnit.service';
import { FunctionalKPIComment } from '../FunctionalKPIComment/functionalKPIComment';
import { FunctionalAppraise } from '../FunctionalAppraise/functionalAppraise';


@Injectable({ providedIn: 'root' })
export class FunctionalKPIService extends Service<FunctionalKPI> implements IService<FunctionalKPI> {

  constructor(public ServiceCollection: FunctionalKPIServiceCollection,
		public FunctionalObjectiveService: FunctionalObjectiveService,
		public MeasurementUnitService: MeasurementUnitService) {
    super(ServiceCollection.API_Operation, FunctionalKPI.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new FunctionalKPI();
}

  RetrieveById(id: number): Promise<FunctionalKPI> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<FunctionalKPI[]> {
    return super.RetrieveAll();
  }

  Save(functionalKPI: FunctionalKPI): Promise<FunctionalKPI> {
    if (!FunctionalKPI.Validate(functionalKPI)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(functionalKPI);
    }
    return super.Save(functionalKPI);
  }

  SaveAttached(functionalKPI: FunctionalKPI): Promise<FunctionalKPI> {
    if (!FunctionalKPI.Validate(functionalKPI)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(functionalKPI);
    }
    return super.SaveAttached(functionalKPI);
  }

  SaveCollection(functionalKPIList: FunctionalKPI[]): Promise<Result> {
    return super.SaveCollection(functionalKPIList);
  }

  Delete(functionalKPI: FunctionalKPI): Promise<boolean> {
    return super.Delete(functionalKPI);
  }

  Seek(functionalKPI: FunctionalKPI = FunctionalKPI.SeekInstance()): Promise<FunctionalKPI[]> {
    return super.Seek(functionalKPI);
  }

  SeekLast(functionalKPI: FunctionalKPI): Promise<FunctionalKPI> {
    return super.SeekLast(functionalKPI);
  }

  SeekByValue(value: string = ''): Promise<FunctionalKPI[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}