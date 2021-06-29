import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { DesirableSituation } from '../desirableSituation';


@Component({
  selector: 'base-pms-desirableSituation-seek',
  templateUrl: './desirableSituation.seek.html',
  styleUrls: ['./desirableSituation.seek.css']
})
export class DesirableSituationSeekUI extends SeekModal<DesirableSituation> {

  desirableSituation: DesirableSituation = new DesirableSituation();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.desirableSituation);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}