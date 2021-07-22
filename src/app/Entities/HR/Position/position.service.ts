import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Position } from './position';
import { PositionServiceCollection } from './position.service.collection';

import { LevelService } from '../Level/level.service';
import { UnitService } from '../Unit/unit.service';
import { PositionCategoryService } from '../PositionCategory/positionCategory.service';
import { PromotionAssessment } from '../../LAD/PromotionAssessment/promotionAssessment';
import { ConfigTargetSetting } from '../../PMS/ConfigTargetSetting/configTargetSetting';
import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';
import { PositionAssignment } from '../PositionAssignment/positionAssignment';
import { RotationAssessment } from '../../LAD/RotationAssessment/rotationAssessment';


@Injectable({ providedIn: 'root' })
export class PositionService extends Service<Position> implements IService<Position> {

  constructor(public ServiceCollection: PositionServiceCollection,
		public LevelService: LevelService,
		public UnitService: UnitService,
		public PositionCategoryService: PositionCategoryService) {
    super(ServiceCollection.API_Operation, Position.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Position();
}

  RetrieveById(id: number): Promise<Position> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Position[]> {
    return super.RetrieveAll();
  }

  Save(position: Position): Promise<Position> {
    if (!Position.Validate(position)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(position);
    }
    return super.Save(position);
  }

  SaveAttached(position: Position): Promise<Position> {
    if (!Position.Validate(position)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(position);
    }
    return super.SaveAttached(position);
  }

  SaveCollection(positionList: Position[]): Promise<Result> {
    return super.SaveCollection(positionList);
  }

  Delete(position: Position): Promise<boolean> {
    return super.Delete(position);
  }

  Seek(position: Position = Position.SeekInstance()): Promise<Position[]> {
    return super.Seek(position);
  }

  SeekLast(position: Position): Promise<Position> {
    return super.SeekLast(position);
  }

  SeekByValue(value: string = ''): Promise<Position[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}