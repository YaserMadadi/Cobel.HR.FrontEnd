import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { DrivingLicenseType } from './drivingLicenseType';
import { DrivingLicenseTypeServiceCollection } from './drivingLicenseType.service.collection';

import { PersonDrivingLicense } from '../../HR/PersonDrivingLicense/personDrivingLicense';


@Injectable({ providedIn: 'root' })
export class DrivingLicenseTypeService extends Service<DrivingLicenseType> implements IService<DrivingLicenseType> {

  constructor(public ServiceCollection: DrivingLicenseTypeServiceCollection) {
    super(ServiceCollection.API_Operation, DrivingLicenseType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<DrivingLicenseType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<DrivingLicenseType[]> {
    return super.RetrieveAll();
  }

  Save(drivingLicenseType: DrivingLicenseType): Promise<DrivingLicenseType> {
    if (!DrivingLicenseType.Validate(drivingLicenseType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(drivingLicenseType);
    }
    return super.Save(drivingLicenseType);
  }

  SaveAttached(drivingLicenseType: DrivingLicenseType): Promise<DrivingLicenseType> {
    if (!DrivingLicenseType.Validate(drivingLicenseType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(drivingLicenseType);
    }
    return super.SaveAttached(drivingLicenseType);
  }

  SaveCollection(drivingLicenseTypeList: DrivingLicenseType[]): Promise<Result> {
    return super.SaveCollection(drivingLicenseTypeList);
  }

  Delete(drivingLicenseType: DrivingLicenseType): Promise<boolean> {
    return super.Delete(drivingLicenseType);
  }

  Seek(drivingLicenseType: DrivingLicenseType = DrivingLicenseType.SeekInstance()): Promise<DrivingLicenseType[]> {
    return super.Seek(drivingLicenseType);
  }

  SeekLast(drivingLicenseType: DrivingLicenseType): Promise<DrivingLicenseType> {
    return super.SeekLast(drivingLicenseType);
  }

  SeekByValue(value: string = ''): Promise<DrivingLicenseType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}