import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ObjectiveWeightNonOperational } from '../objectiveWeightNonOperational';


@Component({
  selector: 'pms-objectiveWeightNonOperational-seek',
  templateUrl: './objectiveWeightNonOperational.seek.html',
  styleUrls: ['./objectiveWeightNonOperational.seek.css']
})
export class ObjectiveWeightNonOperationalSeekUI extends SeekModal<ObjectiveWeightNonOperational> {

  objectiveWeightNonOperational: ObjectiveWeightNonOperational = new ObjectiveWeightNonOperational();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.objectiveWeightNonOperational);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}