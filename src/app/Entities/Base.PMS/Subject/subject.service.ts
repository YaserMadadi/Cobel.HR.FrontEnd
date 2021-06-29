import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Subject } from './subject';
import { SubjectServiceCollection } from './subject.service.collection';

import { IndividualDevelopmentPlan } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';


@Injectable({ providedIn: 'root' })
export class SubjectService extends Service<Subject> implements IService<Subject> {

  constructor(public ServiceCollection: SubjectServiceCollection) {
    super(ServiceCollection.API_Operation, Subject.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Subject> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Subject[]> {
    return super.RetrieveAll();
  }

  Save(subject: Subject): Promise<Subject> {
    if (!Subject.Validate(subject)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(subject);
    }
    return super.Save(subject);
  }

  SaveAttached(subject: Subject): Promise<Subject> {
    if (!Subject.Validate(subject)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(subject);
    }
    return super.SaveAttached(subject);
  }

  SaveCollection(subjectList: Subject[]): Promise<Result> {
    return super.SaveCollection(subjectList);
  }

  Delete(subject: Subject): Promise<boolean> {
    return super.Delete(subject);
  }

  Seek(subject: Subject = Subject.SeekInstance()): Promise<Subject[]> {
    return super.Seek(subject);
  }

  SeekLast(subject: Subject): Promise<Subject> {
    return super.SeekLast(subject);
  }

  SeekByValue(value: string = ''): Promise<Subject[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}