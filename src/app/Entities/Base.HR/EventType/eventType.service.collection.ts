import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { EventType } from './eventType';

import { EmployeeEvent } from '../../HR/EmployeeEvent/employeeEvent';


@Injectable({ providedIn: 'root' })
export class EventTypeServiceCollection extends ServiceCollection<EventType> {

  constructor(public API_Operation: API_Operation<EventType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfEmployeeEvent(eventType: EventType, employeeEvent: EmployeeEvent = EmployeeEvent.SeekInstance()): Promise<EmployeeEvent[]> {
    return super.CollectionOf<EmployeeEvent>(eventType, employeeEvent);
  }

	//endregion
}