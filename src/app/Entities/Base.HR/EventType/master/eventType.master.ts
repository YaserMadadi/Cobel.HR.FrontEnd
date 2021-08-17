import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { EventType } from '../eventType';
import { EventTypeService } from '../eventType.service';
import { EventTypeDeleteUI } from '../delete/eventType.delete';
import { EventTypeEditUI } from '../edit/eventType.edit';
import { EmployeeEventService } from '../../../HR/EmployeeEvent/employeeEvent.service';



@Component({
  selector: 'base-hr-eventType-master',
  templateUrl: './eventType.master.html',
  styleUrls: ['./eventType.master.css'],
  providers: [
    EventTypeService,
    EmployeeEventService,
  ]
})
export class EventTypeMasterUI extends MasterModal<EventType> {

  constructor(private eventTypeService: EventTypeService) {
    super(eventTypeService);
  }
}
