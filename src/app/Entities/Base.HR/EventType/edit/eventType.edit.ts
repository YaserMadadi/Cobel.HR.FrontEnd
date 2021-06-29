import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { EventType } from '../eventType';
import { EventTypeService } from '../eventType.service';



@Component({
  selector: 'base-hr-eventType-edit',
  templateUrl: './eventType.edit.html',
  styleUrls: ['./eventType.edit.css']
})
export class EventTypeEditUI extends EditModal<EventType> implements IEditModal<EventType>  {
  
  constructor(private eventTypeService: EventTypeService) {
    super(eventTypeService); 
    this.currentInstance = new EventType();
  }

  

  @ViewChild('eventTypeEditUI')
  private eventTypeEditUI: NgForm;

  Init(eventType: EventType = new EventType()) {
    if (eventType.isNew)
      this.eventTypeEditUI.reset();
    this.InitEventType(eventType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitEventType(eventType: EventType) {
    if (!eventType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = eventType;
  }

  ResetForm() {
    
  }
}