import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CompetencyItemKPI } from '../competencyItemKPI';


@Component({
  selector: 'pms-competencyItemKPI-seek',
  templateUrl: './competencyItemKPI.seek.html',
  styleUrls: ['./competencyItemKPI.seek.css']
})
export class CompetencyItemKPISeekUI extends SeekModal<CompetencyItemKPI> {

  competencyItemKPI: CompetencyItemKPI = new CompetencyItemKPI();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.competencyItemKPI);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}