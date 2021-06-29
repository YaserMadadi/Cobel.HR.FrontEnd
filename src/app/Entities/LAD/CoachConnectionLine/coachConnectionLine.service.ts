import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CoachConnectionLine } from './coachConnectionLine';
import { CoachConnectionLineServiceCollection } from './coachConnectionLine.service.collection';

import { CoachService } from '../Coach/coach.service';
import { ConnectionTypeService } from '../../Base/ConnectionType/connectionType.service';


@Injectable({ providedIn: 'root' })
export class CoachConnectionLineService extends Service<CoachConnectionLine> implements IService<CoachConnectionLine> {

  constructor(public ServiceCollection: CoachConnectionLineServiceCollection,
		public CoachService: CoachService,
		public ConnectionTypeService: ConnectionTypeService) {
    super(ServiceCollection.API_Operation, CoachConnectionLine.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<CoachConnectionLine> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CoachConnectionLine[]> {
    return super.RetrieveAll();
  }

  Save(coachConnectionLine: CoachConnectionLine): Promise<CoachConnectionLine> {
    if (!CoachConnectionLine.Validate(coachConnectionLine)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coachConnectionLine);
    }
    return super.Save(coachConnectionLine);
  }

  SaveAttached(coachConnectionLine: CoachConnectionLine): Promise<CoachConnectionLine> {
    if (!CoachConnectionLine.Validate(coachConnectionLine)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coachConnectionLine);
    }
    return super.SaveAttached(coachConnectionLine);
  }

  SaveCollection(coachConnectionLineList: CoachConnectionLine[]): Promise<Result> {
    return super.SaveCollection(coachConnectionLineList);
  }

  Delete(coachConnectionLine: CoachConnectionLine): Promise<boolean> {
    return super.Delete(coachConnectionLine);
  }

  Seek(coachConnectionLine: CoachConnectionLine = CoachConnectionLine.SeekInstance()): Promise<CoachConnectionLine[]> {
    return super.Seek(coachConnectionLine);
  }

  SeekLast(coachConnectionLine: CoachConnectionLine): Promise<CoachConnectionLine> {
    return super.SeekLast(coachConnectionLine);
  }

  SeekByValue(value: string = ''): Promise<CoachConnectionLine[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}