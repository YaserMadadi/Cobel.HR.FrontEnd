import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ConnectionType } from '../connectionType';


@Component({
  selector: 'base-connectionType-seek',
  templateUrl: './connectionType.seek.html',
  styleUrls: ['./connectionType.seek.css']
})
export class ConnectionTypeSeekUI extends SeekModal<ConnectionType> {

  connectionType: ConnectionType = new ConnectionType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.connectionType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}