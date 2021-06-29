import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { HoldingSection } from './holdingSection';
import { HoldingSectionServiceCollection } from './holdingSection.service.collection';

import { EmployeeDetail } from '../../HR/EmployeeDetail/employeeDetail';
import { Employee } from '../../HR/Employee/employee';


@Injectable({ providedIn: 'root' })
export class HoldingSectionService extends Service<HoldingSection> implements IService<HoldingSection> {

  constructor(public ServiceCollection: HoldingSectionServiceCollection) {
    super(ServiceCollection.API_Operation, HoldingSection.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<HoldingSection> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<HoldingSection[]> {
    return super.RetrieveAll();
  }

  Save(holdingSection: HoldingSection): Promise<HoldingSection> {
    if (!HoldingSection.Validate(holdingSection)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(holdingSection);
    }
    return super.Save(holdingSection);
  }

  SaveAttached(holdingSection: HoldingSection): Promise<HoldingSection> {
    if (!HoldingSection.Validate(holdingSection)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(holdingSection);
    }
    return super.SaveAttached(holdingSection);
  }

  SaveCollection(holdingSectionList: HoldingSection[]): Promise<Result> {
    return super.SaveCollection(holdingSectionList);
  }

  Delete(holdingSection: HoldingSection): Promise<boolean> {
    return super.Delete(holdingSection);
  }

  Seek(holdingSection: HoldingSection = HoldingSection.SeekInstance()): Promise<HoldingSection[]> {
    return super.Seek(holdingSection);
  }

  SeekLast(holdingSection: HoldingSection): Promise<HoldingSection> {
    return super.SeekLast(holdingSection);
  }

  SeekByValue(value: string = ''): Promise<HoldingSection[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}