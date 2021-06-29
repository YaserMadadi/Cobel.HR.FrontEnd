import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { AssessorConnectionLine } from './assessorConnectionLine';
import { AssessorConnectionLineServiceCollection } from './assessorConnectionLine.service.collection';

import { AssessorService } from '../Assessor/assessor.service';
import { ConnectionTypeService } from '../../Base/ConnectionType/connectionType.service';


@Injectable({ providedIn: 'root' })
export class AssessorConnectionLineService extends Service<AssessorConnectionLine> implements IService<AssessorConnectionLine> {

  constructor(public ServiceCollection: AssessorConnectionLineServiceCollection,
		public AssessorService: AssessorService,
		public ConnectionTypeService: ConnectionTypeService) {
    super(ServiceCollection.API_Operation, AssessorConnectionLine.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<AssessorConnectionLine> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<AssessorConnectionLine[]> {
    return super.RetrieveAll();
  }

  Save(assessorConnectionLine: AssessorConnectionLine): Promise<AssessorConnectionLine> {
    if (!AssessorConnectionLine.Validate(assessorConnectionLine)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessorConnectionLine);
    }
    return super.Save(assessorConnectionLine);
  }

  SaveAttached(assessorConnectionLine: AssessorConnectionLine): Promise<AssessorConnectionLine> {
    if (!AssessorConnectionLine.Validate(assessorConnectionLine)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessorConnectionLine);
    }
    return super.SaveAttached(assessorConnectionLine);
  }

  SaveCollection(assessorConnectionLineList: AssessorConnectionLine[]): Promise<Result> {
    return super.SaveCollection(assessorConnectionLineList);
  }

  Delete(assessorConnectionLine: AssessorConnectionLine): Promise<boolean> {
    return super.Delete(assessorConnectionLine);
  }

  Seek(assessorConnectionLine: AssessorConnectionLine = AssessorConnectionLine.SeekInstance()): Promise<AssessorConnectionLine[]> {
    return super.Seek(assessorConnectionLine);
  }

  SeekLast(assessorConnectionLine: AssessorConnectionLine): Promise<AssessorConnectionLine> {
    return super.SeekLast(assessorConnectionLine);
  }

  SeekByValue(value: string = ''): Promise<AssessorConnectionLine[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}