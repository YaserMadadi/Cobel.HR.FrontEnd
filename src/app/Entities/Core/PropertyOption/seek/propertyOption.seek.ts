import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { PropertyOption } from '../propertyOption';


@Component({
  selector: 'core-propertyOption-seek',
  templateUrl: './propertyOption.seek.html',
  styleUrls: ['./propertyOption.seek.css']
})
export class PropertyOptionSeekUI extends SeekModal<PropertyOption> {

  propertyOption: PropertyOption = new PropertyOption();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.propertyOption);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}