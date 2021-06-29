import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { MilitaryService } from '../militaryService';


@Component({
  selector: 'hr-militaryService-seek',
  templateUrl: './militaryService.seek.html',
  styleUrls: ['./militaryService.seek.css']
})
export class MilitaryServiceSeekUI extends SeekModal<MilitaryService> {

  militaryService: MilitaryService = new MilitaryService();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.militaryService);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}