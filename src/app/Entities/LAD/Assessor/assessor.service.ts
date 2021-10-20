import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Assessor } from './assessor';
import { AssessorServiceCollection } from './assessor.service.collection';

import { GenderService } from '../../Base/Gender/gender.service';
import { AssessorConnectionLine } from '../AssessorConnectionLine/assessorConnectionLine';
import { Assessment } from '../Assessment/assessment';


@Injectable({ providedIn: 'root' })
export class AssessorService extends Service<Assessor> implements IService<Assessor> {

  constructor(public ServiceCollection: AssessorServiceCollection,
		public GenderService: GenderService) {
    super(ServiceCollection.API_Operation, Assessor.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Assessor();
}

  RetrieveById(id: number): Promise<Assessor> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Assessor[]> {
    return super.RetrieveAll();
  }

  Save(assessor: Assessor): Promise<Assessor> {
    if (!Assessor.Validate(assessor)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessor);
    }
    return super.Save(assessor);
  }

  SaveAttached(assessor: Assessor): Promise<Assessor> {
    if (!Assessor.Validate(assessor)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessor);
    }
    return super.SaveAttached(assessor);
  }

  SaveCollection(assessorList: Assessor[]): Promise<Result> {
    return super.SaveCollection(assessorList);
  }

  Delete(assessor: Assessor): Promise<boolean> {
    return super.Delete(assessor);
  }

  Seek(assessor: Assessor = Assessor.SeekInstance()): Promise<Assessor[]> {
    return super.Seek(assessor);
  }

  SeekLast(assessor: Assessor): Promise<Assessor> {
    return super.SeekLast(assessor);
  }

  SeekByValue(value: string = ''): Promise<Assessor[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}