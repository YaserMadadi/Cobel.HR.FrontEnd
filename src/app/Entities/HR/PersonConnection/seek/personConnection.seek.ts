import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { PersonConnection } from '../personConnection';


@Component({
  selector: 'hr-personConnection-seek',
  templateUrl: './personConnection.seek.html',
  styleUrls: ['./personConnection.seek.css']
})
export class PersonConnectionSeekUI extends SeekModal<PersonConnection> {

  personConnection: PersonConnection = new PersonConnection();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.personConnection);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}