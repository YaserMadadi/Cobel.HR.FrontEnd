import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Property } from '../property';


@Component({
  selector: 'core-property-seek',
  templateUrl: './property.seek.html',
  styleUrls: ['./property.seek.css']
})
export class PropertySeekUI extends SeekModal<Property> {

  property: Property = new Property();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.property);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}