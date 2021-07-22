import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CompetencyItem } from '../competencyItem';


@Component({
  selector: 'pms-competencyItem-seek',
  templateUrl: './competencyItem.seek.html',
  styleUrls: ['./competencyItem.seek.css']
})
export class CompetencyItemSeekUI extends SeekModal<CompetencyItem> {

  competencyItem: CompetencyItem = new CompetencyItem();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.competencyItem);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}