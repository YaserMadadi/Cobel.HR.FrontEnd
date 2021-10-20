import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Habitancy } from './habitancy';
import { HabitancyServiceCollection } from './habitancy.service.collection';

import { PersonService } from '../Person/person.service';
import { HabitancyTypeService } from '../../Base/HabitancyType/habitancyType.service';
import { CityService } from '../../Base/City/city.service';


@Injectable({ providedIn: 'root' })
export class HabitancyService extends Service<Habitancy> implements IService<Habitancy> {

  constructor(public ServiceCollection: HabitancyServiceCollection,
		public PersonService: PersonService,
		public HabitancyTypeService: HabitancyTypeService,
		public CityService: CityService) {
    super(ServiceCollection.API_Operation, Habitancy.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Habitancy();
}

  RetrieveById(id: number): Promise<Habitancy> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Habitancy[]> {
    return super.RetrieveAll();
  }

  Save(habitancy: Habitancy): Promise<Habitancy> {
    if (!Habitancy.Validate(habitancy)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(habitancy);
    }
    return super.Save(habitancy);
  }

  SaveAttached(habitancy: Habitancy): Promise<Habitancy> {
    if (!Habitancy.Validate(habitancy)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(habitancy);
    }
    return super.SaveAttached(habitancy);
  }

  SaveCollection(habitancyList: Habitancy[]): Promise<Result> {
    return super.SaveCollection(habitancyList);
  }

  Delete(habitancy: Habitancy): Promise<boolean> {
    return super.Delete(habitancy);
  }

  Seek(habitancy: Habitancy = Habitancy.SeekInstance()): Promise<Habitancy[]> {
    return super.Seek(habitancy);
  }

  SeekLast(habitancy: Habitancy): Promise<Habitancy> {
    return super.SeekLast(habitancy);
  }

  SeekByValue(value: string = ''): Promise<Habitancy[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}