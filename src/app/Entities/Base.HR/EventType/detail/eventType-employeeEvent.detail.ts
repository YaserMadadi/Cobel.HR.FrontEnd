import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { EventType } from '../eventType';
import { EventTypeService } from '../eventType.service';

import { EmployeeEvent } from '../../../HR/EmployeeEvent/employeeEvent';
import { EmployeeEventMasterUI } from '../../../HR/EmployeeEvent/master/employeeEvent.master';
import { EmployeeEventEditUI } from '../../../HR/EmployeeEvent/edit/employeeEvent.edit';
import { EmployeeEventDeleteUI } from '../../../HR/EmployeeEvent/delete/employeeEvent.delete';



@Component({
  selector: 'eventType-employeeEvent-detail',
  templateUrl: './eventType-employeeEvent.detail.html',
  styleUrls: ['./eventType-employeeEvent.detail.css'],
  providers: [EventTypeService]
}) 

@Injectable()
export class EventType_EmployeeEvent_DetailUI extends DetailView<EventType> {

  constructor(private eventTypeService: EventTypeService) {
    super(eventTypeService);
  }

  public EmployeeEventList : EmployeeEvent[] = [];
  
  public currentEmployeeEvent : EmployeeEvent = new EmployeeEvent();

  private eventType: EventType = new EventType();

  @Input()
  public set EventType(value: EventType) {
    this.eventType = value;
    this.onReload();
  }

  public get EventType(): EventType { return this.eventType }

  public onReload(){
    if (EventType.NotConfirm(this.eventType))
      return;
    this.eventTypeService
      .ServiceCollection
      .CollectionOfEmployeeEvent(this.eventType)
      .then(employeeEventList => {
        this.EmployeeEventList = employeeEventList;
        this.currentEmployeeEvent = new EmployeeEvent();
      });
  }

  public onSelect(i: number) {
    this.currentEmployeeEvent = this.EmployeeEventList[i];
    if (EmployeeEvent.NotConfirm(this.currentEmployeeEvent))
      this.currentEmployeeEvent = new EmployeeEvent();
  }

  public onDblClicked(masterUI: EmployeeEventMasterUI) {
    if (EmployeeEvent.NotConfirm(this.currentEmployeeEvent))
      return;
    masterUI.ShowDialog(this.currentEmployeeEvent);
  }

  public onAdd(editUI: EmployeeEventEditUI) {
    editUI.EventType = this.eventType;
    editUI.ShowDialog(new EmployeeEvent());
  }

  public onEdit(editUI: EmployeeEventEditUI) {
    if (EmployeeEvent.NotConfirm(this.currentEmployeeEvent))
      return;
    editUI.ShowDialog(this.currentEmployeeEvent);
  }

  public onDelete(deleteUI: EmployeeEventDeleteUI) {
    if (EmployeeEvent.NotConfirm(this.currentEmployeeEvent))
      return;
    deleteUI.ShowDialog(this.currentEmployeeEvent);
  }

  public onEditModal_Closed(employeeEvent: EmployeeEvent) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}