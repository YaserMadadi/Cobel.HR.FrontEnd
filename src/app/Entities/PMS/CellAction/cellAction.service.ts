import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CellAction } from './cellAction';
import { CellActionServiceCollection } from './cellAction.service.collection';

import { ScoreCellService } from '../ScoreCell/scoreCell.service';


@Injectable({ providedIn: 'root' })
export class CellActionService extends Service<CellAction> implements IService<CellAction> {

  constructor(public ServiceCollection: CellActionServiceCollection,
		public ScoreCellService: ScoreCellService) {
    super(ServiceCollection.API_Operation, CellAction.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new CellAction();
}

  RetrieveById(id: number): Promise<CellAction> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CellAction[]> {
    return super.RetrieveAll();
  }

  Save(cellAction: CellAction): Promise<CellAction> {
    if (!CellAction.Validate(cellAction)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(cellAction);
    }
    return super.Save(cellAction);
  }

  SaveAttached(cellAction: CellAction): Promise<CellAction> {
    if (!CellAction.Validate(cellAction)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(cellAction);
    }
    return super.SaveAttached(cellAction);
  }

  SaveCollection(cellActionList: CellAction[]): Promise<Result> {
    return super.SaveCollection(cellActionList);
  }

  Delete(cellAction: CellAction): Promise<boolean> {
    return super.Delete(cellAction);
  }

  Seek(cellAction: CellAction = CellAction.SeekInstance()): Promise<CellAction[]> {
    return super.Seek(cellAction);
  }

  SeekLast(cellAction: CellAction): Promise<CellAction> {
    return super.SeekLast(cellAction);
  }

  SeekByValue(value: string = ''): Promise<CellAction[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}