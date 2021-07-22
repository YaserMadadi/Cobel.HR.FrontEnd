import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Year } from './year';
import { YearServiceCollection } from './year.service.collection';

import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';
import { YearQuarter } from '../YearQuarter/yearQuarter';


@Injectable({ providedIn: 'root' })
export class YearService extends Service<Year> implements IService<Year> {

  constructor(public ServiceCollection: YearServiceCollection) {
    super(ServiceCollection.API_Operation, Year.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Year();
}

  RetrieveById(id: number): Promise<Year> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Year[]> {
    return super.RetrieveAll();
  }

  Save(year: Year): Promise<Year> {
    if (!Year.Validate(year)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(year);
    }
    return super.Save(year);
  }

  SaveAttached(year: Year): Promise<Year> {
    if (!Year.Validate(year)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(year);
    }
    return super.SaveAttached(year);
  }

  SaveCollection(yearList: Year[]): Promise<Result> {
    return super.SaveCollection(yearList);
  }

  Delete(year: Year): Promise<boolean> {
    return super.Delete(year);
  }

  Seek(year: Year = Year.SeekInstance()): Promise<Year[]> {
    return super.Seek(year);
  }

  SeekLast(year: Year): Promise<Year> {
    return super.SeekLast(year);
  }

  SeekByValue(value: string = ''): Promise<Year[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}