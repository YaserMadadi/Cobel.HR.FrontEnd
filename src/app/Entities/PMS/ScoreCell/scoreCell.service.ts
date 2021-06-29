import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ScoreCell } from './scoreCell';
import { ScoreCellServiceCollection } from './scoreCell.service.collection';

import { OperationalAppraise } from '../OperationalAppraise/operationalAppraise';
import { NonOperationalAppraise } from '../NonOperationalAppraise/nonOperationalAppraise';
import { CellAction } from '../CellAction/cellAction';


@Injectable({ providedIn: 'root' })
export class ScoreCellService extends Service<ScoreCell> implements IService<ScoreCell> {

  constructor(public ServiceCollection: ScoreCellServiceCollection) {
    super(ServiceCollection.API_Operation, ScoreCell.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<ScoreCell> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ScoreCell[]> {
    return super.RetrieveAll();
  }

  Save(scoreCell: ScoreCell): Promise<ScoreCell> {
    if (!ScoreCell.Validate(scoreCell)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(scoreCell);
    }
    return super.Save(scoreCell);
  }

  SaveAttached(scoreCell: ScoreCell): Promise<ScoreCell> {
    if (!ScoreCell.Validate(scoreCell)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(scoreCell);
    }
    return super.SaveAttached(scoreCell);
  }

  SaveCollection(scoreCellList: ScoreCell[]): Promise<Result> {
    return super.SaveCollection(scoreCellList);
  }

  Delete(scoreCell: ScoreCell): Promise<boolean> {
    return super.Delete(scoreCell);
  }

  Seek(scoreCell: ScoreCell = ScoreCell.SeekInstance()): Promise<ScoreCell[]> {
    return super.Seek(scoreCell);
  }

  SeekLast(scoreCell: ScoreCell): Promise<ScoreCell> {
    return super.SeekLast(scoreCell);
  }

  SeekByValue(value: string = ''): Promise<ScoreCell[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}