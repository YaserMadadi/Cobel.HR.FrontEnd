
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { EventType } from '../eventType';


@Component({
  selector: 'base-hr-eventType-seek',
  templateUrl: './eventType.seek.html',
  styleUrls: ['./eventType.seek.css']
})
export class EventTypeSeekUI extends SeekModal<EventType> {

  eventType: EventType = new EventType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.eventType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
