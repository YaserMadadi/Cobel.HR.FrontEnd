import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Person } from '../person';


@Component({
  selector: 'hr-person-seek',
  templateUrl: './person.seek.html',
  styleUrls: ['./person.seek.css']
})
export class PersonSeekUI extends SeekModal<Person> {

  person: Person = new Person();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.person);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}