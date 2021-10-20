import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { YearQuarter } from './yearQuarter';
import { YearQuarterServiceCollection } from './yearQuarter.service.collection';

import { YearService } from '../Year/year.service';
import { QuarterService } from '../Quarter/quarter.service';
import { AssessmentTraining } from '../../LAD/AssessmentTraining/assessmentTraining';


@Injectable({ providedIn: 'root' })
export class YearQuarterService extends Service<YearQuarter> implements IService<YearQuarter> {

  constructor(public ServiceCollection: YearQuarterServiceCollection,
		public YearService: YearService,
		public QuarterService: QuarterService) {
    super(ServiceCollection.API_Operation, YearQuarter.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new YearQuarter();
}

  RetrieveById(id: number): Promise<YearQuarter> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<YearQuarter[]> {
    return super.RetrieveAll();
  }

  Save(yearQuarter: YearQuarter): Promise<YearQuarter> {
    if (!YearQuarter.Validate(yearQuarter)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(yearQuarter);
    }
    return super.Save(yearQuarter);
  }

  SaveAttached(yearQuarter: YearQuarter): Promise<YearQuarter> {
    if (!YearQuarter.Validate(yearQuarter)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(yearQuarter);
    }
    return super.SaveAttached(yearQuarter);
  }

  SaveCollection(yearQuarterList: YearQuarter[]): Promise<Result> {
    return super.SaveCollection(yearQuarterList);
  }

  Delete(yearQuarter: YearQuarter): Promise<boolean> {
    return super.Delete(yearQuarter);
  }

  Seek(yearQuarter: YearQuarter = YearQuarter.SeekInstance()): Promise<YearQuarter[]> {
    return super.Seek(yearQuarter);
  }

  SeekLast(yearQuarter: YearQuarter): Promise<YearQuarter> {
    return super.SeekLast(yearQuarter);
  }

  SeekByValue(value: string = ''): Promise<YearQuarter[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}