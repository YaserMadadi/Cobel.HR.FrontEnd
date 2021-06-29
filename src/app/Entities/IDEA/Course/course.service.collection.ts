import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Course } from './course';

import { Training } from '../Training/training';


@Injectable({ providedIn: 'root' })
export class CourseServiceCollection extends ServiceCollection<Course> {

  constructor(public API_Operation: API_Operation<Course>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfTraining(course: Course, training: Training = Training.SeekInstance()): Promise<Training[]> {
    return super.CollectionOf<Training>(course, training);
  }

	//endregion
}