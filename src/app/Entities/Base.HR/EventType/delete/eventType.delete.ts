import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { EventType } from '../eventType';
import { EventTypeService } from '../eventType.service';


@Component({
  selector: 'base-hr-eventType-delete',
  templateUrl: './eventType.delete.html',
  styleUrls: ['./eventType.delete.css'],
  providers: [EventTypeService]
})
export class EventTypeDeleteUI extends DeleteModal<EventType> {

    constructor(private eventTypeService: EventTypeService){
        super(eventTypeService);
    }

}