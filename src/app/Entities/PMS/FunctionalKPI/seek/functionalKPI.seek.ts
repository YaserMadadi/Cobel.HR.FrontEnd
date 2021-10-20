import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { FunctionalKPI } from '../functionalKPI';


@Component({
  selector: 'pms-functionalKPI-seek',
  templateUrl: './functionalKPI.seek.html',
  styleUrls: ['./functionalKPI.seek.css']
})
export class FunctionalKPISeekUI extends SeekModal<FunctionalKPI> {

  functionalKPI: FunctionalKPI = new FunctionalKPI();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.functionalKPI);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}