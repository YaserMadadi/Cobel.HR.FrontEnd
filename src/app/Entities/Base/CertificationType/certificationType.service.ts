import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CertificationType } from './certificationType';
import { CertificationTypeServiceCollection } from './certificationType.service.collection';

import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Injectable({ providedIn: 'root' })
export class CertificationTypeService extends Service<CertificationType> implements IService<CertificationType> {

  constructor(public ServiceCollection: CertificationTypeServiceCollection) {
    super(ServiceCollection.API_Operation, CertificationType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<CertificationType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CertificationType[]> {
    return super.RetrieveAll();
  }

  Save(certificationType: CertificationType): Promise<CertificationType> {
    if (!CertificationType.Validate(certificationType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(certificationType);
    }
    return super.Save(certificationType);
  }

  SaveAttached(certificationType: CertificationType): Promise<CertificationType> {
    if (!CertificationType.Validate(certificationType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(certificationType);
    }
    return super.SaveAttached(certificationType);
  }

  SaveCollection(certificationTypeList: CertificationType[]): Promise<Result> {
    return super.SaveCollection(certificationTypeList);
  }

  Delete(certificationType: CertificationType): Promise<boolean> {
    return super.Delete(certificationType);
  }

  Seek(certificationType: CertificationType = CertificationType.SeekInstance()): Promise<CertificationType[]> {
    return super.Seek(certificationType);
  }

  SeekLast(certificationType: CertificationType): Promise<CertificationType> {
    return super.SeekLast(certificationType);
  }

  SeekByValue(value: string = ''): Promise<CertificationType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}