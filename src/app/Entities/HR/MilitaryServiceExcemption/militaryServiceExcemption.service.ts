import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { MilitaryServiceExcemption } from './militaryServiceExcemption';
import { MilitaryServiceExcemptionServiceCollection } from './militaryServiceExcemption.service.collection';

import { MilitaryServiceService } from '../MilitaryService/militaryService.service';
import { ExcemptionTypeService } from '../../Base/ExcemptionType/excemptionType.service';


@Injectable({ providedIn: 'root' })
export class MilitaryServiceExcemptionService extends Service<MilitaryServiceExcemption> implements IService<MilitaryServiceExcemption> {

  constructor(public ServiceCollection: MilitaryServiceExcemptionServiceCollection,
		public MilitaryServiceService: MilitaryServiceService,
		public ExcemptionTypeService: ExcemptionTypeService) {
    super(ServiceCollection.API_Operation, MilitaryServiceExcemption.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new MilitaryServiceExcemption();
}

  RetrieveById(id: number): Promise<MilitaryServiceExcemption> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<MilitaryServiceExcemption[]> {
    return super.RetrieveAll();
  }

  Save(militaryServiceExcemption: MilitaryServiceExcemption): Promise<MilitaryServiceExcemption> {
    if (!MilitaryServiceExcemption.Validate(militaryServiceExcemption)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(militaryServiceExcemption);
    }
    return super.Save(militaryServiceExcemption);
  }

  SaveAttached(militaryServiceExcemption: MilitaryServiceExcemption): Promise<MilitaryServiceExcemption> {
    if (!MilitaryServiceExcemption.Validate(militaryServiceExcemption)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(militaryServiceExcemption);
    }
    return super.SaveAttached(militaryServiceExcemption);
  }

  SaveCollection(militaryServiceExcemptionList: MilitaryServiceExcemption[]): Promise<Result> {
    return super.SaveCollection(militaryServiceExcemptionList);
  }

  Delete(militaryServiceExcemption: MilitaryServiceExcemption): Promise<boolean> {
    return super.Delete(militaryServiceExcemption);
  }

  Seek(militaryServiceExcemption: MilitaryServiceExcemption = MilitaryServiceExcemption.SeekInstance()): Promise<MilitaryServiceExcemption[]> {
    return super.Seek(militaryServiceExcemption);
  }

  SeekLast(militaryServiceExcemption: MilitaryServiceExcemption): Promise<MilitaryServiceExcemption> {
    return super.SeekLast(militaryServiceExcemption);
  }

  SeekByValue(value: string = ''): Promise<MilitaryServiceExcemption[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}