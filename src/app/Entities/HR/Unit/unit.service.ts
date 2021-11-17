import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Unit } from './unit';
import { UnitServiceCollection } from './unit.service.collection';

import { DepartmentService } from '../Department/department.service';
import { Position } from '../Position/position';
import { PositionDivisionService } from '../../Base.HR/PositionDivision/positionDivision.service';


@Injectable({ providedIn: 'root' })
export class UnitService extends Service<Unit> implements IService<Unit> {

  constructor(public ServiceCollection: UnitServiceCollection,
		public DepartmentService: DepartmentService,
		public PositionDivisionService: PositionDivisionService) {
    super(ServiceCollection.API_Operation, Unit.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Unit();
}

  RetrieveById(id: number): Promise<Unit> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Unit[]> {
    return super.RetrieveAll();
  }

  Save(unit: Unit): Promise<Unit> {
    if (!Unit.Validate(unit)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(unit);
    }
    return super.Save(unit);
  }

  SaveAttached(unit: Unit): Promise<Unit> {
    if (!Unit.Validate(unit)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(unit);
    }
    return super.SaveAttached(unit);
  }

  SaveCollection(unitList: Unit[]): Promise<Result> {
    return super.SaveCollection(unitList);
  }

  Delete(unit: Unit): Promise<boolean> {
    return super.Delete(unit);
  }

  Seek(unit: Unit = Unit.SeekInstance()): Promise<Unit[]> {
    return super.Seek(unit);
  }

  SeekLast(unit: Unit): Promise<Unit> {
    return super.SeekLast(unit);
  }

  SeekByValue(value: string = ''): Promise<Unit[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}