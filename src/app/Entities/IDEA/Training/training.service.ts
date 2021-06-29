import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Training } from './training';
import { TrainingServiceCollection } from './training.service.collection';

import { EmployeeService } from '../../HR/Employee/employee.service';
import { CourseService } from '../Course/course.service';


@Injectable({ providedIn: 'root' })
export class TrainingService extends Service<Training> implements IService<Training> {

  constructor(public ServiceCollection: TrainingServiceCollection,
		public EmployeeService: EmployeeService,
		public CourseService: CourseService) {
    super(ServiceCollection.API_Operation, Training.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Training> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Training[]> {
    return super.RetrieveAll();
  }

  Save(training: Training): Promise<Training> {
    if (!Training.Validate(training)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(training);
    }
    return super.Save(training);
  }

  SaveAttached(training: Training): Promise<Training> {
    if (!Training.Validate(training)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(training);
    }
    return super.SaveAttached(training);
  }

  SaveCollection(trainingList: Training[]): Promise<Result> {
    return super.SaveCollection(trainingList);
  }

  Delete(training: Training): Promise<boolean> {
    return super.Delete(training);
  }

  Seek(training: Training = Training.SeekInstance()): Promise<Training[]> {
    return super.Seek(training);
  }

  SeekLast(training: Training): Promise<Training> {
    return super.SeekLast(training);
  }

  SeekByValue(value: string = ''): Promise<Training[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}