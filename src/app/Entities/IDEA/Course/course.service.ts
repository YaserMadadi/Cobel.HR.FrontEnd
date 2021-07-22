import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Course } from './course';
import { CourseServiceCollection } from './course.service.collection';

import { Training } from '../Training/training';


@Injectable({ providedIn: 'root' })
export class CourseService extends Service<Course> implements IService<Course> {

  constructor(public ServiceCollection: CourseServiceCollection) {
    super(ServiceCollection.API_Operation, Course.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Course();
}

  RetrieveById(id: number): Promise<Course> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Course[]> {
    return super.RetrieveAll();
  }

  Save(course: Course): Promise<Course> {
    if (!Course.Validate(course)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(course);
    }
    return super.Save(course);
  }

  SaveAttached(course: Course): Promise<Course> {
    if (!Course.Validate(course)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(course);
    }
    return super.SaveAttached(course);
  }

  SaveCollection(courseList: Course[]): Promise<Result> {
    return super.SaveCollection(courseList);
  }

  Delete(course: Course): Promise<boolean> {
    return super.Delete(course);
  }

  Seek(course: Course = Course.SeekInstance()): Promise<Course[]> {
    return super.Seek(course);
  }

  SeekLast(course: Course): Promise<Course> {
    return super.SeekLast(course);
  }

  SeekByValue(value: string = ''): Promise<Course[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}